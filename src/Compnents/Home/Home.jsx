import React from "react";
import "./Home.scss";
import Typewriter from "typewriter-effect";
import TextAnimation from "../TextAnimation/TextAnimation";
import NameTextAnimation from "../NameTextAnimation/NameTextAnimation";
import LastNameAnimation from "../LastNameAnimation/LastNameAnimation";

const Home = () => {
  return (
    <section className="landing sections">
      <header className="landing__header">
        <TextAnimation />
        <NameTextAnimation />
        <LastNameAnimation />
        <p className="landing__header__desc">
          <span className="text-accent">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString("Web Developer")
                  .deleteAll()
                  .typeString("Full-Stack Web Developer")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .start();
              }}
            />
          </span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(8700).typeString("based in London").start();
            }}
          />
        </p>
      </header>
    </section>
  );
};

export default Home;
