import React, { useState } from "react";
import "./Nav.scss"
import NavBar from "../NavBar/NavBar";

const Nav = () => {
    const [showNav, setShowNav] = useState(false);


    const toggleNav = () => {
        setShowNav(!showNav);
      };

    return (
            <nav className="navbar">
                {showNav && <NavBar toggleNav={toggleNav}/>}
                 <ul className="navbar__menu">
                    <li><a href="#about" className="navbar__menu__item">About</a></li>
                    <li><a href="#skills" className="navbar__menu__item">Skills</a></li>
                    <li><a href="#projects" className="navbar__menu__item">Projects</a></li>
                    <li><a href="#contact" className="navbar__menu__item">Contact</a></li>
                </ul>
                 <div className="navbar__hamburger" onClick={toggleNav}>
                    <i class="menuIcon fas fa-bars"></i>
                </div>
            </nav>
    )
}

export default Nav
