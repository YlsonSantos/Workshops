import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_fast_solution.png"; // Caminho da imagem

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Div para a imagem à esquerda */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo Fast Solutions" />
      </div>

      {/* Div para os links à direita */}
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/workshops">Workshops</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
