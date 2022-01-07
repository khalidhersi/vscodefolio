import React from 'react'
import "./Header.scss"

const Header = () => {
    return (
        <section className="landing sections">
            <header className="landing__header">
            <h1 className="landing__header__title" id='im'>I'm</h1>
            <h2 className="landing__header__title">Khalid Hersi</h2>
            <p className="landing__header__desc">
                <span className="text-accent">Junior Full Stack Developer</span> based in London
            </p>
            <div className="explore__btn">
                <a href="#about" class="explore__btn__links">
                <p className="explore__btn__cta text-accent">Learn More</p>
                <i class="explore__btn__arrow fas fa-angle-down"></i>
                </a>
            </div>
            </header>
      </section>
    )
}

export default Header
