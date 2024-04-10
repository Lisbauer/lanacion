import React from "react";
import "./articleCard.css";

const ArticleCard = () => {
  return (
    <>
      <section className="cardsSection">
        <article className="articleCards">
          <a href="">
            <h2>
              El debate sobre la reforma judicial genera división y tensiones en
              Argentina.
            </h2>
          </a>
          <img
            className="cardsImage1"
            src="../images/articleman.png"
            alt="article man"
          />
          <a href=""><p className="authorName">Felipe Gomez</p></a>
        </article>

        <article className="articleCards">
          <img
            className="cardsImage2"
            src="../images/articleman2.png"
            alt="article man"
          />
          <a href="">
            <h2>
              Entrevista. Javier Milei con Fantino: “Cristina ya fue, no va a
              volver más”
            </h2>
          </a>
          <a href=""><p className="authorName">Carlos Garcia</p></a>
        </article>

        <article className="articleCards">
          <a href="">
            <h2>
              El aumento del desempleo crea preocupación en medio de la crisis
              económica.
            </h2>
          </a>
          <div className="imageTextBox">
            <img
              className="cardsImage1"
              src="../images/articlewoman.png"
              alt="article man"
            />
            <a href=""><p className="authorName">Estefania Cruz</p></a>
          </div>
        </article>
      </section>
    </>
  );
};

export default ArticleCard;
