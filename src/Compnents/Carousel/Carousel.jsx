import React, { useState } from "react";
import "./Carousel.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import calculator from "../../assets/images/Calculator.png";
import minesweeper from "../../assets/images/minesweeper.png";
import punkApi from "../../assets/images/punkapi.png";
import morseCode from "../../assets/images/morsecode.png";
import clientProject from "../../assets/images/client-project.png";
import earWorm from "../../assets/images/ear-worm.png";
import whiteCross from "../../assets/images/white-cross.png";
import Button from "../Button/Button";
import vueClone from "../../assets/images/fullstack-project.png";
import ticketTracker from "../../assets/images/ticket-tracker.png";

const Carousel = () => {
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(false);

  const handleIncrement = () => {
    if (counter === projectInfoArr.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(projectInfoArr.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const handleClick = () => {
    setShowText(!showText);
  };

  const projectInfoArr = [
    {
      image: calculator,
      title: "Iphone Calculator clone",
      description:
        "This is a Iphone Calculator clone I made using vanilla JavaScript. Using DOM manipulation i was able to create a fully functioning calculator that handles basic arithmetic.",
        GithubLink: "https://khalidhersi.github.io/Calculator/"
    },
    {
      image: minesweeper,
      title: "MineSweeper clone",
      description:
        "I made a MineSweeper clone using vanilla JavaScript. It cointains a Timeer that counts down and ends the game at 0; the game also ends when a bomb is clicked just like the original MineSweeper game.",
        GithubLink: "https://khalidhersi.github.io/MineSweeper/"    
      },
    {
      image: earWorm,
      title: "Ear Worm React App",
      description:
        "This is the first React App I made during a code along in the _nology boot camp. It has Search functionality and a working carousel that lisrts all the Beatles Albums.",
        GithubLink: "https://github.com/khalidhersi/react-code-along"

      },
    {
      image: ticketTracker,
      title: "Ticket Tracker",
      description:
        "After learning how to immplament the state hook in react, I was able to create a simple Ticket Tracker that has the added bonus of being able to map over a data file of employees and return names + occupations of all the employees in the company.",
        GithubLink: "https://khalidhersi.github.io/ticket-tracker/"
      },
    {
      image: punkApi,
      title: "Punk API",
      description:
        "This is a React App that collects data from the Punk API using the fetch(). It displays all the beers availble along with their descriptions and other info.",
        GithubLink: "https://khalidhersi.github.io/Punk-API/"
      },
    {
      image: morseCode,
      title: "Morse Code Translator",
      description:
        "This is a morse Code Translator I made using the test first unit testing approach. I tested using jest allowing me to expect results of the morse code translator function.",
        GithubLink: "https://khalidhersi.github.io/Morse-code-translator/"
      },
    {
      image: clientProject,
      title: "Orchestra of the Age of Enlightenment: Client Project",
      description:
        'This is a client project for the "Orchestra of the Age of Enlightenment"; as a group of 25 we split this project into 2 groups: front-end and back-end; working in an agile team, completing tickets for weekly sprints to produce and showcase the project to the client. My team was working on the front-end side, we created a react app using mobile first design to produce an amazing UI.',
        GithubLink: "https://nology-tech.github.io/oae-event-programme/6/home"
      },
    {
      image: vueClone,
      title: "Full-Stack Project: Vue Clone",
      description:
        "This fullstack project works using a java backend I created that conatins a list of movies and thier data. The Front-end collects the Back-ends data using fetch; you can navigate to the differnt endpoints of the backend using differnt urls. This backend supports GET requests, POST requests and DELETE requests and was modeled after the Vue cinema Front-end Design.",
        GithubLink: "https://khalidhersi.github.io/React-FrontEnd/"
      },
  ];

  const buttonJSX = (
    <div className="carousel__content carousel__content--button">
      <div
        className="carousel__content--button__container"
        onClick={handleClick}
      >
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );

  const textJSX = (
    <div className="carousel__content carousel__content--text">
      <img
        src={whiteCross}
        className="carousel__content__cross"
        onClick={handleClick}
        alt="Close text"
      />
      <h3 className="carousel__content--text__heading">
        {projectInfoArr[counter].title}
      </h3>
      <a href={projectInfoArr[counter].GithubLink} target="_blank"><Button buttonText={"Demo"} isSecondary={false} /></a>
      <p className="carousel__content--text__description">
        {projectInfoArr[counter].description}
      </p>
    </div>
  );

  return (
    <section className="carousel__container">
      <div className="carousel">
        <img
          src={leftArrow}
          alt="left arrow"
          onClick={handleDecrement}
          className="carousel__arrow carousel__arrow--left"
        />
        <img
          src={projectInfoArr[counter].image}
          alt=""
          className="carousel__image"
        />
        {showText ? textJSX : buttonJSX}
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
