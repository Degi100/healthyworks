import React from "react";
import { ImageCarousel } from "../Components/ImageCaroussel/ImageCarousel";
import "../app.scss";

export const StartPage = () => {
  return (
    <>
      <div>
        <h1>Herzlich Willkommen.</h1>
          <ImageCarousel />
      </div>
    </>
  );
};
