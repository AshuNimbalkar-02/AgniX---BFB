const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { extractDataWithLLM } = require('./services/dataExtractor');

const sessions = {};

const startWhatsAppBot = () => {
    const client = new Client({
        authStrategy: new LocalAuth({ clientId: "agnix" })
    });

    client.on('qr', (qr) => {
        qrcode.generate(qr, { small: true });
        console.log('QR Code received, scan it with your WhatsApp');
    });

    client.on('ready', () => {
        console.log('WhatsApp Bot is ready!');
    });

    client.on('message', async msg => {
        const incomingMessage = msg.body;
        const text = incomingMessage.trim().toLowerCase();
        const userPhone = msg.from;

        // Reset Logic
        if (text === 'hi' || text === 'hello' || text === 'reset') {
            sessions[userPhone] = { pincode: null, soil: null, season: null, water: null };
            await msg.reply('AgniX Crop System mein aapka swagat hai! 🌱\n(AgniX पीक प्रणालीमध्ये आपले स्वागत आहे!)\n\nSahi fasal ki salah ke liye, kripya apna 6-digit Pincode batayein:\n(योग्य पिकाच्या सल्ल्यासाठी, कृपया तुमचा 6-अंकी पिनकोड सांगा:)');
            return;
        }

        // Initialize session if not exists
        if (!sessions[userPhone]) {
            sessions[userPhone] = { pincode: null, soil: null, season: null, water: null };
        }

        try {
            // Send incoming message to our LLM extraction service
            const extracted = await extractDataWithLLM(incomingMessage);

            if (extracted) {
                // Merge extracted data if it's valid and not 'unknown'
                if (extracted.pincode && extracted.pincode !== 'unknown') {
                    sessions[userPhone].pincode = extracted.pincode;
                }
                if (extracted.soil_type && extracted.soil_type !== 'unknown') {
                    sessions[userPhone].soil = extracted.soil_type;
                }
                if (extracted.season && extracted.season !== 'unknown') {
                    sessions[userPhone].season = extracted.season;
                }
                if (extracted.water_source && extracted.water_source !== 'unknown') {
                    sessions[userPhone].water = extracted.water_source;
                }
            }

            // Dynamic Sequential Prompting
            if (!sessions[userPhone].pincode) {
                await msg.reply('Sahi fasal ki salah ke liye, kripya apna 6-digit Pincode batayein:\n(योग्य पिकाच्या सल्ल्यासाठी, कृपया तुमचा 6-अंकी पिनकोड सांगा:)');
                return;
            } else if (!sessions[userPhone].soil) {
                await msg.reply('📍 Pincode save ho gaya. Ab kripya batayein aapke khet ki mitti kaisi hai? (Jaise: Kali, Lal, ya Retili)\n(पिनकोड सेव्ह झाला. तुमच्या शेतातील मातीचा प्रकार कोणता आहे? उदा: काळी, लाल, किंवा वालुकामय)');
                return;
            } else if (!sessions[userPhone].season) {
                await msg.reply('🪨 Mitti ki jankari mil gayi. Aap kaunse mausam ke liye fasal dekh rahe hain? (Kharif ya Rabi)\n(मातीची माहिती मिळाली. तुम्ही कोणत्या हंगामासाठी पीक पाहत आहात? खरीप की रब्बी)');
                return;
            } else if (!sessions[userPhone].water) {
                await msg.reply('🌦️ Mausam save ho gaya. Aakhri sawal: Sinchai (water) ki kya suvidha hai? (Barish ya Kuwa)\n(शेवटचा प्रश्न: सिंचनाची काय सुविधा आहे? पाऊस की विहीर)');
                return;
            }

            // All data successfully extracted
            await msg.reply(`AgniX AI Analysis Complete ✅\n\n📍 Pincode: ${sessions[userPhone].pincode}\n🪨 Mitti: ${sessions[userPhone].soil}\n🌦️ Mausam: ${sessions[userPhone].season}\n💧 Paani: ${sessions[userPhone].water}\n\n🌾 Fasal Ki Salah: Is AI analysis ke aadhar par aapko **Soybean** ya **Harbara** lagana chahiye.`);
            
            // Clear memory once flow is complete
            delete sessions[userPhone];
            
        } catch (error) {
            console.error('LLM Extraction Error:', error);
            await msg.reply('Maaf kijiye, abhi system me kuch takniki kharabi hai. Kripya thodi der baad prayas karein. (क्षमस्व, सध्या सिस्टममध्ये काही तांत्रिक बिघाड आहे. कृपया थोड्या वेळानंतर पुन्हा प्रयत्न करा.)');
        }
    });

    client.initialize();
};

export default startWhatsAppBot;
