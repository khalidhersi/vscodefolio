import React from 'react'
import "./Projects.scss"
import Typewriter from "typewriter-effect";
import Carousel from '../Carousel/Carousel';

const Projects = () => {
    return (
        <section className="projects sections" id="projects">
            <h2 className="projects__header"><Typewriter 
                        onInit={(typewriter) => {
                            typewriter.pauseFor(100)
                            .typeString('Projects')
                              .callFunction(() => {
                                console.log('String typed out!');
                              }).start();
                            }}/></h2>
            <Carousel />
                {/* <div className="projects__card__info__links">
                    <a href="https://github.com/jasenscode/Calculator" target="_blank" className="projects__card__info__links__link">Github</a>
                    <a href="https://jasenscode.github.io/Calculator/" target="_blank" className="projects__card__info__links__link">Demo</a>
                </div> */}
         </section>
  
    )
}

export default Projects
