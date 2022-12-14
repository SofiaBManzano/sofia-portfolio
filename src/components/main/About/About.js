const About = () => {
  return (
    <article className="c-block-section c-block-section-about u-center-block-text">
      {" "}
      <h2 className=" c-block-title u-bold-italic">
        Ok... <span className="u-span-inline">pero cuéntame más de ti </span>
      </h2>
      <p>
        Antes del front-end, estuvo el vídeo. Durante 4 años estuve trabajando
        en una productora audiovisual ocupándome de la edición y postproducción
        de cada vídeo. Al mismo tiempo trabajaba como postproductora freelance,
        lo que me permitía realizar trabajos más creativos.
      </p>
      <p>
        En mi última etapa de esta profesión aprendí a modelar en 3D y
        etalonaje: tratamiento del color en vídeo.
      </p>
      <p>
        En mi tiempo libre me gusta hacer fotografía analógica. Aunque admito
        que cada vez uso más el móvil (¡Y quién no!).
      </p>
      <p>
        Si todavía tienes curiosidad y quieres ver qué estaba haciendo antes de
        reprogramarme en desarrolladora front-end, puedes{" "}
        <span className="u-bold-italic">dar play a mi reel</span> audiovisual.
      </p>
      <div className="c-block-iframe-wrapper">
        <iframe
          src="https://player.vimeo.com/video/311440378?h=e5ab699e2f&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&muted=1&background=0"
          className="c-block-iframe"
          frameBorder="0"
          title="reel"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </article>
  );
};

export default About;
