import React from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li>
          <Link to="/vscodefolio" className="sidebar__items">
            <i className=" sidebar__items fas fa-home" />
          </Link>
        </li>
        <li>
          <Link to="/vscodefolio/education" className="sidebar__items">
            <i className="sidebar__icon fas fa-user-graduate" />
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/khalidhersi"
            target="_blank"
            className="sidebar__items"
          >
            <i className="sidebar__icon fab fa-github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/khalid-hersi-a907a4170/"
            target="_blank"
            className="sidebar__items"
          >
            <i className="sidebar__icon fab fa-linkedin" />
          </a>
        </li>
        <li>
          <Link to="/" className="sidebar__items">
            <i className="sidebar__icon fas fa-file-alt" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
