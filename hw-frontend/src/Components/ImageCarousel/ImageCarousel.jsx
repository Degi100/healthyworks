import React, { useState, useEffect } from "react";
import Img1 from "../../assets/bird.jpg";
import Img2 from "../../assets/leaves.jpg";
import Img3 from "../../assets/lion.png";
import Img4 from "../../assets/vegetables2.jpg";
import "../ImageCarousel/ImageCarousel.scss";

export const ImageCarousel = () => {
  const images = [Img1, Img2, Img3, Img4];

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setCurrentImage(randomImage);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <img className="imageCarousel" src={currentImage} alt="Random Image" />
  );
};
