import React from 'react'
import cv from  "../../assets/images/cv.png"
import githubIcon from  "../../assets/images/github-icons.png"
import linkedinIcon from  "../../assets/images/linkedin-icon.png"
import "./Contact.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, falinkedIn } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return ( 
        <>
            <section className="contact sections" id="contact">
                <div className="contact__method">
                    <a href="https://github.com/khalidhersi" target="_blank" className="contact__method__link">
                        <i class="contact__method__icon fab fa-github fa-spin"></i>
                    </a>
                    <p className="contact__method__label">Github</p>
                </div>
                <div className="contact__method">
                    <a href="https://www.linkedin.com/in/khalid-hersi-a907a4170/" target="_blank" className="contact__method__link">
                    <i class="contact__method__icon fab fa-linkedin fa-spin"></i>
                    </a>
                    <p className="contact__method__label">LinkedIn</p>
                </div>
                <div className="contact__method">
                    <a href="" className="contact__method__link">
                    <i class="contact__method__icon fas fa-file-alt fa-spin"></i>
                    </a>
                    <p className="contact__method__label">Resume</p>
                </div>
            </section> 
        </>
    )
}

export default Contact
