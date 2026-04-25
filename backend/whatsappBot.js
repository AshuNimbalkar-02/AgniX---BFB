import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import qrcode from 'qrcode-terminal';

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
        const text = msg.body.trim().toLowerCase();

        // Reset Logic
        if (text === 'hi' || text === 'hello' || text === 'reset') {
            sessions[msg.from] = { step: 'ASK_PINCODE' };
            await msg.reply('AgniX Crop System mein aapka swagat hai! 🌱\n(AgniX पीक प्रणालीमध्ये आपले स्वागत आहे!)\n\nSahi fasal ki salah ke liye, kripya apna 6-digit Pincode darj karein:\n(योग्य पिकाच्या सल्ल्यासाठी, कृपया तुमचा 6-अंकी पिनकोड प्रविष्ट करा:)');
            return;
        }

        const session = sessions[msg.from];
        if (!session) return;

        if (session.step === 'ASK_PINCODE') {
            session.pincode = msg.body;
            session.step = 'ASK_SOIL';
            await msg.reply('📍 Pincode save ho gaya. \nKripya apni mitti ka prakar chunein:\n(कृपया तुमच्या मातीचा प्रकार निवडा:)\n\n1️⃣ Kali Mitti (काळी माती)\n2️⃣ Lal Mitti (लाल माती)\n3️⃣ Retili Mitti (वालुकामय माती)\n\nKripya option number type karein (uda. 1):');
            return;
        }

        if (session.step === 'ASK_SOIL') {
            session.soil = msg.body;
            session.step = 'ASK_SEASON';
            await msg.reply('🪨 Mitti ka prakar save ho gaya.\nKripya mausam (season) chunein:\n(कृपया हंगाम निवडा:)\n\n1️⃣ Kharif / Monsoon (खरीप)\n2️⃣ Rabi / Winter (रब्बी)\n\nKripya option number type karein:');
            return;
        }

        if (session.step === 'ASK_SEASON') {
            session.season = msg.body;
            session.step = 'ASK_WATER';
            await msg.reply('🌦️ Mausam save ho gaya. \nSinchai (Water) ki kya suvidha hai?\n(सिंचनाची काय सुविधा आहे?)\n\n1️⃣ Barish par nirbhar (पावसावर अवलंबून)\n2️⃣ Kuwa / Tube-well (विहीर / बोअरवेल)\n\nKripya option number type karein:');
            return;
        }

        if (session.step === 'ASK_WATER') {
            session.water = msg.body;

            const soilMap = {
                '1': 'Kali Mitti (काळी माती)',
                '2': 'Lal Mitti (लाल माती)',
                '3': 'Retili Mitti (वालुकामय माती)'
            };
            const seasonMap = {
                '1': 'Kharif (खरीप)',
                '2': 'Rabi (रब्बी)'
            };
            const waterMap = {
                '1': 'Barish (पाऊस)',
                '2': 'Kuwa (विहीर)'
            };

            const mappedSoil = soilMap[session.soil.trim()] || session.soil;
            const mappedSeason = seasonMap[session.season.trim()] || session.season;
            const mappedWater = waterMap[session.water.trim()] || session.water;

            await msg.reply(`AgniX AI Analysis Complete ✅\n\n📍 Pincode: ${session.pincode}\n🪨 Mitti: ${mappedSoil}\n🌦️ Mausam: ${mappedSeason}\n💧 Paani: ${mappedWater}\n\n🌾 Fasal Ki Salah: Is data ke aadhar par aapko **Soybean** ya **Harbara (Gram)** lagana chahiye.\n(या माहितीनुसार तुम्ही **सोयाबीन** किंवा **हरभरा** लावणे योग्य राहील.)\n\n📊 Aaj ka Mandi Bhav: ₹3,200/Quintal`);
            delete sessions[msg.from];
            return;
        }
    });

    client.initialize();
};

export default startWhatsAppBot;
