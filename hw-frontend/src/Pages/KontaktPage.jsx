import React from "react";
import content from "../data/content.json";

export const KontaktPage = () => {
  return (
    <>
      <class className="Kontakt">
        {content.map((content, i) => (
          <div className="contentData" key={i}>
            <div className="headline-Kontakt">
              <h1>{content.kontakt.headline}</h1>
            </div>
            <p>{content.kontakt.discription}</p>
          </div>
        ))}
      </class>
    </>
  );
};

