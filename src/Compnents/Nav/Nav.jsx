import React from "react";
import "./Nav.scss";
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
          <i className="navbar__menu__icon fab fa-sass" id="sass" />
          <a className="navbar__menu__item">
            About.scss
          </a>
        </Link>
        <Link to="/skills" className="navbar__menu__list">
          <i className="navbar__menu__icon fab fa-react fa-spin" id="react" />
          <a className="navbar__menu__item">
            Skills.jsx
          </a>
        </Link>
        <Link to="/" className="navbar__menu__list" id="home">
          <i className="navbar__menu__icon fas fa-home" />
        </Link>
        <Link to="/projects" className="navbar__menu__list">
          <i className="navbar__menu__icon fab fa-npm" id="json" />
          <a className="navbar__menu__item">
            Projects.json
          </a>
        </Link>
        <Link to="/contact" className="navbar__menu__list">
          <i className="navbar__menu__icon fab fa-markdown" id="markdown" />
          <a className="navbar__menu__item">
            Contact.md
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
