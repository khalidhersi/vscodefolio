import React from 'react'
import "./Projects.scss"
import Typewriter from "typewriter-effect";

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
    
            <div className="projects__card-container" />
            <div className="projects__card">
                <div className="projects__card__pic">
                <img src="./assets/images/calculator.JPG" alt="Screenshot of calculator project" id="calculator" />
                </div>
                <div className="projects__card__info">
                <div className="projects__card__info__stack">
                    <i className="projects__card__info__stack__icon fab fa-html5"></i>
                    <i className="projects__card__info__stack__icon fab fa-sass"></i>
                    <i className="projects__card__info__stack__icon fab fa-js"></i>
                </div>
                <p className="projects__card__info__desc">Calculator</p>
                <p className="projects__card__info__detail">
                    This is a simple calculator made using vanilla JavaScript. 
                </p>
                <div className="projects__card__info__links">
                    <a href="https://github.com/jasenscode/Calculator" target="_blank" className="projects__card__info__links__link">Github</a>
                    <a href="https://jasenscode.github.io/Calculator/" target="_blank" className="projects__card__info__links__link">Demo</a>
                </div>
                </div>
            </div>
    
            <div className="projects__card">
                <div className="projects__card__pic">
                <img src="./assets/images/bomb-jump.JPG" alt="Screenshot of javascript game project" id="bomb-jump" />
                </div>
                <div className="projects__card__info">
                <div className="projects__card__info__stack">
                    <i className="projects__card__info__stack__icon fab fa-html5"></i>
                    <i className="projects__card__info__stack__icon fab fa-sass"></i>
                    <i className="projects__card__info__stack__icon fab fa-js"></i>
                </div>
                <p className="projects__card__info__desc">Bomb Jump</p>
                <p className="projects__card__info__detail">
                    A simple JavaScript game inspired by the Google T-Rex jump game.
                </p>
                <div className="projects__card__info__links">
                    <a href="https://github.com/jasenscode/javascript-game" target="_blank" className="projects__card__info__links__link">Github</a>
                    <a href="https://jasenscode.github.io/javascript-game/" target="_blank" className="projects__card__info__links__link">Demo</a>
                </div>
                </div>
            </div>
            
            <div className="projects__card">
                <div className="projects__card__pic">
                <img src="./assets/images/translator.JPG" alt="Screenshot of javascript game project" id="bomb-jump" />
                </div>
                <div className="projects__card__info">
                <div className="projects__card__info__stack">
                    <i className="projects__card__info__stack__icon fab fa-html5"></i>
                    <i className="projects__card__info__stack__icon fab fa-sass"></i>
                    <i className="projects__card__info__stack__icon fab fa-js"></i>
                </div>
                <p className="projects__card__info__desc">Morse Code Translator</p>
                <p className="projects__card__info__detail">
                    An English to Morse Code translator created using a Test Driven Development approach.
                </p>
                <div className="projects__card__info__links">
                    <a href="https://github.com/jasenscode/morse-translator" target="_blank" className="projects__card__info__links__link">Github</a>
                    <a href="https://jasenscode.github.io/morse-translator/" target="_blank" className="projects__card__info__links__link">Demo</a>
                </div>
                </div>
            </div>
         </section>
  
    )
}

export default Projects
