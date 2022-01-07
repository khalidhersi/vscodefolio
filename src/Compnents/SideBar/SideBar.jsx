import React from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
            <div className="sidebar">
                 <ul className="sidebar__menu">
                    <li><Link to="/" id="home"><i class=" sidebar__items fas fa-home" /></Link></li>
                    <li><a href="https://github.com/khalidhersi" target="_blank" className="sidebar__items"> <i className="sidebar__icon fab fa-github fa-spin"/></a></li>
                    <li><a href="https://www.linkedin.com/in/khalid-hersi-a907a4170/" target="_blank" className="sidebar__items"><i className="sidebar__icon fab fa-linkedin fa-spin"/></a></li>
                    <li><a href="" className="sidebar__items"><i className="sidebar__icon fas fa-file-alt fa-spin"/></a></li>
                </ul>
            </div>
    ) 

}

export default SideBar
