import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
import { LanguageContext } from "../../context/LanguageContext";

// Language objects for navigation
const ES = {
  Home: "Inicio",
  Work: "Proyectos",
  Archive: "Archivo",
  About: "Sobre mí",
  Contact: "Contacto",
  FAQ: "Preguntas frecuentes"
};

const EN = {
  Home: "Home",
  Work: "Work",
  Archive: "Archive",
  About: "About",
  Contact: "Contact",
  FAQ: "FAQ"
};

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  const { language, setLanguage } = useContext(LanguageContext);

  // Navbar links configuration (labels will be set dynamically)
  const navLinks = [
    { key: "Home", url: "/" },
    { key: "Work", url: "/work" },
    { key: "Archive", url: "/archive" },
    { key: "About", url: "/about" },
    {
      id: "contact",
      label: <FaEnvelope />,
      url: "andycorzowork@gmail.com",
      isExternal: true,
      isEmail: true
    },
    {
      id: "contact",
      label: <FaLinkedin />,
      url: "https://www.linkedin.com/in/andreslopezcorzo",
      isExternal: true,
      isEmail: false
    },
  ];

  // Effect to handle navbar visibility on route change
  useEffect(() => {
    setVisible(true);
    setPrevScrollPos(window.scrollY);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible =
        currentScrollPos < 50 ||
        prevScrollPos > currentScrollPos;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Language changer handler
  const handleLanguageChange = () => {
    setLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
  };

  // Get current language object
  const langObj = language === "EN" ? EN : ES;

  return (
    <div
      className="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
        zIndex: 1000
      }}
    >
      <div className="nav-links">
        <div className="nav-links-left">
          {navLinks.slice(0, 4).map((link, index) => (
            <div
              className="nav-link"
              key={index}
            >
              <Link to={link.url}>
                {langObj[link.key]}
              </Link>
            </div>
          ))}
        </div>
        <div className="nav-links-right">
          {navLinks.slice(4).map((link, index) => (
            <div
              className="nav-link"
              key={index}
              id={link.id === "contact" ? "contact-nav-link" : ""}
            >
              <a
                href={link.isEmail ? `mailto:${link.url}` : link.url}
                target={link.isEmail ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={link.id === "contact" ? "contact-link" : ""}
              >
                {link.label}
              </a>
            </div>
          ))}
          <button
            className="lang-changer"
            onClick={handleLanguageChange}
            aria-label="Change language"
          >
            {language === "EN" ? "ES" : "EN"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;