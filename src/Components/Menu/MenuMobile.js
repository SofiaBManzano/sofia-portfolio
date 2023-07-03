// Menu.js

import { NavLink } from "react-router-dom";
import React, { useState } from "react";
// import Home from "../../Layouts/Home";
// import About from "../../Layouts/About";
// import Past from "../../Layouts/Past";
// import Works from "../../Layouts/Works";

const MenuMobile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`c-menu ${isExpanded ? "is-open" : ""}`}>
      <section className="c-menu__header">
        {" "}
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
        {" "}
        <li className="c-menu__item" onClick={toggleMenu}>
          <NavLink to="/works">Trabajos</NavLink>
        </li>
        <li className="c-menu__item" onClick={toggleMenu}>
          <NavLink to="/about">About</NavLink>
        </li>{" "}
        <li className="c-menu__item" onClick={toggleMenu}>
          <NavLink to="#contact">Contacto</NavLink>
        </li>
        <li className="c-menu__item" onClick={toggleMenu}>
          <NavLink to="/past">Mi otro lado</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMobile;
