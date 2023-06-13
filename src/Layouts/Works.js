import React from "react";
const Works = () => {
  return (
    <>
      {" "}
      <section>
        <article>
          {" "}
          <h3 className="c-main__title">Professional jobs</h3>
          <p>
            Si bien mi experiencia puede ser considerada en etapa inicial, cada
            uno de los proyectos presentados aquí representa un hito importante
            en mi trayectoria profesional. Esto solo son algunos de mis trabajos
          </p>
        </article>

        <article>
          <p>Configurador de ventiladores</p>
          <p>Desarrollado en React</p>
          <small>CREATE</small>
          <div>
            <img
              src="https://via.placeholder.com/265x104"
              alt="Marcador de posición de imagen"
              width="265"
              height="104"
            />
          </div>
        </article>
        <article>
          <p>Campaña de verano</p>
          <p>Hazlo fresco</p>
          <small>CREATE</small>
          <div>
            <img
              src="https://via.placeholder.com/130x129"
              alt="Marcador de posición de imagen"
              width="130"
              height="129"
            />
          </div>
        </article>
        <article>
          <p>Rediseño y funcionalidad del menú</p>

          <small>Sklum</small>
          <div>
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
        <article>
          {" "}
          <h3 className="c-main__title">Self projects</h3>
        </article>
        <article>
          <p>Juego del ahorcado</p>
          <p>Desarrollado en React</p>
          <small>Proyecto propio</small>
          <div>
            <img
              src="https://via.placeholder.com/20x40"
              alt="Marcador de posición de imagen"
              width="20"
              height="40"
            />
          </div>
        </article>
        <article>
          <p>Buscador de personajes de Harry Potter</p>
          <p>Desarrollado en React</p>
          <small>Proyecto propio</small>
          <div>
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
