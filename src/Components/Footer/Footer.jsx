import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";
import "../Footer/Footer.css";
import { useDarkMode } from '../../Darkcontext/DarkModeContext';

const Footer = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <footer className={`footer-container ${isDarkMode ? 'dark' : ''}`}>
      <div className="footer-content">
        <p>Díaz Juan Nicolás</p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer" className={isDarkMode ? 'dark' : ''}>
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className={isDarkMode ? 'dark' : ''}>
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className={isDarkMode ? 'dark' : ''}>
            <FaLinkedin />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+5493865524304&text=Hola,estoy interesado en tus trabajos..." target="_blank" rel="noopener noreferrer" className={isDarkMode ? 'dark' : ''}>
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
