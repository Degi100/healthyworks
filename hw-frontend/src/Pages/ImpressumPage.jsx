import React from "react";
import content from "../data/content.json";
import "../app.scss";

export const ImpressumPage = () => {
  return (
    <>
      <div className="content-wrapper">
        {content.map((content, i) => (
          <div className="contentData" key={i}>
            <div className="headline-impressum">
              <h1>{content.impressum.headline}</h1>
            </div>
            <p>{content.impressum.discription}</p>
          </div>
        ))}
      </div>
    </>
  );
};
