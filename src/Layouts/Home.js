import React, { useRef } from "react";
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
      <main ref={mainSectionRef}>
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
            <div className="c-main__block-img-x ">
              <img
                src="https://via.placeholder.com/138x217"
                alt="Marcador de posición de imagen"
                width="138"
                height="217"
              />
              <div></div>
              <img
                src="https://via.placeholder.com/138x217"
                alt="Marcador de posición de imagen"
                width="138"
                height="217"
              />
            </div>
          </article>
        </section>
        <section className="c-main__block">
          <p className="c-main__text">
            Mi pasión por el desarrollo web va más allá del código. Valorando la
            estética y la experiencia del usuario, me esfuerzo por lograr un
            equilibrio entre funcionalidad y diseño atractivo. Creo que la
            intersección entre la tecnología y el diseño es donde se encuentran
            las mejores experiencias en línea.
          </p>
          <p className="c-main__text">
            Con habilidades sólidas en HTML, CSS y JavaScript, estoy capacitada
            para desarrollar interfaces interactivas y funcionales que se
            adapten a las expectativas del diseño.
          </p>
          <div className="c-main__block-img-x">
            <img
              src="https://via.placeholder.com/247x153"
              alt="Marcador de posición de imagen"
              width="247"
              height="153"
            />
          </div>
        </section>
        <section className="c-main__block">
          <p className="c-main__text">
            Además, cuento con experiencia en la optimización de sitios web, SEO
            y rendimiento. Comprendo la importancia de crear sitios web rápidos,
            accesibles y amigables con los motores de búsqueda para garantizar
            una visibilidad óptima y una experiencia de usuario satisfactoria.
          </p>
          <div className="c-main__block-img-x">
            <img
              src="https://via.placeholder.com/247x153"
              alt="Marcador de posición de imagen"
              width="247"
              height="153"
            />
          </div>
          <p className="c-main__text">
            Me encantaría unirme a un equipo dinámico y colaborativo, donde
            pueda seguir creciendo profesionalmente y contribuir con mis
            habilidades como desarrolladora front-end. Estoy lista para
            enfrentar nuevos desafíos y aportar soluciones creativas que mejoren
            la calidad y la eficacia de los proyectos web.
          </p>
        </section>
      </main>
      <footer className="c-main__block">
        <p className="c-main__text">Gracias por llegar hasta aquí</p>
        <div className="c-main__block-img-x">
          <img
            src="https://via.placeholder.com/29x29"
            alt="Marcador de posición de imagen"
            width="29"
            height="29"
          />
        </div>
        <p className="c-main__text">¿Hablamos?</p>
        <article className="c-main__block-img-x">
          <div>
            <img
              src="https://via.placeholder.com/29x29"
              alt="Marcador de posición de imagen"
              width="29"
              height="29"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/29x29"
              alt="Marcador de posición de imagen"
              width="29"
              height="29"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/29x29"
              alt="Marcador de posición de imagen"
              width="29"
              height="29"
            />
          </div>
        </article>
      </footer>
    </div>
  );
};
export default Home;
