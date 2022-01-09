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
            </header>
      </section>
    )
}

export default Home
