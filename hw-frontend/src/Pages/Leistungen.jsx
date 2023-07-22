import React, { useState } from "react";
import content from "../data/content.json";
import "../app.scss";


export const Leistungen = () => {
  const [isCategorie1, setIsCategorie1] = useState(true);
  const [isCategorie2, setIsCategorie2] = useState(true);
  const [isCategorie3, setIsCategorie3] = useState(true);
  const [isCategorie4, setIsCategorie4] = useState(true);
  
 

  return (
    <>
      <div className="content-wrapper">
        {content.map((content, i) => (
          <div className="contentData" key={i}>
            <div className="headline-leitungen">
              <h1>{content.leistungen.headline}</h1>
            </div>
            <p>{content.leistungen.discription}</p>
            <div className="betriebliches-gesundheitsmanagement">
              <h2>{content.leistungen.categories.categorie1.headline}</h2>
              <p>
                {isCategorie1
                  ? content.leistungen.categories.categorie1.discription.slice(
                      0,
                      100
                    ) + "..."
                  : content.leistungen.categories.categorie1.discription}
                <button onClick={() => setIsCategorie1(!isCategorie1)}>
                  {isCategorie1 ? "Read More" : "read Less"}
                </button>
              </p>
            </div>
            <div className="stressmanagement-training">
              <h2>{content.leistungen.categories.categorie2.headline}</h2>
              <p>
                {" "}
                {isCategorie2
                  ? content.leistungen.categories.categorie2.discription.slice(
                      0,
                      100
                    ) + "..."
                  : content.leistungen.categories.categorie2.discription}
                <button onClick={() => setIsCategorie2(!isCategorie2)}>
                  {isCategorie2 ? "Read More" : "read Less"}
                </button>
              </p>
            </div>
            <div className="entspannung-training">
              <h2>{content.leistungen.categories.categorie3.headline}</h2>
              <p>
                {" "}
                {isCategorie3
                  ? content.leistungen.categories.categorie3.discription.slice(
                      0,
                      100
                    ) + "..."
                  : content.leistungen.categories.categorie3.discription}
                <button onClick={() => setIsCategorie3(!isCategorie3)}>
                  {isCategorie3 ? "Read More" : "read Less"}
                </button>
              </p>
            </div>
            <div className="rauchfrei-programm">
              <h2>{content.leistungen.categories.categorie4.headline}</h2>
              <p>
                {" "}
                {isCategorie4
                  ? content.leistungen.categories.categorie4.discription.slice(
                      0,
                      100
                    ) + "..."
                  : content.leistungen.categories.categorie4.discription}
                <button onClick={() => setIsCategorie4(!isCategorie4)}>
                  {isCategorie4 ? "Read More" : "read Less"}
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="healthyM-wrapper">{/* <Content /> */}</div>
    </>
  );
};
