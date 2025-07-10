import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import AnimatedCopy from '../components/AnimatedCopy/AnimatedCopy';
import './About/About.css';

const NotFound = () => {
  const { language } = useContext(LanguageContext);
  const lang = language === 'EN' ? 'EN' : 'ES';

  const messages = {
    EN: {
      title: '404 – Page Not Found',
      desc: "Sorry, the page you're looking for doesn't exist.",
      home: 'Go to Home',
    },
    ES: {
      title: '404 – Página no encontrada',
      desc: 'Lo sentimos, la página que buscas no existe.',
      home: 'Ir al inicio',
    },
  };

  return (
    <div className="page about mt-4" style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <AnimatedCopy tag="h1" animateOnScroll={true} className="about-title mt-4" style={{ fontSize: '3rem', color: 'var(--primary)' }}>
        {messages[lang].title}
      </AnimatedCopy>
      <AnimatedCopy tag="h3" animateOnScroll={true} style={{ marginTop: '1.5em', color: 'var(--primary)' }}>
        {messages[lang].desc}
      </AnimatedCopy>
    </div>
  );
};

export default NotFound; 