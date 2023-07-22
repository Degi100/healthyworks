import React from "react";
import content from "../data/content.json";

export const ImpressumPage = () => {
  return (
    <>
      <class className="Impressum">
        {content.map((content, i) => (
          <div className="contentData" key={i}>
            <div className="headline-impressum">
              <h1>{content.impressum.headline}</h1>
            </div>
            <p>{content.impressum.discription}</p>
          </div>
        ))}
      </class>
    </>
  );
};
