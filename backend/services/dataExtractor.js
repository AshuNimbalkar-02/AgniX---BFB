import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function extractDataWithLLM(userMessage) {
    if (!process.env.GEMINI_API_KEY) {
        console.error("GEMINI_API_KEY is not set in .env");
        return { pincode: 'unknown', soil_type: 'unknown', water_source: 'unknown', season: 'unknown' };
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

        const prompt = `
        You are an AI assistant for an agriculture app. 
        Extract the following details from the user's message in Hindi, Marathi or English.
        Return ONLY a valid JSON object with the exact keys: "pincode", "soil_type", "water_source", "season".
        If a detail is missing or unclear, set its value to "unknown".
        
        CRITICAL: Normalize the extracted values EXACTLY to these expected strings (do not translate to English):
        - "soil_type": "Kali", "Lal", or "Retili"
        - "season": "Kharif" or "Rabi"
        - "water_source": "Barish" or "Kuwa"
        - "pincode": 6-digit number only
        
        User message: "${userMessage}"
        `;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        } else {
            throw new Error("Invalid JSON format from LLM");
        }
    } catch (error) {
        console.error("LLM Error:", error);
        return {
            pincode: "unknown",
            soil_type: "unknown",
            water_source: "unknown",
            season: "unknown"
        };
    }
}
