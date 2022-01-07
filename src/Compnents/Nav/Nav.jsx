import React, { useState } from "react";
import "./Nav.scss"

const Nav = () => {
    // const [showNav, setShowNav] = useState(false);


    // const toggleNav = () => {
    //     setShowNav(!showNav);
    //   };

    return (
            <nav className="navbar">
                {/* {showNav && <NavBar toggleNav={toggleNav}/>} */}
                 <ul className="navbar__menu">
                    <li className="navbar__menu__list">
                        <i className="nnavbar__menu__icon fab fa-react fa-spin" id="react"/>
                        <a href="#about" className="navbar__menu__item">Skills.jsx</a>
                    </li>
                    <li className="navbar__menu__list">
                        <a href="#skills" className="navbar__menu__item">About.md</a>
                    </li>
                    <li className="navbar__menu__list">
                        <i className="navbar__menu__icon fab fa-sass" id="sass"/>
                        <a href="#projects" className="navbar__menu__item">Projects.scss</a>
                    </li>
                    <li className="navbar__menu__list">
                        <a href="#contact" className="navbar__menu__item">Contact.json</a>
                    </li>
                </ul>
            </nav>
    )
}

export default Nav
