import React from "react";
import "../Inicio/Inicio.css";
import Nav from "../HeaderNav/Nav";

const Inicio = () => {
  return (
    <div>
      <section className="inicio">
        <div className="inicio2">
          <Nav />
          <div className="presentacion">
          <div className="presentacion1">
            <h4>Hola!</h4>
            <h1 className="letra">Soy un desarrollador Web</h1>
          </div>
            <div className="presentacion2">
              <h6>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              quia quis reprehenderit. Inventore consequuntur iure modi hic, ab
              non repellendus explicabo officia nostrum assumenda tempore fugit
              amet id odio labore.
            </h6>
            <button className="btn-cv">Descargar CV</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
