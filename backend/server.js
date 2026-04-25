import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { predictCrops } from '../ai_ml/predictor.js';
import startWhatsAppBot from './whatsappBot.js';

dotenv.config();

console.log("--- BACKEND DEBUG ---");
console.log("Current Directory:", process.cwd());
if (process.env.GEMINI_API_KEY) {
  console.log(`API Key Found! Starts with: ${process.env.GEMINI_API_KEY.substring(0, 7)}...`);
} else {
  console.error("CRITICAL: GEMINI_API_KEY is NOT found in process.env");
}
console.log("----------------------");

const genAI = new GoogleGenerativeAI((process.env.GEMINI_API_KEY || "").trim());

const SYSTEM_PROMPT = `You are the AgniX AI Farming Assistant. Your primary goal is to help farmers in Maharashtra, India.

CRITICAL INSTRUCTION: ALWAYS RESPOND IN MARATHI BY DEFAULT. 
If the user asks a question in English, you can provide the answer in English, but otherwise, prioritize Marathi (मराठी).

CONTEXT:
- Project: AgniX - BFB (Big Farm Business).
- Expertise: Crop recommendations (Rice, Cotton, Sugarcane, etc.), NPK soil values, and seasonal planning (Kharif/Rabbi).
- Focus: Practical farming advice for Maharashtra's climate.
- Tone: Helpful, polite, and professional.`;

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// DIAGNOSTIC: List available models on startup
(async () => {
  try {
    const result = await genAI.listModels();
    console.log("--- AVAILABLE MODELS FOR YOUR KEY ---");
    result.models.forEach(m => console.log(`- ${m.name}`));
    console.log("-------------------------------------");
  } catch (e) {
    console.error("DIAGNOSTIC ERROR: Could not list models. This usually means your API KEY is invalid or doesn't have Gemini API enabled.");
  }
})();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('AgniX Backend API'));

app.post('/api/recommend', (req, res) => {
  try {
    const inputs = req.body;
    if (!inputs) {
      return res.status(400).json({ error: 'Missing farm inputs' });
    }
    
    const recommendations = predictCrops(inputs);
    res.json({ recommendations });
  } catch (error) {
    console.error("Prediction Error:", error);
    res.status(500).json({ error: 'Failed to generate recommendations' });
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    const apiKey = (process.env.GEMINI_API_KEY || "").trim();

    if (!apiKey || !apiKey.startsWith('AIza')) {
      return res.status(500).json({ 
        error: 'Invalid API Configuration', 
        details: 'API Key is missing or invalid. Check your backend/.env file.' 
      });
    }

    const currentModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const chat = currentModel.startChat({
      history: [
        { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
        { role: "model", parts: [{ text: "हो, मी अ‍ॅग्निक्स आय सहाय्यक आहे. मी तुम्हाला कशी मदत करू शकतो?" }] },
        ...(history || [])
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    res.json({ text: response.text() });
  } catch (error) {
    console.error("FULL GEMINI ERROR:", error);
    res.status(500).json({ 
      error: 'AI Assistant Error', 
      details: error.message || 'Service currently unavailable'
    });
  }
});

const server = app.listen(3000, () => {
    console.log('Server running on port 3000');
    startWhatsAppBot();
});

// Attempt graceful shutdown for node --watch
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
    });
});