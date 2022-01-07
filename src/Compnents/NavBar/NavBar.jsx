import React from "react";
import "./NavBar.scss"

const NavBar = (props) => {

    const {toggleNav} = props

    return (
            <div className="nav-bar">
                <div className="nav-bar__content">
                    <p className="nav-bar__item" >About</p>
                    <p className="nav-bar__item" >Skills</p>
                    <p className="nav-bar__item" >Projects</p>
                    <p className="nav-bar__item" >Contact</p>
                    <div onClick={toggleNav}>
                        <i class="nav-bar__cross fas fa-times " ></i>
                    </div>
                </div>
            </div>
    )
}

export default NavBar
