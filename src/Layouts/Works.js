import React from "react";
const Works = () => {
  return (
    <>
      {" "}
      <section>
        <article className="c-main__block">
          {" "}
          <h3 className="c-main__title">Professional jobs</h3>
          <p className="c-main__text">
            Si bien mi experiencia puede ser considerada en etapa inicial, cada
            uno de los proyectos presentados aquí representa un hito importante
            en mi trayectoria profesional. Esto solo son algunos de mis trabajos
          </p>
        </article>

        <article className="c-main__block">
          <p>Configurador de ventiladores</p>
          <p>Desarrollado en React</p>
          <small>CREATE</small>
          <div className="c-main__block-img-x">
            <img
              src="https://via.placeholder.com/265x104"
              alt="Marcador de posición de imagen"
              width="265"
              height="104"
            />
          </div>
        </article>
        <article className="c-main__block">
          <p>Campaña de verano</p>
          <p>Hazlo fresco</p>
          <small>CREATE</small>
          <div className="c-main__block-img-x">
            <img
              src="https://via.placeholder.com/130x129"
              alt="Marcador de posición de imagen"
              width="130"
              height="129"
            />
          </div>
        </article>
        <article className="c-main__block">
          <p>Rediseño y funcionalidad del menú</p>

          <small>Sklum</small>
          <div className="c-main__block-img-x">
            <img
              src="https://via.placeholder.com/130x152"
              alt="Marcador de posición de imagen"
              width="130"
              height="152"
            />
          </div>
        </article>
      </section>
      <section>
        <article className="c-main__block">
          {" "}
          <h3 className="c-main__title">Self projects</h3>
        </article>
        <article className="c-main__block">
          <p>Juego del ahorcado</p>
          <p>Desarrollado en React</p>
          <small>Proyecto propio</small>
          <div className="c-main__block-img-x">
            <img
              src="https://via.placeholder.com/20x40"
              alt="Marcador de posición de imagen"
              width="20"
              height="40"
            />
          </div>
        </article>
        <article className="c-main__block">
          <p>Buscador de personajes de Harry Potter</p>
          <p>Desarrollado en React</p>
          <small>Proyecto propio</small>
          <div className="c-main__block-img-x">
            <img
              src="https://via.placeholder.com/130x152"
              alt="Marcador de posición de imagen"
              width="130"
              height="152"
            />
          </div>
        </article>
      </section>
    </>
  );
};
export default Works;
