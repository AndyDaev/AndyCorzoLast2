import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const getInitialLanguage = () => {
  // Detect browser language
  const lang = navigator.language || (navigator.languages && navigator.languages[0]) || "en";
  if (lang.toLowerCase().startsWith("es")) {
    return "ES";
  }
  return "EN";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage());

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}; 