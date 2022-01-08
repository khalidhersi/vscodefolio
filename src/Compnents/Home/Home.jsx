import React from 'react'
import "./Home.scss"
import Typewriter from "typewriter-effect";
import TextAnimation from '../TextAnimation/TextAnimation';

const Home = () => {


    return (
        <section className="landing sections">
            <header className="landing__header">
            <TextAnimation/>
               <h2 className="landing__header__title"><Typewriter 
                        onInit={(typewriter) => {
                            typewriter.pauseFor(900)
                            .typeString('Khalid Hersi')
                              .callFunction(() => {
                                console.log('String typed out!');
                              })
                              .start();
                          }}
                          />
                          </h2>
                <p className="landing__header__desc">
                    <span className="text-accent">Junior Full Stack Developer</span> based in London
                </p>
                <div className="explore__btn">
                    <a href="#about" class="explore__btn__links">
                    <p className="explore__btn__cta text-accent">Learn More</p>
                    <i className="explore__btn__arrow fas fa-angle-down"></i>
                    </a>
            </div>
            </header>
      </section>
    )
}

export default Home
