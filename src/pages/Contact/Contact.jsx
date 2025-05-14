import React, { useContext } from "react";
import "./Contact.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";
import { LanguageContext } from "../../context/LanguageContext";

const ES = {
  title: "Contacto",
  subtitle: "Ponte en contacto conmigo"
};

const EN = {
  title: "Contact",
  subtitle: "Get in touch with me"
};

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;

  return (
    <ReactLenis root>
      <div className="page contact">
        <h1>{langObj.title}</h1>
        <h2>{langObj.subtitle}</h2>
        <ContactForm />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Contact);
