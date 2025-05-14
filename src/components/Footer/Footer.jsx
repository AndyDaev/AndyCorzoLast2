import React, { useContext } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

const ES = {
  primary: "Trabajemos juntos",
  mail: "andycorzowork@gmail.com",
  secondary: "De diseño a otras especialidades — Estoy siempre dispuesto a colaborar. Contactame cuando quieras.",
  header: "Háblame",
  message: "Ponte en contacto conmigo",
  footerHome: "Inicio",
  footerWork: "Trabajos",
  footerAbout: "Sobre mí",
  footerContact: "Contacto",
  footerFAQ: "Preguntas frecuentes",
  footerHeader: "Andy",
  footerFooter: "Corzo",
  footerCopyright: "© 2025 Andy Corzo",
  footerCreated: "Creado por AndyCorzo"
};

const EN = {
  primary: "Let's work together",
  mail: "andycorzowork@gmail.com",
  secondary: "From design to other realms — I'm always open to creative collaborations. Feel free to reach out anytime.",
  header: "Start a Conversation",
  message: "Get in Touch",
  footerHome: "Home",
  footerWork: "Work",
  footerAbout: "About",
  footerContact: "Contact",
  footerFAQ: "FAQ",
  footerHeader: "Andy",
  footerFooter: "Corzo",
  footerCopyright: "© 2025 Andy Corzo",
  footerCreated: "Created by AndyCorzo"
};

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;

  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-contact">
          <h3 className="primary">
            {langObj.primary} <br />
            {langObj.mail}
          </h3>

          <p className="secondary">
            {langObj.secondary}
          </p>

          <Link to="/contact" className="btn">
            {langObj.message}
          </Link>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>{langObj.footerHome}</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/work" className="footer-nav-item">
            <span>{langObj.footerWork}</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/about" className="footer-nav-item">
            <span>{langObj.footerAbout}</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/contact" className="footer-nav-item">
            <span>{langObj.footerContact}</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/faq" className="footer-nav-item">
            <span>{langObj.footerFAQ}</span>
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-header">
          <h1>{langObj.footerHeader}</h1>
          <h1>{langObj.footerFooter}</h1>
        </div>

        <div className="footer-copyright-line">
          <p className="primary sm">{langObj.footerCopyright}</p>
          <p className="primary sm">{langObj.footerCreated}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
