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
            en mi trayectoria profesional. Esto solo son algunos de mis
            trabajos.
          </p>
        </article>

        <article className="c-main__block c-works__block c-works__center c-works__text-right">
          <div className="c-works__block-text c-works__block-text-configurator">
            <p className=" c-works__text-title">Configurador de ventiladores</p>
            <p className="c-works__text-description">Desarrollado en React</p>
            <small className="c-works__text-company">CREATE</small>
          </div>
          <div className=" c-about-img__container-x">
            <img
              src="https://via.placeholder.com/265x104"
              alt="Marcador de posición de imagen"
              width="265"
              height="104"
            />
          </div>
        </article>
        <article className="c-main__block c-works__block">
          <div className="c-works__block-text">
            {" "}
            <p className=" c-works__text-title">Campaña de verano</p>
            <p className="c-works__text-description">Hazlo fresco</p>
            <small className="c-works__text-company">CREATE</small>
          </div>

          <div className="c-main__block-img-x">
            <img
              src="https://via.placeholder.com/130x129"
              alt="Marcador de posición de imagen"
              width="130"
              height="129"
            />
          </div>
        </article>
        <article className="c-main__block c-works__block c-works__text-right">
          <div className="c-works__block-text">
            <p className=" c-works__text-title">
              Rediseño y funcionalidad del menú
            </p>

            <small className="c-works__text-company">Sklum</small>
          </div>
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
      <section className="u-bg-light">
        <article className="c-main__block c-works__block">
          {" "}
          <h3 className="c-main__title">Self projects</h3>
          <p className="c-main__text">
            Durante mi tiempo de estudio, realicé diversos proyectos personales.
            Estos proyectos son solo una pequeña muestra.
          </p>
        </article>
        <article className="c-main__block c-works__block c-works__text-right">
          <div className="c-works__block-text">
            <p className=" c-works__text-title">Juego del ahorcado</p>
            <p className="c-works__text-description">Desarrollado en React</p>
            <small className="c-works__text-company">Proyecto propio</small>
          </div>

          <div className=" c-home-img__icon">
            <img
              className="u-bg-image"
              src="https://via.placeholder.com/130x152"
              alt="Marcador de posición de imagen"
              width="130"
              height="152"
            />
          </div>
        </article>
        <article className="c-main__block c-works__block c-works__text-right">
          <div className="c-works__block-text">
            <p className=" c-works__text-title">
              Buscador de personajes de Harry Potter
            </p>
            <p className="c-works__text-description">Desarrollado en React</p>
            <small className="c-works__text-company">Proyecto propio</small>
          </div>
          <div className=" c-home-img__icon">
            <img
              className="u-bg-image"
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
