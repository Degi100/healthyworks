import React from "react";
import { ImageCarousel } from "../Components/ImageCarousel/ImageCarousel";
import "../app.scss";

export const StartPage = () => {
  return (
    <>
      <div>
        <h1>Herzlich Willkommen.</h1>
          <class className="imageCarousel"><ImageCarousel /></class>
      </div>
    </>
  );
};
