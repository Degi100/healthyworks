import React from "react";
import content from "../data/content.json";
import img from "../assets/jennyjen.jpg";
import "../app.scss";

export const UnternehmenPage = () => {
  return (
    <>
      <div className="content-wrapper">
        {content.map((content, i) => (
          <div className="contentData" key={i}>
            <div className="headline-unternehmen">
              <h1>{content.unternehmen.headline}</h1>
            </div>
            <div className="layer-wrapper">
            <p>{content.unternehmen.discription}</p>
            <img src={img} width={200} alt={content.unternehmen.imgDisc} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
