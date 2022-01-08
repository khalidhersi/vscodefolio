import React from 'react'
import "./Home.scss"
import Typewriter from "typewriter-effect";
import TextAnimation from '../TextAnimation/TextAnimation';

const Home = () => {


    return (
        <section className="landing sections">
            <header className="landing__header">
            <TextAnimation/>
                <Typewriter
                    options={{
                        wrapperClassName: "landing__header__title",
                        strings: ['Khalid Hersi'],
                        autoStart: true,
                        loop: true,
                    }} />
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
