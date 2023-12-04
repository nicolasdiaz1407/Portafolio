import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import { useDarkMode } from '../../Darkcontext/DarkModeContext';
import "../Proyectos/Proyectos.css";
import proyecto1 from "../../Img/a-r-c-h-i-g-e-r-o-s-a-ihFFHGFJijI-unsplash.jpg";

const Proyectos = () => {
  const { isDarkMode } = useDarkMode();
    useEffect(() => {
        const proyectoSections = document.querySelectorAll(".proyecto");
    
        const handleScroll = () => {
          proyectoSections.forEach((proyectoSection) => {
            const rect = proyectoSection.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
            // Si el contenedor de esferas2 está en el viewport
            if (rect.top <= windowHeight * 0.80) {
              proyectoSection.classList.add("show");
            } else {
              proyectoSection.classList.remove("show");
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Limpia el evento de desplazamiento al desmontar el componente
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div>
      <section className={`proyectos ${isDarkMode ? 'dark' : ''}`} id="proyectos">
        <h2>
          Portafolio
        </h2>
        <div className="proyectos-container">
          <div className="proyecto">
            <img src={proyecto1} alt="Proyecto 1" className="proyecto-img" />
            <div className="proyecto-info">
              <p>Nombre del proyecto</p>
              <div className="iconos">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </div>
          </div>
          <div className="proyecto">
            <img src={proyecto1} alt="Proyecto 1" className="proyecto-img" />
            <div className="proyecto-info">
              <p>Nombre del proyecto</p>
              <div className="iconos">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </div>
          </div>
          <div className="proyecto">
            <img src={proyecto1} alt="Proyecto 1" className="proyecto-img" />
            <div className="proyecto-info">
              <p>Nombre del proyecto</p>
              <div className="iconos">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
