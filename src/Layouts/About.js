import React from "react";
const About = () => {
  return (
    <div>
      {" "}
      <h3 className="c-main__title">Sobre mi</h3>
      <section className="c-main__block">
        <p className="c-main__text">
          ¡Hola! Soy Sofía, y soy front-end developer con sede en Madrid. Aunque
          vivo aquí, tengo mucha conexión con Almería.{" "}
        </p>
        <p className="c-main__text">
          Con más de un año de experiencia, he trabajado como desarrolladora web
          en CREATE, una marca de diseño de pequeño electrotoméstico.{" "}
        </p>
        <article className="c-main__block-img-x">
          <div>
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
          Mi afán por aprender me ha llevado a embarcarme en el aprendizaje en
          UX/UI. Realizo cursos para mejorar mis habilidades, ya que siempre he
          tenido pasión por los detalles estéticos. Quiero aspirar a ser una
          profesional versátil que combina front-end, UX/UI y diseño de manera
          eficaz.
        </p>
        <p className="c-main__text">
          Fuera del mundo digital, me gusta hacer deporte y descubrir los
          mejores bares con tapa. La comida es, literalmente, lo mejor de la
          vida.
        </p>
        <div className="c-main__block-img-x">
          <img
            src="https://via.placeholder.com/179x231"
            alt="Marcador de posición de imagen"
            width="179"
            height="231"
          />
        </div>
      </section>
      <section className="c-main__block">
        <p className="c-main__text">
          Además, me encanta la fotografía y he trabajado bastante como
          fotógrafa. Sin embargo, actualmente prefiero mantenerla como un hobby,
          ya que me permite disfrutar sin la presión de la profesionalidad.
        </p>
        <div className="c-main__block-img-x">
          <img
            src="https://via.placeholder.com/183x137"
            alt="Marcador de posición de imagen"
            width="183"
            height="137"
          />
        </div>
      </section>
    </div>
  );
};
export default About;
