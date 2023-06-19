import React, { useRef } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const mainSectionRef = useRef(null);
  const handleArrowClick = () => {
    mainSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="c-home">
      <header className="c-home-header">
        <h1 className="c-home-header__title">
          Desarrolladora front-end con enfoque resolutivo y apasionada por las
          últimas tendencias.
        </h1>
        <section className="c-home-header__block">
          <article>
            <p className="c-home-header__subtitle">
              Curiosa e inquieta, siempre en busca de soluciones innovadoras en
              el mundo del desarrollo web.{" "}
            </p>
            <p className="c-home-header__subtitle">
              Mi objetivo es crear experiencias impactantes y alineadas con las
              expectativas actuales del diseño.{" "}
            </p>
          </article>
          <div>
            <img
              src="https://via.placeholder.com/98x132"
              alt="Marcador de posición de imagen"
              width="98"
              height="132"
            />
          </div>
          <a
            href="#main"
            className="c-home-header__arrow"
            onClick={handleArrowClick}
          ></a>
        </section>
      </header>
      <main className="c-home-main" ref={mainSectionRef}>
        <section className="c-main__block">
          <article className="c-main__title">
            <small className="">{"//"}holii</small>
            <h3>HOLA.</h3>
          </article>

          <p className="c-main__text">
            Me llamo sofía y llevo un año y pico como front-end developer. Me
            destaco por mi enfoque resolutivo y mi curiosidad constante, siempre
            en busca de soluciones innovadoras.
          </p>
          <article className="c-main__block-img">
            <div className="c-main__block-img-x c-home-img__crooked">
              <div className="c-home-img c-home-img__crooked-container">
                <img
                  className="u-bg-image"
                  src="https://via.placeholder.com/138x217"
                  alt="Marcador de posición de imagen"
                  width="138"
                  height="217"
                />
              </div>
              <div className="c-home-img c-home-img__crooked-container">
                <img
                  className="u-bg-image"
                  src="https://via.placeholder.com/138x217"
                  alt="Marcador de posición de imagen"
                  width="138"
                  height="217"
                />
              </div>
            </div>
          </article>
        </section>
        <section className="c-main__block c-home__block-color  u-bg-dark">
          <p className="c-main__text u-text-white">
            Mi pasión por el desarrollo web va más allá del código. Valorando la
            estética y la experiencia del usuario, me esfuerzo por lograr un
            equilibrio entre funcionalidad y diseño atractivo. Creo que la
            intersección entre la tecnología y el diseño es donde se encuentran
            las mejores experiencias en línea.
          </p>
          <p className="c-main__text u-text-white">
            Con habilidades sólidas en HTML, CSS y JavaScript, estoy capacitada
            para desarrollar interfaces interactivas y funcionales que se
            adapten a las expectativas del diseño.
          </p>
          <article className="c-main__block-img-x u-padding-x">
            <div className=" c-home-img__container-x">
              <img
                className="u-bg-image"
                src="https://via.placeholder.com/247x153"
                alt="Marcador de posición de imagen"
                width="247"
                height="153"
              />
            </div>
          </article>
        </section>
        <section className="c-main__block">
          <p className="c-main__text">
            Además, cuento con experiencia en la optimización de sitios web, SEO
            y rendimiento. Comprendo la importancia de crear sitios web rápidos,
            accesibles y amigables con los motores de búsqueda para garantizar
            una visibilidad óptima y una experiencia de usuario satisfactoria.
          </p>
          <article className="c-main__block-img-x u-padding-x">
            <div className=" c-home-img__container-x">
              <img
                className="u-bg-image"
                src="https://via.placeholder.com/247x153"
                alt="Marcador de posición de imagen"
                width="247"
                height="153"
              />
            </div>
          </article>
          <p className="c-main__text c-home-main__team">
            Me encantaría unirme a un equipo dinámico y colaborativo, donde
            pueda seguir creciendo profesionalmente y contribuir con mis
            habilidades como desarrolladora front-end. Estoy lista para
            enfrentar nuevos desafíos y aportar soluciones creativas que mejoren
            la calidad y la eficacia de los proyectos web.
          </p>
        </section>
      </main>
      <footer className="c-home__block-color c-home-footer u-bg-light">
        <p className="c-main__text">Gracias por llegar hasta aquí</p>
        <article className="c-main__block-img-x u-padding-x">
          <div className=" c-home-img__icon">
            <img
              className="u-bg-image"
              src="https://via.placeholder.com/30x30"
              alt="Marcador de posición de imagen"
              width="30"
              height="30"
            />
          </div>
        </article>
        <div className="c-main__text">
          {" "}
          <a
            className=" c-home-footer__talk"
            href="mailto:sofiabmanzano@gmail.com"
          >
            ¿Hablamos?
          </a>
        </div>

        <article className="c-main__block-img-x c-home-footer__rrss">
          <Link
            className="c-home-img__icon"
            to="https://www.linkedin.com/in/sofiablas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                className="u-bg-image"
                src="https://via.placeholder.com/30x30"
                alt="Marcador de posición de imagen"
                width="30"
                height="30"
              />
            </div>
          </Link>

          <Link
            className="c-home-img__icon"
            to="https://github.com/SofiaBManzano"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                className="u-bg-image"
                src="https://via.placeholder.com/30x30"
                alt="Marcador de posición de imagen"
                width="30"
                height="30"
              />
            </div>
          </Link>

          <Link
            className="c-home-img__icon"
            to="https://www.instagram.com/sofiabmanzano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                className="u-bg-image"
                src="https://via.placeholder.com/30x30"
                alt="Marcador de posición de imagen"
                width="30"
                height="30"
              />
            </div>
          </Link>
        </article>
      </footer>
    </div>
  );
};
export default Home;
