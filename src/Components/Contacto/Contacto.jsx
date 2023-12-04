import React, { useEffect } from "react";
import { useDarkMode } from '../../Darkcontext/DarkModeContext';
import "../Contacto/Contacto.css";
const Contacto = () => {
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    const esferas2Section = document.querySelector(".contact-container");

    const handleScroll = () => {
      const rect = esferas2Section.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Si el contenedor de esferas2 está en el viewport
      if (rect.top <= windowHeight * 0.90) {
        esferas2Section.classList.add("show");
      } else {
        esferas2Section.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el evento de desplazamiento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`cont-contacto ${isDarkMode ? 'dark' : ''}`} id="contacto">
      <div className={`contact-container ${isDarkMode ? 'dark' : ''}`}>
        <h2>Contáctame</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" className={isDarkMode ? 'dark' : ''}>Enviar mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
