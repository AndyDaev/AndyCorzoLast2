import React, { useState, useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { LanguageContext } from '../../context/LanguageContext';
import './CookieConsent.css';

const ES = {
  mainText: "Utilizamos cookies para mejorar tu experiencia de usuario. Al usar nuestro sitio web, aceptas nuestro uso de cookies.",
  readMore: "Lee más sobre cómo utilizamos las cookies",
  denyAll: "Rechazar todas",
  personalize: "Personalizar",
  acceptAll: "Aceptar todas",
  essentialCookies: "Cookies esenciales",
  essentialDesc: "Estas cookies son necesarias para el funcionamiento del sitio web y no se pueden desactivar.",
  analyticsCookies: "Cookies de análisis",
  analyticsDesc: "Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.",
  marketingCookies: "Cookies de marketing",
  marketingDesc: "Estas cookies se utilizan para mostrar anuncios personalizados.",
  cancel: "Cancelar",
  savePreferences: "Guardar preferencias"
};

const EN = {
  mainText: "We use cookies to enhance your user experience. By using our website, you agree to our use of cookies.",
  readMore: "Read more about how we use cookies",
  denyAll: "Deny All",
  personalize: "Personalize",
  acceptAll: "Accept All",
  essentialCookies: "Essential Cookies",
  essentialDesc: "These cookies are necessary for the website to function and cannot be disabled.",
  analyticsCookies: "Analytics Cookies",
  analyticsDesc: "These cookies help us understand how visitors interact with our website.",
  marketingCookies: "Marketing Cookies",
  marketingDesc: "These cookies are used to deliver personalized advertisements.",
  cancel: "Cancel",
  savePreferences: "Save Preferences"
};

const CookieConsent = () => {
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;
  const [cookies, setCookie] = useCookies(["cookieConsent", "cookiePreferences"]);
  const [showPersonalize, setShowPersonalize] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  // Load saved preferences
  useEffect(() => {
    if (cookies.cookiePreferences) {
      try {
        const saved = JSON.parse(cookies.cookiePreferences);
        setPreferences(prev => ({ ...prev, ...saved }));
      } catch (e) {
        // Silently handle parsing errors
      }
    }
  }, [cookies.cookiePreferences]);

  // Handle mouse enter/leave to disable custom cursor when hovering over panel
  const handleMouseEnter = () => {
    document.body.classList.add('cookie-consent-open');
  };

  const handleMouseLeave = () => {
    document.body.classList.remove('cookie-consent-open');
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('cookie-consent-open');
    };
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setCookie("cookieConsent", "accepted", { path: "/", maxAge: 31536000 });
    setCookie("cookiePreferences", JSON.stringify(allAccepted), { path: "/", maxAge: 31536000 });
  };

  const denyAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setCookie("cookieConsent", "denied", { path: "/", maxAge: 31536000 });
    setCookie("cookiePreferences", JSON.stringify(onlyEssential), { path: "/", maxAge: 31536000 });
  };

  const savePreferences = () => {
    setCookie("cookieConsent", "custom", { path: "/", maxAge: 31536000 });
    setCookie("cookiePreferences", JSON.stringify(preferences), { path: "/", maxAge: 31536000 });
    setShowPersonalize(false);
  };

  const togglePreference = (key) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (cookies.cookieConsent) {
    return null;
  }

  return (
    <div 
      className="cookie-consent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cookie-consent-content">
        <p>
          {langObj.mainText}{" "}
          <a href={"/cookies"}>{langObj.readMore}</a>
        </p>
        {!showPersonalize ? (
          <div className="cookie-consent-buttons">
            <button className="cookie-btn-secondary" onClick={denyAll}>
              {langObj.denyAll}
            </button>
            <button className="cookie-btn-secondary" onClick={() => setShowPersonalize(true)}>
              {langObj.personalize}
            </button>
            <button className="cookie-btn-primary" onClick={acceptAll}>
              {langObj.acceptAll}
            </button>
          </div>
        ) : (
          <div className="cookie-personalize-panel">
            <div className="cookie-categories">
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <span className="cookie-category-title">{langObj.essentialCookies}</span>
                  <label className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={preferences.essential}
                      disabled
                      readOnly
                    />
                    <span className="cookie-slider"></span>
                  </label>
                </div>
                <p className="cookie-category-desc">
                  {langObj.essentialDesc}
                </p>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <span className="cookie-category-title">{langObj.analyticsCookies}</span>
                  <label className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference('analytics')}
                    />
                    <span className="cookie-slider"></span>
                  </label>
                </div>
                <p className="cookie-category-desc">
                  {langObj.analyticsDesc}
                </p>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <span className="cookie-category-title">{langObj.marketingCookies}</span>
                  <label className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => togglePreference('marketing')}
                    />
                    <span className="cookie-slider"></span>
                  </label>
                </div>
                <p className="cookie-category-desc">
                  {langObj.marketingDesc}
                </p>
              </div>
            </div>

            <div className="cookie-personalize-actions">
              <button className="cookie-btn-secondary" onClick={() => setShowPersonalize(false)}>
                {langObj.cancel}
              </button>
              <button className="cookie-btn-primary" onClick={savePreferences}>
                {langObj.savePreferences}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;