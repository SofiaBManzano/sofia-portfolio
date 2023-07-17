// Menu.js

import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import React, { useState, useEffect } from "react";


const MenuDesktop = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const shouldStick = scrollTop > 0;
  
      setIsSticky(shouldStick);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav className="c-menu ">
      <section className={`c-menu__header ${isSticky ? "is-sticky" : ""}`}>
        {" "}
        <h2>
          <NavLink className="c-menu__header-title" to="/sofia-portfolio/">
            Sofía Blas
          </NavLink>
        </h2>
      </section>

      <ul className="c-menu__list">
        {" "}
        <li className="c-menu__item">
          <NavLink to="/sofia-portfolio/past">Mi otro lado</NavLink>
        </li>
        <li className="c-menu__item">
          <NavLink to="/sofia-portfolio/about">About</NavLink>
        </li>{" "}
        <li className="c-menu__item">
          <Link smooth to="/sofia-portfolio/#contact">
            Contacto
          </Link>
        </li>
        <li className="c-menu__item">
          <NavLink to="/sofia-portfolio/works">Trabajos</NavLink>
        </li>{" "}
      </ul>
    </nav>
  );
};

export default MenuDesktop;
