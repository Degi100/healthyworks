import React from "react";
import content from "../data/content.json";
import img from '../assets/jennyjen.jpg'

export const UnternehmenPage = () => {
  return (
    <>
      <class className="unternehmen">
        {content.map((content, i) => (
          <div className="contentData" key={i}>
            <div className="headline-unternehmen">
              <h1>{content.unternehmen.headline}</h1>
            </div>
            <p>{content.unternehmen.discription}</p>
             <img src={img} width={200}alt="Bild von Jenny Jen" />
            
          </div>
        ))}
      </class>

      <div className="healthyM-wrapper">{/* <Content /> */}</div>
    </>
  );
};