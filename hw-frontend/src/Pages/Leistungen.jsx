import React from "react";
// import Content from "../Components/ReadMore";
import content from "../data/content.json";

export const Leistungen = () => {
  return (
    <>
      <class className="leistungen">
        {content.map((content, i) => (
          <div className="contentData" key={i}>
            <h1>{content.headline}</h1>
            <h2>{content.title}</h2>
            <p>{content.discription}</p>
          </div>
        ))}
      </class>

      <div className="healthyM-wrapper">{/* <Content /> */}</div>
    </>
  );
};
