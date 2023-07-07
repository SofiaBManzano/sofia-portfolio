// Menu.js

import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
import React from "react";

const MenuDesktop = () => {
  // Menu.propTypes = {
  //   onContactClick: PropTypes.func.isRequired,
  // };

  return (
    <nav className="c-menu ">
      <section className="c-menu__header">
        {" "}
        <h2>
          <NavLink className="c-menu__header-title" to="/">
            Sofía Blas
          </NavLink>
        </h2>
      </section>

      <ul className="c-menu__list">
        {" "}
        <li className="c-menu__item">
          <NavLink to="/past">Mi otro lado</NavLink>
        </li>
        <li className="c-menu__item">
          <NavLink to="/about">About</NavLink>
        </li>{" "}
        <li className="c-menu__item">
          <NavLink to="/#contact"
          //  onClick={props.onContactClick}
           >
            Contacto
          </NavLink>
        </li>
        <li className="c-menu__item">
          <NavLink to="/works">Trabajos</NavLink>
        </li>{" "}
      </ul>
    </nav>
  );
};

export default MenuDesktop;
