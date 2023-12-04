// DarkLight/OscuroClaro.jsx
import React from 'react';
import { useDarkMode } from '../../Darkcontext/DarkModeContext';
import '../DarkLight/OscuroClaro.css';

// DarkLight/OscuroClaro.jsx
const OscuroClaro = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <div className={`oscuro-claro-container ${isDarkMode ? 'dark' : ''}`} onClick={toggleDarkMode}>        {isDarkMode ? '🌙' : '☀️'}
    </div>
  );
};


export default OscuroClaro;
