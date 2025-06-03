import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Get browser language and set it to either 'es' or 'en'
    const browserLang = navigator.language.toLowerCase();
    console.log('Browser language:', browserLang);
    
    // Check if the language starts with 'es' (for Spanish)
    const isSpanish = browserLang.startsWith('es');
    console.log('Is Spanish?', isSpanish);
    
    setLanguage(isSpanish ? 'es' : 'en');
  }, []);

  const messages = {
    en: {
      title: "🚧 Work in Progress 🚧",
      subtitle: "We're currently working on something amazing. Please check back soon!"
    },
    es: {
      title: "🚧 Sitio en Construcción 🚧",
      subtitle: "Estamos trabajando en algo increíble. ¡Vuelve pronto!"
    }
  };

  // Force language for testing - remove this in production
  const forceLanguage = 'es'; // Change this to 'en' or 'es' to test different languages

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{messages[forceLanguage].title}</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>{messages[forceLanguage].subtitle}</p>
      </div>
    </div>
  );
}

export default App;
