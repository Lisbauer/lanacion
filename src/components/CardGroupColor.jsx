import React from "react";
import "./cardGroupColor.css";

const Cards = () => {
  return (
    <>
    <section className="cardSection">
      <h1>Novedades de tus artistas favoritas</h1>
      <div className="cardGroupContent">
        <div className="cardBox">
          <img src="./images/emiliamernes.png" alt="Emilia Mernes" />
          <p>
            Emilia Mernes vivió una noche especial marcando el inicio de su
            viaje y el final de una intensa etapa previa. El apoyo de sus
            oyentes fue fundamental, agotando en menos de once horas las 10
            fechas que la artista lanzó para el Movistar Arena como presentación
            oficial de su segundo disco ".mp3".
          </p>
        </div>

        <div className="cardBox">
          <img src="./images/tinistoessel.png" alt="tini" />
          <p>
            En junio de 2022, Alejandro Stoessel, padre de la cantante Tini
            Stoessel, fue internado y operado nuevamente, tras una intervención
            previa en marzo debido a una hemorragia digestiva. Tini pospuso sus
            shows en Buenos Aires debido a esta situación.
          </p>
        </div>

        <div className="cardBox">
          <img src="./images/mariabecerra.png" alt="maria becerra" />
          <p>
            María Becerra emocionó a sus fans en su primer show en River Plate,
            ofreciendo un espectáculo con más de 30 canciones. A pesar de un
            retraso en el inicio que generó desconcierto, el evento tuvo un
            final feliz, con el estadio viviendo un ambiente de fiesta y
            expectativa.
          </p>
        </div>
      </div>
      </section>
    </>
  );
};

export default Cards;
