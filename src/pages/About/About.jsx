import React, { useContext } from "react";
import "./About.css";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import ReactLenis from "lenis/react";
import Transition from "../../components/Transition/Transition";
import { IKImage, IKContext } from 'imagekitio-react';
import { LanguageContext } from "../../context/LanguageContext";
import { Helmet } from 'react-helmet-async';

const ES = {
  animatedCopy: "Holaa!!",
  title: "Sobre mí",
  description: "Soy Andy Corzo, diseñador gráfico apasionado por la tecnología, el arte y la música. Actualmente soy Vicepresidente y responsable de Imagen Corporativa en la Asociación Cultural Altavoz de Gijón, Asturias. Desde allí impulsamos proyectos artísticos como obras teatrales, talleres de pintura y actividades de juegos de mesa, promoviendo la creatividad y la participación cultural. Lo que más disfruto de mi profesión es ver cómo una idea visual puede emocionar, conectar y hacer que el público o el cliente se sientan reflejados en ella. Diseñar para el mundo del arte es mi forma de contar historias que inspiran y dejan huella.",
  description3: "Cada proyecto es un nuevo desafío y una nueva oportunidad para crear algo significativo. Si conmueve a alguien, incluso por un segundo ha cumplido su trabajo.",
};

const EN = {
  animatedCopy: "Hii!",
  title: "About me",
  description: "I’m Andy Corzo, a graphic designer passionate about technology, art, and music. I currently serve as Vice President and Head of Corporate Image at Asociación Cultural Altavoz in Gijón, Asturias. There, we promote artistic projects such as theater productions, painting workshops, and board game activities, fostering creativity and cultural engagement. What I love most about my profession is seeing how a visual idea can move people, connect with them, and make them feel represented. Designing for the world of art is my way of telling stories that inspire and leave a lasting impression.",
  description3: "Each project is a new collaboration, a new challenge, and a new chance to create something meaningful. If it moves someone, even for a second — it's done its job.",
};

const About = () => {
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;

  const socialLinks = [
    {
      name: "X (Twitter)",
      url: "https://x.com/AndyCorz",
      icon: "𝕏"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/andylxpez/",
      icon: "📸"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/andreslopezcorzo/",
      icon: "💼"
    },
  ];

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      transformationPosition="path"
    >
      <Helmet>
        <title>{language === 'EN' ? 'About – Andy Corzo' : 'Sobre mí – Andy Corzo'}</title>
        <meta name="description" content={language === 'EN' ? 'Learn more about Andy Corzo, creative designer and his professional background.' : 'Conoce más sobre Andy Corzo, diseñador creativo y su trayectoria profesional.'} />
        <meta property="og:title" content={language === 'EN' ? 'About – Andy Corzo' : 'Sobre mí – Andy Corzo'} />
        <meta property="og:description" content={language === 'EN' ? 'Learn more about Andy Corzo, creative designer.' : 'Conoce más sobre Andy Corzo, diseñador creativo.'} />
        <meta property="og:image" content="/public/site-icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://andycorzo.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ReactLenis root className="bg-white">
        <div className="page about mt-4">
          <section className="about-single">
            <div className="about-single-content">
              <div className="about-single-image">
                <IKImage
                  src="https://ik.imagekit.io/andycorzowork/About/Foto_Andy.jpg?updatedAt=1747152753220"
                  transformation={[
                    {
                      height: 800,
                      width: 500,
                      quality: 100,
                      format: "auto"
                    }
                  ]}
                  lqip={{ active: true, quality: 20 }}
                  alt="About hero"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="about-single-text text-transform: none">
                <AnimatedCopy animateOnScroll={true} tag="h1" className="about-title mt-4">
                  {langObj.animatedCopy}
                </AnimatedCopy>
                <AnimatedCopy animateOnScroll={true} tag="h3">
                  {langObj.description}
                </AnimatedCopy>
                <AnimatedCopy animateOnScroll={true} tag="h3">
                  {langObj.description2}
                </AnimatedCopy>
                <AnimatedCopy animateOnScroll={true} tag="h3">
                  {langObj.description3}
                </AnimatedCopy>
                <div className="social-links-container">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link-card"
                    >
                      <span className="social-icon">{link.icon}</span>
                      <span className="social-name">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <ContactForm />
          <Footer />
        </div>
      </ReactLenis>
    </IKContext>
  );
};

export default Transition(About);
