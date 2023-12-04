import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./Components/Inicio/Inicio";
import Sobremi from "./Components/Sobremi/Sobremi";
import Skills from "./Components/Skills/Skills";
import Proyectos from "./Components/Proyectos/Proyectos";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import ModoOscuroToggle from "./Components/DarkLight/OscuroClaro";
import { DarkModeProvider } from "./Darkcontext/DarkModeContext"; // Importa el DarkModeProvider

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Inicio />
                <Sobremi />
                <Skills />
                <Proyectos />
                <Contacto />
                <Footer />
                <ModoOscuroToggle />
              </>
            )}
          ></Route>
          {/* Utiliza el componente ModoOscuroToggle dentro de la ruta */}
          <Route path="/modooscuroclaro" element={<ModoOscuroToggle />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
