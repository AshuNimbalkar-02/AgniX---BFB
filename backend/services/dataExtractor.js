const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function extractDataWithLLM(userMessage) {
    if (!process.env.GEMINI_API_KEY) {
        console.error("GEMINI_API_KEY is not set in .env");
        return { pincode: 'unknown', soil_type: 'unknown', water_source: 'unknown', season: 'unknown' };
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
        You are an AI assistant for an agriculture app. 
        Extract the following details from the user's message in Hindi, Marathi or English.
        Return ONLY a valid JSON object with the exact keys: "pincode", "soil_type", "water_source", "season".
        If a detail is missing or unclear, set its value to "unknown".
        
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

module.exports = { extractDataWithLLM };
