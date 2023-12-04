import React, { useEffect } from "react";
import { useDarkMode } from '../../Darkcontext/DarkModeContext';
import "../../Components/Skills/Skills.css";

const Skills = () => {
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    const esferas2Section = document.querySelector(".esferas2");

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
    <div className={`cont-esferas ${isDarkMode ? 'dark' : ''}`}>
      <section className="esferas">
        <div className="title" id="skills">
          <h2>
            Mis Habilidades
          </h2>
        </div>
        <div className="esferas2">
          <div className="esfera">
            <p>HTML</p>
          </div>
          <div className="esfera">
            <p>CSS</p>
          </div>
          <div className="esfera">
            <p>JS</p>
          </div>
          <div className="esfera">
            <p>REACT</p>
          </div>
          <div className="esfera">
            <p>GIT</p>
          </div>
          <div className="esfera">
            <p>NPM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
