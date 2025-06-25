import React from 'react';
import logo from "../../assets/Logo.png";
import './Header.css'; // Asegúrate de tener este archivo CSS para los estilos


export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <img src={logo} alt="Logo" className="Logo" />
          <span className="header__title">Mi Sitio</span>
        </div>

        <nav className="header__nav">
          <p>un sitio dirigido a usuarios</p>
        </nav>
      </div>
    </header>
  );
};

