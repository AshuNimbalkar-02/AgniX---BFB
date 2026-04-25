import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = (process.env.GEMINI_API_KEY || "").trim();

console.log("--- GEMINI CONNECTIVITY TEST ---");
console.log("Key Found:", apiKey ? "Yes" : "No");
console.log("Key Prefix:", apiKey.substring(0, 7));

if (!apiKey.startsWith("AIza")) {
    console.error("❌ ERROR: Your key does NOT start with 'AIza'. It is invalid.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function test() {
    try {
        console.log("Connecting to Google...");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hello, are you working?");
        console.log("✅ SUCCESS! AI Responded:", result.response.text());
    } catch (error) {
        console.error("❌ FAILED!");
        console.error("Error Name:", error.name);
        console.error("Error Message:", error.message);
        console.log("\n--- HOW TO FIX ---");
        if (error.message.includes("404")) {
            console.log("1. Go to https://aistudio.google.com/app/apikey");
            console.log("2. Create a NEW key in a NEW project.");
            console.log("3. The 404 means your current project doesn't have the Gemini API enabled.");
        } else if (error.message.includes("403")) {
            console.log("Your key is restricted. Check your billing or region.");
        }
    }
}

test();
