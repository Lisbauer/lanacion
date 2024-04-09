import React from "react";
import "./leftFocusedArticle.css";

const LeftFocusedArticle = () => {
  return (
    <>
      <div className="leftFocusedArticleContent">
        <article className="sideArticleLeft">
          <h2>
            Leo le dio un consejo a la chica que detuvo el match de Inter Miami
            contra Colorado Rapids.
          </h2>
          <p className="messiText">
            No es nada inusual encontrarse con escenas como esta en los partidos
            de Lionel Messi, donde los aficionados irrumpen en el campo para
            acercarse al astro argentino, ya sea para tomar una foto o
            simplemente tocarlo. Sin embargo, el último sábado, durante el
            tiempo añadido del partido que enfrentó al Inter Miami contra
            Colorado Rapids por la MLS, fue una niña de 12 años quien se
            convirtió en la protagonista de esta escena. Con valentía, la niña
            se aproximó a Messi en pleno campo de juego, desafiando a los
            guardias de seguridad que intentaban detenerla. Mientras se
            acercaba, se escuchaba su voz entre la multitud: "¡Leo, Leo, una
            foto! ¡Te amo!". La reacción del ídolo argentino no se hizo esperar.
            Con una sonrisa, le alentó a continuar: "¡Dale, dale, corre!". Este
            encuentro fugaz pero emotivo se convirtió en un momento memorable
            para la niña, quien compartió la experiencia en su cuenta de
            Instagram, donde la grabación se volvió viral. En medio de la
            intensidad del partido, este gesto de Messi hacia una joven
            aficionada resalta la cercanía y el cariño que el jugador tiene
            hacia sus seguidores.
          </p>
          <p className="authorName">Author / Marquee</p>
          <img src="../images/messi.jpg" alt="messi" />
        </article>

        <div className="rightFocusedArticleContent">
          <article className="sideArticleRight">
            <img className="imageRight" src="../images/pelota.png" alt="imagen de pelota" />
            <h4>
            La fecha 13 de la Copa de la Liga Profesional 2024: partidos, horarios, posiciones, promedios y más
            </h4>
            <p className="authorName">Author / Marquee</p>
          </article>

          <article className="sideArticleRight">
            <img className="imageRight" src="../images/martino.png" alt="gerardo martino" />
            <h4>
              La picante palabra que usó Tata Martino para referirse al escándalo de Messi con el DT de Rayados: “Lo que tiene que ver con la…"
            </h4>
            <p className="authorName">Author / Marquee</p>
          </article>
        </div>
      </div>
    </>
  );
};

export default LeftFocusedArticle;
