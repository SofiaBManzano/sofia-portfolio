import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="c-notfound">
      <h1>404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <Link className="c-notfound-link" to="/sofia-portfolio/"><span className="c-notfound-link__arrow">&#129044;</span>Volver</Link>
    </div>
  );
};

export default NotFound;
