import React from "react";
import { useDarkMode } from '../../Darkcontext/DarkModeContext';
import "../../Components/Sobremi/Sobremi.css";
import sobremi from "../../Img/mubariz-mehdizadeh-t3zrEm88ehc-unsplash.jpg";

const Sobremi = () => {
  const { isDarkMode } = useDarkMode();
  document.addEventListener("scroll", function () {
    var sobremi2 = document.querySelector(".sobremi2");
    var img = document.querySelector(".img");
    var descripcion = document.querySelector(".descripcion");
    var sobremiOffset = sobremi2.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (sobremiOffset < windowHeight * 0.8) {
      sobremi2.classList.add("show");
      img.classList.add("show");
      descripcion.classList.add("show");
    } else {
      sobremi2.classList.remove("show");
      img.classList.remove("show");
      descripcion.classList.remove("show");
    }
  });

  return (
    <div className={`about ${isDarkMode ? 'dark' : ''}`} id="about">
      <section className="sobremi">
        <h2>
          Sobre Mi
        </h2>
        <p className={isDarkMode ? 'dark' : ''}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolorem vero fugit impedit obcaecati.
        </p>
      </section>

      <section className="sobremi2">
        <div className="img">
          <img src={sobremi} alt="sobre mi" className={`sobremi-img ${isDarkMode ? 'dark' : ''}`} />
        </div>
        <div className="descripcion">
          <h2>Desarrollador Web front-end</h2>
          <p className={isDarkMode ? 'dark' : ''}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus ex consequatur tenetur reiciendis minima minus in odio
            nisi quas autem facilis voluptates officiis dignissimos
            necessitatibus fuga dolore, officia culpa est! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Eos ex culpa cum veniam sunt
            iure cumque. Ducimus molestias repudiandae consectetur laboriosam
            delectus cum! Id dicta saepe est porro sapiente deleniti?
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sobremi;
