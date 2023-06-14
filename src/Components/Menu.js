// Menu.js

import { NavLink, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "../Layouts/Home";
import About from "../Layouts/About";
import Past from "../Layouts/Past";
import Works from "../Layouts/Works";

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`c-menu ${isExpanded ? "is-open" : ""}`}>
      <h2 className="c-menu__title">Sofía Blas</h2>
      <button className="c-menu__toggle" onClick={toggleMenu}>
        <span className="c-menu__toggle-lines"></span>
        <span className="c-menu__toggle-lines"></span>
        <span className="c-menu__toggle-lines"></span>
      </button>
      <ul className="c-menu__list">    <li className="c-menu__item">
          <NavLink to="/works">Trabajos</NavLink>
        </li>
     
        <li className="c-menu__item">
          <NavLink to="/about">About</NavLink>
        </li>   <li className="c-menu__item">
          <NavLink to="/">Contacto</NavLink>
        </li>
        <li className="c-menu__item">
          <NavLink to="/past">Mi otro lado</NavLink>
        </li>
    
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/past" element={<Past />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </nav>
  );
};

export default Menu;
