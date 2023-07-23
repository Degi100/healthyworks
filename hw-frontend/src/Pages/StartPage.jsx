import React, { useState } from "react";
import { ImageCarousel } from "../Components/ImageCarousel/ImageCarousel";
import content from "../data/content.json";
import "../app.scss";

export const StartPage = () => {
  const [isTruncated, setIsTruncated] = useState(true);

  return (
    <>
      <div>
        <div className="imageCarousel">
          <ImageCarousel />
        </div>
        <div className="content-wrapper">
          {content.map((content, i) => (
            <div className="contentData" key={i}>
              <h1>{content.startPage.headline}</h1>
                
                {isTruncated
                  ? content.startPage.discription.slice(0, 200) + "..."
                  : content.startPage.discription}{" "}
              <button className="readMore-button" onClick={() => setIsTruncated(!isTruncated)}>
                {isTruncated ? "Read More" : "read Less"}
              </button>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};
