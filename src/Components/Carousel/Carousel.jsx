import React, { useState } from "react";
import "./Carousel.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import whiteCross from "../../assets/images/white-cross.png";
import Button from "../Button/Button";
import data from "../../assets/data/data.json";
// import calculator from "../../assets/images/Calculator.png";
// import minesweeper from "../../assets/images/minesweeper.png";
// import punkApi from "../../assets/images/punkapi.png";
// import morseCode from "../../assets/images/morsecode.png";
// import clientProject from "../../assets/images/client-project.png";
// import earWorm from "../../assets/images/ear-worm.png";
// import vueClone from "../../assets/images/fullstack-project.png";
// import ticketTracker from "../../assets/images/ticket-tracker.png";
// import wordleClone from "../../assets/images/wordle.png";
// import dodge from "../../assets/images/dodge.png";
// import librarySystem from "../../assets/images/librarySystem.png"
// import projectInfoArr from "../../assets/data/data"

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
      image:
        "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/Calculator.png",
      title: "Iphone Calculator clone",
      description:
        "This is a Iphone Calculator clone I made using vanilla JavaScript. Using DOM manipulation i was able to create a fully functioning calculator that handles basic arithmetic.",
      GithubLink: "https://khalidhersi.github.io/Calculator/",
    },
    {
      image:
        "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/minesweeper.png",
      title: "MineSweeper clone",
      description:
        "I made a MineSweeper clone using vanilla JavaScript. It cointains a Timeer that counts down and ends the game at 0; the game also ends when a bomb is clicked just like the original MineSweeper game.",
      GithubLink: "https://khalidhersi.github.io/MineSweeper/",
    },
    {
      image:
        "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/morsecode.png",
      title: "Morse Code Translator",
      description:
        "This is a morse Code Translator I made using the test first unit testing approach. I tested using jest allowing me to expect results of the morse code translator function.",
      GithubLink: "https://khalidhersi.github.io/Morse-code-translator/",
    },
    {
      image:
        "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/ear-worm.png",
      title: "Ear Worm React App",
      description:
        "This is the first React App I made during a code along in the _nology boot camp. It has Search functionality and a working carousel that lisrts all the Beatles Albums.",
      GithubLink: "https://github.com/khalidhersi/react-code-along",
    },
    {
      image:
        "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/ticket-tracker.png",
      title: "Ticket Tracker",
      description:
        "After learning how to immplament the state hook in react, I was able to create a simple Ticket Tracker that has the added bonus of being able to map over a data file of employees and return info on of all the employees in the company.",
      GithubLink: "https://khalidhersi.github.io/ticket-tracker-v2/",
    },
    {
      image: "https://raw.githubusercontent.com/khalidhersi/punk-api-v2/main/src/assets/images/mobile-view.png",
      title: "Punk API",
      description: "This is a React App that collects data from the Punk API using the fetch(). It displays all the beers availble along with their descriptions and other info. Using .filter to filter the api arrays to search for different beers.",
      GithubLink: "https://khalidhersi.github.io/punk-api-v2/"
    },
    {
      image:
        "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/client-project.png",
      title: "Orchestra of the Age of Enlightenment: Client Project",
      description:
        'This is a client project for the "Orchestra of the Age of Enlightenment". Working in an agile team, my team worked on the frontend; creating a react app using mobile first design to produce an amazing UI.',
      GithubLink: "https://nology-tech.github.io/oae-event-programme/6/home",
    },
    {
      image:
        "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/fullstack-project.png",
      title: "Full-Stack Project: Vue Clone",
      description:
        "This fullstack project works using a Spring BootJava Backend & a React Frontend. It is a Vue Cinema Clone, holding a list of movies and thier information on the server.",
      GithubLink: "https://khalidhersi.github.io/React-FrontEnd/",
    },
    {
      image:
        "https://raw.githubusercontent.com/khalidhersi/vscodefolio/master/src/assets/images/librarySystem.png",
      title: "Java Console Library Booking System",
      description:
        "A Java Console Project for Borrowing Books in a library and displaying relavent Book data to the console. I used the provided .CSV file as a data source and extrated all the data to be able to be listed in the console.",
      GithubLink:
        "https://github.com/khalidhersi/Library-Book-Loaning-System-Java",
    },
    {
      image:
        "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/wordle.png",
      title: "Wordle Clone",
      description:
        "This a Wordle Clone I created using React. This game works using multiple state hooks to determine whether the letters you enter are the same as the hidden word.",
      GithubLink: "https://khalidhersi.github.io/wordle/",
    },
    {
      image:
        "https://raw.githubusercontent.com/khalidhersi/vscodefolio/master/src/assets/images/dodge.png",
      title: "Dodge: My Indie Java Game",
      description:
        "Dodge is a game I created to test out my Java skills. The game works to train your reaction time by dodging differnt shaped objects. Try it out! ",
      GithubLink: "https://github.com/khalidhersi/Dodge--java",
    },
    {
      image: "https://raw.githubusercontent.com/khalidhersi/vscodefolio/master/src/assets/images/tic-tac-toe.png",
      title: "Tic-Tac-Toe React",
      description:
        "This project was made uses the latest version of React.JS. State Hooks were used to control naughts and crooses being drawn onto the page.",
      GithubLink: "https://github.com/khalidhersi/tic-tac-toe",
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
        {data[counter].title}
      </h3>
      <a href={data[counter].GithubLink} target="_blank">
        <Button buttonText={"Demo"} isSecondary={false} />
      </a>
      <p className="carousel__content--text__description">
        {data[counter].description}
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
          src={data[counter].image}
          alt="project image"
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
