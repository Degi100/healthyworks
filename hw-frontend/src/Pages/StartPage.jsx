import React from "react";
import { ImageCarousel } from "../Components/ImageCarousel/ImageCarousel";
import content from "../data/content.json";
import "../app.scss";

export const StartPage = () => {
  return (
    <>
      <div>
        <class className="imageCarousel">
          <ImageCarousel />
        </class>
        <div className="content">
          {content.map((content, i) => (
            <div className="contentData" key={i}>
              <h1>{content.headlineStart}</h1>
              <p>{content.discriptionStart}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
