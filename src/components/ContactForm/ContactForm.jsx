import React, { useState, useRef, useContext } from "react";
import emailjs from '@emailjs/browser';
import "./ContactForm.css";
import { LanguageContext } from "../../context/LanguageContext";

//tranlation

const ES = {
  primary: "Vamos a crear juntos",
  secondary: "Escena — 07",
  copyright: "© 2025",
  header: "Háblame",
  message: "¿Tienes un diseño o una historia en mente? Hagamos que se haga realidad. Me encantaría saber lo que estás trabajando y explorar cómo podemos trabajar juntos.",
  available: "Disponible",
  send: "Enviar mensaje",
  namePlaceholder: "Nombre",
  emailPlaceholder: "Correo electrónico",
  messagePlaceholder: "Mensaje"
}

const EN = {
  primary: "Let's create together",
  secondary: "Scene — 07",
  copyright: "© 2025",
  header: "Start a Conversation",
  message: "Have a design or story in mind? Let's bring it to life. I'd love to hear what you're working on and explore how we can work together.",
  available: "Available for Work",
  send: "Send Message",
  namePlaceholder: "Name",
  emailPlaceholder: "Email",
  messagePlaceholder: "Message"
}

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const { language } = useContext(LanguageContext);
  const langObj = language === "EN" ? EN : ES;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus("success");
        setFormData({ user_name: "", user_email: "", message: "" });
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setStatus("");
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus("error");
      
      // Reset error status after 3 seconds
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };

  return (
    <div className="contact-form">
      <div className="contact-form-row">
        <div className="contact-form-row-copy-item">
          <p className="primary sm">{langObj.primary}</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">{langObj.secondary}</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">{langObj.copyright}</p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-col">
          <div className="contact-form-header">
            <h3>{langObj.header}</h3>

            <p>
              {langObj.message}
            </p>
          </div>

          <div className="contact-form-availability">
            <p className="primary sm">{langObj.available}</p>
            <p className={`primary sm status-message ${status}`}>
              {status === "success" && "Message sent successfully!"}
              {status === "error" && "Error sending message. Please try again."}
            </p>
          </div>
        </div>

        <form ref={form} className="contact-form-col" onSubmit={handleSubmit}>
          <div className="form-item">
            <input
              type="text"
              name="user_name"
              placeholder={langObj.namePlaceholder}
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-item">
            <input
              type="email"
              name="user_email"
              placeholder={langObj.emailPlaceholder}
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-item">
            <textarea
              name="message"
              rows={6}
              placeholder={langObj.messagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-item">
            <button 
              className="btn" 
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : langObj.send}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
