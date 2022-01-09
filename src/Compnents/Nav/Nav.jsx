import React from "react";
import "./Nav.scss"
import { Link } from "react-router-dom";

const Nav = () => {
    // const [showNav, setShowNav] = useState(false);


    // const toggleNav = () => {
    //     setShowNav(!showNav);
    //   };

    return (
            <nav className="navbar">
                {/* {showNav && <NavBar toggleNav={toggleNav}/>} */}
                 <ul className="navbar__menu">
                 <Link to="/about" className="navbar__menu__list">
                    <i className="navbar__menu__icon fab fa-sass" id="sass"/>
                        <Link to="/about" className="navbar__menu__item">About.scss</Link>
                    </Link>
                    <Link to="/about" className="navbar__menu__list">
                        <i className="nnavbar__menu__icon fab fa-react fa-spin" id="react"/>
                        <Link to="/skills" className="navbar__menu__item">Skills.jsx</Link>
                    </Link>
                    <Link to="/about" className="navbar__menu__list">
                        <i className="navbar__menu__icon fab fa-npm" id="json"/>
                        <Link to="/projects" className="navbar__menu__item">Projects.json</Link>
                    </Link>
                    <Link to="/about" className="navbar__menu__list">
                        <i className="navbar__menu__icon fab fa-markdown" id="markdown"/>
                        <Link to="/contact" className="navbar__menu__item">Contact.md</Link>
                    </Link>
                </ul>
            </nav>
    )
}

export default Nav
