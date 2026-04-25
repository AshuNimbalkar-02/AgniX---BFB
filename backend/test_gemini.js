const fetch = require('node-fetch') || globalThis.fetch;
require('dotenv').config({ path: 'e:/BERLIN/ENGG/PROJECTS/Wmanthan/decision/AgniX---BFB/backend/.env' });

async function run() {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
        const data = await response.json();
        if (data.models) {
             const names = data.models.filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent')).map(m => m.name);
             console.log(names);
        } else {
             console.log(data);
        }
    } catch (e) {
        console.error(e);
    }
}
run();
