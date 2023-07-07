// Menu.js

import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const MenuMobile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/", { hash: "#contact" });
    setIsExpanded(!isExpanded);
  };

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`c-menu ${isExpanded ? "is-open" : ""}`}>
      <section className="c-menu__header">
        <h2>
          <NavLink className="c-menu__header-title" to="/" onClick={toggleMenu}>
            Sofía Blas
          </NavLink>
        </h2>
        <button className="c-menu__header-toggle" onClick={toggleMenu}>
          <span className="c-menu__header-toggle-lines"></span>
          <span className="c-menu__header-toggle-lines"></span>
          <span className="c-menu__header-toggle-lines"></span>
        </button>
      </section>

      <ul className={`c-menu__list ${isExpanded ? "is-open" : ""}`}>
        <li className="c-menu__item" onClick={toggleMenu}>
          <NavLink to="/works">Trabajos</NavLink>
        </li>
        <li className="c-menu__item" onClick={toggleMenu}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="c-menu__item">
          <a href="/#contact" onClick={handleContactClick}>
            Contacto
          </a>
        </li>
        <li className="c-menu__item" onClick={toggleMenu}>
          <NavLink to="/past">Mi otro lado</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMobile;
