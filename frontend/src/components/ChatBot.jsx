import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Mic, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { speakText } from '../utils/voiceUtils';

const ChatBot = ({ t, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "नमस्कार! मी तुमचा AgniX सहाय्यक आहे. मी तुम्हाला कशी मदत करू शकतो?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(1).map(m => ({ // Skip the welcome message
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          }))
        })
      });

      const data = await response.json();
      if (response.ok) {
        const botMessage = { id: Date.now() + 1, text: data.text, sender: 'bot' };
        setMessages(prev => [...prev, botMessage]);
        
        if (!isMuted) {
          speakText(data.text, lang);
        }
      } else {
        const errorText = data.details || data.error || "Sorry, I'm having trouble connecting.";
        setMessages(prev => [...prev, { id: Date.now(), text: errorText, sender: 'bot' }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { id: Date.now(), text: "Network error. Please try again.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Voice recognition not supported.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = lang === 'en' ? 'en-IN' : lang === 'hi' ? 'hi-IN' : 'mr-IN';
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleSend(transcript);
    };
    recognition.start();
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="clean-card"
            style={{
              width: '350px',
              height: '500px',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              padding: 0,
              overflow: 'hidden',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Header */}
            <div style={{ 
              padding: '15px 20px', 
              background: 'var(--primary)', 
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageSquare size={20} />
                <span style={{ fontWeight: 600 }}>{t.chatTitle}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              style={{ 
                flex: 1, 
                padding: '20px', 
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}
            >
              {messages.map((m) => (
                <div 
                  key={m.id}
                  style={{
                    alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '80%',
                    padding: '10px 15px',
                    borderRadius: '15px',
                    fontSize: '0.9rem',
                    lineHeight: 1.4,
                    background: m.sender === 'user' ? 'var(--primary)' : '#f0f2f5',
                    color: m.sender === 'user' ? 'white' : 'var(--text)',
                    borderBottomRightRadius: m.sender === 'user' ? '2px' : '15px',
                    borderBottomLeftRadius: m.sender === 'bot' ? '2px' : '15px',
                  }}
                >
                  {m.text}
                </div>
              ))}
              {isLoading && (
                <div style={{ alignSelf: 'flex-start', padding: '10px' }}>
                  <Loader2 className="animate-spin" size={20} color="var(--primary)" />
                </div>
              )}
            </div>

            {/* Input */}
            <div style={{ padding: '15px', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
              <button 
                onClick={startListening}
                style={{ 
                  background: isListening ? '#ffebee' : '#f0f2f5', 
                  border: 'none', 
                  borderRadius: '50%', 
                  width: '40px', 
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: isListening ? '#f44336' : 'var(--primary)'
                }}
              >
                <Mic size={20} className={isListening ? "animate-pulse" : ""} />
              </button>
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isListening ? t.listening : t.chatPlaceholder}
                disabled={isListening}
                style={{
                  flex: 1,
                  border: 'none',
                  background: '#f0f2f5',
                  borderRadius: '20px',
                  padding: '0 15px',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                style={{ 
                  background: 'var(--primary)', 
                  border: 'none', 
                  borderRadius: '50%', 
                  width: '40px', 
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                  opacity: (!input.trim() || isLoading) ? 0.6 : 1
                }}
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatBot;
