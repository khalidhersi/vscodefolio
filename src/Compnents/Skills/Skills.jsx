import React from 'react'
import "./Skills.scss"
import Typewriter from "typewriter-effect";
import Html from '../Animations/SkillsAnimations/Html';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2 className="skills__header"><Typewriter 
                        onInit={(typewriter) => {
                            typewriter.pauseFor(100)
                            .typeString('Skills')
                              .callFunction(() => {
                                console.log('String typed out!');
                              }).start();
                            }}/></h2>
            <div className="skills__container">
            <div class="skills__container__item">
                <Html />
                </div>
                <div class="skills__container__item">
                
                </div>
                <div class="skills__container__item">
                <i class="skills__container__item__icon fab fa-sass"></i>
                <p class="skills__container__item__desc">Sass</p>
                </div>
                <div class="skills__container__item">
                <i class="skills__container__item__icon fab fa-js"></i>
                <p class="skills__container__item__desc">JavaScript</p>
                </div>
                <div class="skills__container__item">
                <i class="skills__container__item__icon fab fa-react fa-spin"></i>
                <p class="skills__container__item__desc">React</p>
                </div>
                <div class="skills__container__item">
                <i class="skills__container__item__icon fab fa-java"></i>
                <p class="skills__container__item__desc">Java</p>
                </div>
                <div class="skills__container__item">
                <i class="skills__container__item__icon fab fa-bootstrap "></i>
                <p class="skills__container__item__desc">Bootstrap</p>
                </div>
                <div class="skills__container__item">
                <i class="skills__container__item__icon fab fa-python"></i>
                <p class="skills__container__item__desc">Python</p>
                </div>
            </div>
        </section>
    )
}

export default Skills
