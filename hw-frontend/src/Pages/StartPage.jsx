import React from "react";
import Content from "../Components/ReadMore"
import "../app.scss"


export const StartPage = () => {
  return (
    <>
      <div>
        <h1>Herzlich Willkommen.</h1>
        <div className="healthyM-wrapper">
            <Content />    
        </div>
      </div>
    </>
  );
};
