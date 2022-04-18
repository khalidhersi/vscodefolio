import React from "react";
import "./NotFoundPage.scss";
import PageNotFoundImg from "../../assets/images/PageNotFound.png";
import Typewriter from "typewriter-effect";

const NotFoundPage = () => {
  return (
    <div className="error__container">
      <img
        className="error__container__image"
        src="https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/PageNotFound.png"
      />
      <h2>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(0)
              .typeString("Error!!!")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </h2>
      <h2>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1400)
              .typeString("Page Not Found")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </h2>
      <img
        className="error__container__image__reflection"
        src={PageNotFoundImg}
      />
    </div>
  );
};

export default NotFoundPage;
