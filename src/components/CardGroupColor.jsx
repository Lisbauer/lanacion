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
            Emilia vivió una noche especial marcando el inicio de su
            viaje..
          </p>
          <p className="authorName">Author / Marquee</p>
        </div>

        <div className="cardBox">
          <img src="./images/tinistoessel.png" alt="tini" />
          <p>
            Tini pospuso sus shows en Buenos Aires debido a esta situación.
          </p>
          <p className="authorName">Author / Marquee</p>
        </div>

        <div className="cardBox">
          <img src="./images/mariabecerra.png" alt="maria becerra" />
          <p>
            María Becerra emocionó a sus fans en su primer show en River Plate.
          </p>
          <p className="authorName">Author / Marquee</p>
        </div>
      </div>
      </section>
    </>
  );
};

export default Cards;
