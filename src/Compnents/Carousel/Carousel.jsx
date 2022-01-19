import React, { useState } from "react";
import "./Carousel.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import calculator from "../../assets/images/Calculator.png" 
import minesweeper from "../../assets/images/minesweeper.png" 
import punkApi from "../../assets/images/punkapi.png" 
import morseCode from"../../assets/images/morsecode.png"   
import clientProject from "../../assets/images/client-project.png" 
import earWorm from"../../assets/images/ear-worm.png"   

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

  const projectInfoArr = [
    {
      image: calculator,
      description:
        "This is a Iphone Calculator clone I made using vanilla JavaScript. Using DOM manipulation i was able to create a fully functioning calculator that handles basic arithmetic.",
    },
    {
      image: minesweeper,
      description:
        "I made a MineSweeper clone using vanilla JavaScript. It cointains a Timeer that counts down and ends the game at 0; the game also ends when a bomb is clicked just like the original MineSweeper game.",
    },
    {
      image: earWorm,
      description:
        "This is the first React App I made during a code along in the _nology boot camp. It has Search functionality and a working carousel that lisrts all the Beatles Albums.",
    },
    ,
    {
      image: punkApi,
      description:
        "This is a React App that collects data from the Punk API using the fetch(). It displays all the beers availble along with their descriptions and other info.",
    },
    ,
    {
      image: morseCode,
      description:
        "This is a morse Code Translator I made using the test first unit testing approach. I tested using jest allowing me to expect results of the morse code translator function.",
    },
    ,
    {
      image: clientProject,
      description:
        'This is a client project for the "Orchestra of the Age of Enlightenment"; as a group of 25 we split this project into 2 groups: front-end and back-end; working in an agile team, completing tickets for weekly sprints to produce and showcase the project to the client. My team was working on the front-end side, we created a react app using mobile first design to produce an amazing UI.',
    },
  ];

  projectInfoArr.map

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
