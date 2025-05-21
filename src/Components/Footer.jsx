import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Gestión de Usuarios. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
