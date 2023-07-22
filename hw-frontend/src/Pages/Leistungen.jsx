import React from "react";
// import Content from "../Components/ReadMore";
import content from "../data/content.json";

export const Leistungen = () => {
  return (
    <>
      <class className="leistungen">
        {content.map((content, i) => (
          <div className="contentData" key={i}>
            <div className="headline">
              <h1>{content.leistungen.headline}</h1>
            </div>
            <p>{content.leistungen.discription}</p>
            <div className="betriebliches-gesundheitsmanagement">
              <h2>{content.leistungen.categories.categorie1.section}</h2>
              <p>{content.leistungen.categories.categorie1.discription}</p>
            </div>
            <div className="stressmanagement-training">
              <h2>{content.leistungen.categories.categorie2.section}</h2>
              <p>{content.leistungen.categories.categorie2.discription}</p>
            </div>
          </div>
        ))}
      </class>

      <div className="healthyM-wrapper">{/* <Content /> */}</div>
    </>
  );
};
