import React from "react";
import "./Projects.scss";
import Typewriter from "typewriter-effect";
import Carousel from "../../Components/Carousel/Carousel";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <h2 className="projects__title" aria-label="Projects">
          <Typewriter onInit={(tw) => tw.pauseFor(200).typeString("Projects").start()} />
        </h2>
        <Carousel />
      </div>
    </section>
  );
};

export default Projects;
