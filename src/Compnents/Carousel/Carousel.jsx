import React, { useState } from "react";
import "./Carousel.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import calculator from "../../assets/images/Calculator.png" 
import minesweeper from "../../assets/images/minesweeper.png" 
import punkapi from "../../assets/images/punkapi.png" 
import morsecode from"../../assets/images/morsecode.png"   
import clientProject from "../../assets/images/client-project.png" 

const Carousel = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter === projectImagesArr.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(projectImagesArr.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const projectImagesArr = [
    calculator ,
    minesweeper ,
    punkapi ,
    morsecode ,
    clientProject
]

  return (
    <section className="carousel__container">
      <div className="carousel">
        <img
          src={leftArrow}
          alt="left arrow"
          onClick={handleDecrement}
          className="carousel__arrow carousel__arrow--left"
        />
        <img src={projectImagesArr[counter]} alt="" className="carousel__image" />
        
        <img
          src={rightArrow}
          alt="right arrow"
          onClick={handleIncrement}
          className="carousel__arrow carousel__arrow--right"
        />
      </div>
    </section>
  );
};

export default Carousel;
