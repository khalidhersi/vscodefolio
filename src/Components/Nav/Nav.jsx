import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <Link to="/vscodefolio/about" className="navbar__menu__list">
          <i className="navbar__menu__icon fab fa-sass" id="sass" />
          <span href="/about" className="navbar__menu__item">
            About.scss
          </span>
        </Link>
        <Link to="/vscodefolio/skills" className="navbar__menu__list">
          <i className="navbar__menu__icon fab fa-react fa-spin" id="react" />
          <span href="/skills" className="navbar__menu__item">
            Skills.jsx
          </span>
        </Link>
        <Link to="/vscodefolio/" className="navbar__menu__list" id="home">
          <i className="navbar__menu__icon fas fa-home" />
        </Link>
        <Link to="/vscodefolio/projects" className="navbar__menu__list">
          <i className="navbar__menu__icon fab fa-npm" id="json" />
          <span href="/projects" className="navbar__menu__item">
            Projects.json
          </span>
        </Link>
        <Link to="/vscodefolio/Experiences" className="navbar__menu__list">
          <i className="navbar__menu__icon fab fa-markdown" id="markdown" />
          <span href="/Experiences" className="navbar__menu__item">
            Experiences.md
          </span>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
