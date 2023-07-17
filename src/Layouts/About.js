import React from "react";
import imgCabo1 from "../images/image-cabo.jpg";
import imgCabo2 from "../images/image-cabo-2.jpg";
import imgBar from "../images/img-bar.jpg";
import imgPhotography1 from "../images/about-photo-1.jpg";
import imgPhotography2 from "../images/about-photo-2.jpg";

const About = () => {
  return (
    <div className="u-bg-dark u-text-white c-about">
      <article className="c-about-content">
        {/* <h3 className="c-main__title u-text-white">Sobre mi</h3> */}
        <section className="c-main__block c-about__block-primary c-about__block--padding-x">
          <article>
          <h3 className="c-main__title c-about__block-title u-text-white">Sobre mi</h3>
            <p className="c-main__text">
              ¡Hola! Soy Sofía, y soy front-end developer con sede en Madrid.
              Aunque vivo aquí, tengo mucha conexión con Almería.{" "}
            </p>
            <p className="c-main__text">
              Con más de un año de experiencia, he trabajado como desarrolladora
              web en CREATE, una marca de diseño de pequeño electrotoméstico.{" "}
            </p>
          </article>

          <article className="c-main__block-img">
            <div className="c-main__block-img-x c-about-img__crooked">
              <div className="c-about-img c-about-img__crooked-container">
                <img
                  className="u-bg-image"
                  src={imgCabo1}
                  alt="Marcador de posición de imagen"
                  width="141"
                  height="184"
                />
              </div>

              <div className="c-about-img c-about-img__crooked-container">
                <img
                  className="u-bg-image"
                  src={imgCabo2}
                  alt="Marcador de posición de imagen"
                  width="141"
                  height="184"
                />

                {/* <p className="c-about-img__footer">Parque Natural Cabo de Gata</p> */}
              </div>
            </div>
          </article>
        </section>
        <section className="c-main__block c-about__block-secondary">
          <p className="c-main__text c-about__text-center">
            Mi afán por aprender me ha llevado a embarcarme en el aprendizaje en
            UX/UI. Realizo cursos para mejorar mis habilidades, ya que siempre
            he tenido pasión por los detalles estéticos. Quiero aspirar a ser
            una profesional versátil que combina front-end, UX/UI y diseño de
            manera eficaz.
          </p>
          <p className="c-main__text  ">
            Fuera del mundo digital, me gusta hacer deporte y descubrir los
            mejores bares con tapa. La comida es, literalmente, lo mejor de la
            vida.
          </p>
          <article className="c-main__block-img-x u-padding-x">
            <div className=" c-about-img__container-y">
              <img
                className="u-bg-image"
                src={imgBar}
                alt="Marcador de posición de imagen"
                width="179"
                height="231"
              />
            </div>
          </article>
        </section>
        <section className="c-main__block c-about__block-third">
          <p className="c-main__text c-about__text-center">
            Además, me encanta la fotografía y he trabajado bastante como
            fotógrafa. Sin embargo, actualmente prefiero mantenerla como un
            hobby, ya que me permite disfrutar sin la presión de la
            profesionalidad.
          </p>
          <article className="c-main__block-img-x c-about-img__block u-padding-x">
            <div className=" c-about-img__container-x">
              <img
                className="u-bg-image"
                src={imgPhotography1}
                alt="Marcador de posición de imagen"
                width="405"
                height="303"
              />
            </div>
            <div className=" c-about-img__container-x">
              <img
                className="u-bg-image"
                src={imgPhotography2}
                alt="Marcador de posición de imagen"
                width="405"
                height="303"
              />
            </div>
          </article>
        </section>
      </article>
    </div>
  );
};
export default About;
