import React, { useState } from "react";
import { useDarkMode } from '../../Darkcontext/DarkModeContext';
import "./Nav.css";
const Nav = () => {
  const { isDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    closeMenu(); // Cierra el menú después de hacer clic en un elemento del menú
  };
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
          <input
          className="checkbox"
          type="checkbox"
          name=""
          id=""
          checked={menuOpen}
          onChange={toggleMenu}
        />
            <div className="hamburger-lines">
              <span className={`line line1 ${isDarkMode ? 'dark' : ''}`}></span>
              <span className={`line line2 ${isDarkMode ? 'dark' : ''}`}></span>
              <span className={`line line3 ${isDarkMode ? 'dark' : ''}`}></span>
            </div>
            <div className="logo">
              <h1><span className="letra">N</span>icolas</h1>
            </div>
            <div className={`menu-items ${isDarkMode ? 'dark' : ''}`}>
          <li>
            <a href="/" onClick={() => scrollToSection("inicio")} className={isDarkMode ? 'dark' : ''}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection("about")} className={isDarkMode ? 'dark' : ''}>
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => scrollToSection("skills")} className={isDarkMode ? 'dark' : ''}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#proyectos" onClick={() => scrollToSection("proyectos")} className={isDarkMode ? 'dark' : ''}>
              Portafolio
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={() => scrollToSection("contacto")} className={isDarkMode ? 'dark' : ''}>
              Contacto
            </a>
          </li>
        </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
