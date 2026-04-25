import React, { useState, useEffect } from 'react';
import { BrainCircuit, RotateCcw, Download, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { translations } from './locales/translations';
import { generatePDF } from './utils/pdfGenerator';
import { speakText, startVoiceRecognition } from './utils/voiceUtils';
import { regionsList, distList, talukaList } from './constants/locations';

import Header from './components/Header';
import InputForm from './components/InputForm';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en');
  const [inputs, setInputs] = useState({
    n: 100, p: 50, k: 40,
    temp: 28, humidity: 60, rainfall: 800,
    waterLevel: 80, waterPH: 7.0,
    nearbyMarket: 'Local Hub', season: 'Kharif',
    region: 'Maharashtra',
    district: 'Chh. Sambhajinagar',
    taluka: 'Chh. Sambhajinagar Urban',
    apmc: 'Chh. Sambhajinagar Urban',
    soilType: 'Black Soil'
  });
  const [recommendations, setRecommendations] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isAutoLoading, setIsAutoLoading] = useState(false);
  const [isPredicting, setIsPredicting] = useState(false);

  const t = translations[lang];

  const getLocLabel = (val) => {
    if (val === "Maharashtra") return t.maharashtra;
    if (val === "Other") return t.other;
    if (val === "Chh. Sambhajinagar") return t.sambhajinagar;
    if (val === "Chh. Sambhajinagar Urban") return t.urban;
    if (val === "Chh. Sambhajinagar Rural") return t.rural;
    if (val === "Pune") return t.pune;
    if (val === "Nashik") return t.nashik;
    if (val === "Nagpur") return t.nagpur;
    if (val === "Akola") return t.akola;
    if (val === "Amravati") return t.amravati;
    if (val === "Ahilyanagar") return t.ahilyanagar;
    const key = val.toLowerCase();
    return t[key] || val;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setInputs(prev => ({ ...prev, apmc: prev.taluka }));
  }, [inputs.taluka]);

  const fetchWeather = async (lat, lon) => {
    setIsAutoLoading(true);
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    try {
      if (apiKey) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (data.main) {
          setInputs(prev => ({
            ...prev,
            temp: Math.round(data.main.temp),
            humidity: Math.round(data.main.humidity),
            rainfall: data.rain ? Math.round(data.rain['1h'] || data.rain['3h'] || 0) : prev.rainfall
          }));
        }
      } else {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation`);
        const data = await response.json();
        if (data.current) {
          setInputs(prev => ({
            ...prev,
            temp: Math.round(data.current.temperature_2m),
            humidity: Math.round(data.current.relative_humidity_2m),
            rainfall: data.current.precipitation > 0 ? Math.round(data.current.precipitation * 100) : prev.rainfall
          }));
        }
      }
    } catch (err) {
      console.error("Weather fetch error:", err);
      alert("Weather detection failed. Using default values.");
    } finally {
      setIsAutoLoading(false);
    }
  };

  const detectWeather = async () => {
    if (inputs.district && inputs.taluka && inputs.district !== "Other") {
      setIsAutoLoading(true);
      try {
        const query = `${inputs.taluka}, ${inputs.district}, Maharashtra, India`;
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
        const data = await response.json();
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          await fetchWeather(lat, lon);
          return;
        }
      } catch (err) {
        console.error("Geocoding error:", err);
      } finally {
        setIsAutoLoading(false);
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => alert(t.locError)
      );
    }
  };

  const fetchLocationInfo = async (lat, lon) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`);
      const data = await response.json();
      if (data.address) {
        const addr = data.address;
        
        let dName = addr.city || addr.district || addr.county || addr.state_district || addr.region || '';
        let tName = addr.suburb || addr.town || addr.village || addr.city_district || addr.municipality || '';

        const aliases = {
           "aurangabad": "Chh. Sambhajinagar",
           "ahmednagar": "Ahilyanagar",
           "poona": "Pune"
        };
        
        const dLower = dName.toLowerCase();
        for (const [key, val] of Object.entries(aliases)) {
          if (dLower.includes(key)) {
            dName = val;
            break;
          }
        }

        const matchedDist = distList.find(d => 
          dName.toLowerCase().includes(d.toLowerCase()) || 
          d.toLowerCase().includes(dName.toLowerCase())
        );

        if (matchedDist && matchedDist !== "Other") {
          setInputs(prev => ({
            ...prev,
            region: 'Maharashtra',
            district: matchedDist
          }));

          const matchedTaluka = talukaList[matchedDist]?.find(t => 
             tName.toLowerCase().includes(t.toLowerCase()) || 
             t.toLowerCase().includes(tName.toLowerCase())
          );

          if (matchedTaluka) {
            setInputs(prev => ({ ...prev, taluka: matchedTaluka }));
          }
        } else {
           setInputs(prev => ({
             ...prev,
             region: addr.state || 'Other',
             district: 'Other',
             taluka: tName || dName || 'Unknown'
           }));
        }
      }
    } catch (err) {
      console.error("Location detection error:", err);
      alert(t.locError);
    }
  };

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchLocationInfo(pos.coords.latitude, pos.coords.longitude),
        () => alert(t.locError)
      );
    }
  };

  const startVoice = () => {
    startVoiceRecognition(
      lang,
      () => setIsListening(true),
      () => setIsListening(false),
      () => getRecommendations()
    );
  };

  const getRecommendations = async () => {
    setIsPredicting(true);
    try {
      const response = await fetch('http://localhost:3000/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs)
      });
      
      const data = await response.json();
      const topMatches = data.recommendations || [];

      if (topMatches.length === 0) {
        alert(lang === 'mr' ? "तुमच्या माहितीनुसार योग्य पीक सापडले नाही. कृपया इनपुट तपासा." : "No matching crops found for your inputs. Please check soil data.");
        setIsPredicting(false);
        return;
      }

      setRecommendations(topMatches);
      setShowResult(true);

      const names = topMatches.map(c => c.name[lang]).join(', ');
      const speechText = lang === 'en' ? `Our AI model suggests ${names}.` : 
                        lang === 'hi' ? `हमारा एआई मॉडल ${names} की सलाह देता है।` : 
                        `आमच्या एआई मॉडेलनुसार ${names} ची शिफारस आहे.`;
      speakText(speechText, lang);
    } catch (error) {
      console.error("Failed to fetch recommendations:", error);
      alert("Failed to connect to the backend AI server. Is it running on port 3000?");
    } finally {
      setIsPredicting(false);
    }
  };

  const handleDownloadPDF = () => {
    generatePDF(recommendations, lang);
  };

  return (
    <div className="app-container">
      <Header 
        t={t} 
        lang={lang} 
        setLang={setLang} 
        isListening={isListening} 
        startVoice={startVoice} 
      />

      <main style={{ display: showResult ? 'none' : 'block' }}>
        <InputForm 
          t={t}
          inputs={inputs}
          handleInput={handleInput}
          isAutoLoading={isAutoLoading}
          detectLocation={detectLocation}
          detectWeather={detectWeather}
          getLocLabel={getLocLabel}
        />

        <button 
          className="btn btn-primary" 
          onClick={getRecommendations} 
          disabled={isPredicting}
          style={{ width: '100%', marginTop: '3rem', padding: '1.5rem', fontSize: '1.2rem', borderRadius: '16px', opacity: isPredicting ? 0.7 : 1 }}
        >
          {isPredicting ? <Loader2 size={24} className="animate-spin" /> : <BrainCircuit size={24} />} 
          {isPredicting ? (lang === 'mr' ? 'प्रक्रिया करत आहे...' : lang === 'hi' ? 'प्रसंस्करण...' : 'Processing...') : t.recommend}
        </button>
      </main>

      <AnimatePresence>
        {showResult && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="result-header">
              <h2>{lang === 'en' ? `Top ${recommendations.length} Recommendations` : lang === 'hi' ? `शीर्ष ${recommendations.length} सिफारिशें` : `शीर्ष ${recommendations.length} शिफारसी`}</h2>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button className="btn btn-secondary" onClick={() => setShowResult(false)}><RotateCcw size={18} /> {t.reset}</button>
                <button className="btn btn-accent" onClick={handleDownloadPDF}><Download size={18} /> {t.download}</button>
              </div>
            </div>

            <Results 
              recommendations={recommendations}
              lang={lang}
              t={t}
              inputs={inputs}
              setInputs={setInputs}
              getLocLabel={getLocLabel}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
