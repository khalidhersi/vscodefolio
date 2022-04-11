import React from "react";
import "./Projects.scss";
import Typewriter from "typewriter-effect";
import Carousel from "../../Components/Carousel/Carousel";

const Projects = () => {
  return (
    <section className="projects sections" id="projects">
      <h2 className="projects__header">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(100)
              .typeString("Projects")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </h2>
      <Carousel />
    </section>
  );
};

export default Projects;
