import React from 'react';
import { Mic } from 'lucide-react';

const Header = ({ t, lang, setLang, isListening, startVoice }) => {
  return (
    <header className="header-section">
      <div className="header-info" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '60px' }} />
        <div>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="btn btn-secondary">
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="mr">मराठी</option>
        </select>
        <button className={`btn btn-primary ${isListening ? 'animate-pulse' : ''}`} onClick={startVoice}>
          <Mic size={20} /> {isListening ? t.fetching : t.voiceAssist}
        </button>
      </div>
    </header>
  );
};

export default Header;
