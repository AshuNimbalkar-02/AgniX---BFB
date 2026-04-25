export const speakText = (text, lang) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (lang === 'en') utterance.lang = 'en-IN';
    else if (lang === 'hi') utterance.lang = 'hi-IN';
    else if (lang === 'mr') utterance.lang = 'mr-IN';
    window.speechSynthesis.speak(utterance);
  }
};

export const startVoiceRecognition = (lang, onStart, onEnd, onMatch) => {
  if (!('webkitSpeechRecognition' in window)) {
    console.warn("Speech recognition not supported in this browser.");
    return;
  }
  
  const recognition = new window.webkitSpeechRecognition();
  recognition.lang = lang === 'en' ? 'en-IN' : lang === 'hi' ? 'hi-IN' : 'mr-IN';
  
  recognition.onstart = () => onStart();
  recognition.onend = () => onEnd();
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    if (transcript.includes('find') || transcript.includes('सलाह') || transcript.includes('शोधा')) {
      onMatch();
    }
  };
  
  recognition.start();
};
