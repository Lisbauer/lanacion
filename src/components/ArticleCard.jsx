import React from "react";
import "./articleCard.css";

const ArticleCard = () => {
  return (
    <>
      <section className="cardsSection">

        <article className="articleCards">
          <h2>
            Title cuando se dieron cuenta, los dos hermanos estaban preparandose
            para alunizar.
          </h2>
          <img
            className="cardsImage1"
            src="../images/articleman.png"
            alt="article man"
          />
          <p className="authorName">Author full name</p>
        </article>

        <article className="articleCards">
          <img
            className="cardsImage2"
            src="../images/articleman2.png"
            alt="article man"
          />
          <h2>
            Title cuando se dieron cuenta, los dos hermanos estaban preparandose
            para alunizar.
          </h2>
          <p className="authorName">Author / Marquee</p>
        </article>

        <article className="articleCards">
          <h2>
            Title cuando se dieron cuenta, los dos hermanos estaban preparandose
            para alunizar.
          </h2>
          <div className="imageTextBox">
            <img
              className="cardsImage1"
              src="../images/articlewoman.png"
              alt="article man"
            />
            <p className="authorName">Author full name</p>
          </div>
        </article>

      </section>
    </>
  );
};

export default ArticleCard;
