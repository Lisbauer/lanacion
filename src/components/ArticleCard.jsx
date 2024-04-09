import React from "react";
import "./articleCard.css";

const ArticleCard = () => {
  return (
    <>
      <section className="cardsSection">

        <article className="articleCards">
          <h2>
          El debate sobre la reforma judicial genera división y tensiones en Argentina.
          </h2>
          <img
            className="cardsImage1"
            src="../images/articleman.png"
            alt="article man"
          />
          <p className="authorName">Felipe Gomez</p>
        </article>

        <article className="articleCards">
          <img
            className="cardsImage2"
            src="../images/articleman2.png"
            alt="article man"
          />
          <h2>
          Entrevista. Javier Milei con Fantino: “Cristina ya fue, no va a volver más”
          </h2>
          <p className="authorName">Carlos Garcia</p>
        </article>

        <article className="articleCards">
          <h2>
          El aumento del desempleo crea preocupación en medio de la crisis económica.
          </h2>
          <div className="imageTextBox">
            <img
              className="cardsImage1"
              src="../images/articlewoman.png"
              alt="article man"
            />
            <p className="authorName">Estefania Cruz</p>
          </div>
        </article>

      </section>
    </>
  );
};

export default ArticleCard;
