import React from "react";
// import Content from "../Components/ReadMore";
import content from "../data/content.json";

export const Leistungen = () => {
  return (
    <>
      <class className="leistungen">
        {content.map((content, i) => (
          <div className="contentData" key={i}>
            <div className="headline-leitungen">
              <h1>{content.leistungen.headline}</h1>
            </div>
            <p>{content.leistungen.discription}</p>
            <div className="betriebliches-gesundheitsmanagement">
              <h2>{content.leistungen.categories.categorie1.headline}</h2>
              <p>{content.leistungen.categories.categorie1.discription}</p>
            </div>
            <div className="stressmanagement-training">
              <h2>{content.leistungen.categories.categorie2.headline}</h2>
              <p>{content.leistungen.categories.categorie2.discription}</p>
            </div>
            <div className="entspannung-training">
              <h2>{content.leistungen.categories.categorie3.headline}</h2>
              <p>{content.leistungen.categories.categorie3.discription}</p>
            </div>
            <div className="rauchfrei-programm">
              <h2>{content.leistungen.categories.categorie4.headline}</h2>
              <p>{content.leistungen.categories.categorie4.discription}</p>
            </div>
          </div>
        ))}
      </class>

      <div className="healthyM-wrapper">{/* <Content /> */}</div>
    </>
  );
};
