import React from "react";
import "./Experiences.scss"

const Experiences = () => {
  return <div className="experiences">
  <div className="experiences__container experience">
    <h3 className="experiences__title">Experience</h3>
    <ul className="experiences__list">      
      <li className="experiences__list__ltems">Civil Engineering BEng Undergraduate degree <span className="text-accent">Sept 2017 - Aug 2020.</span></li>
      <li className="experiences__list__ltems">12 Week BootCapm At _nology <span className="text-accent">Oct 2021 - Jan 2022.</span></li>
    </ul>
    </div>
    <div className="experiences__container tech-skills">
    <h3 className="experiences__title">Technical Skills</h3>
    <ul className="experiences__list">      
      <li className="experiences__list__ltems">Full-Stack Web Development</li>
      <li className="experiences__list__ltem s">Responsive Design</li>
      <li className="experiences__list__ltems">Mobile Web Apps</li>
      <li className="experiences__list__ltems">REST APIs</li>
      <li className="experiences__list__ltems">Unit Testing</li>
      <li className="experiences__list__ltems">Spring Boot</li>
      <li className="experiences__list__ltems">Google Cloud Services</li>
      <li className="experiences__list__ltems">Dnd-to-Dnd Testing</li>
    </ul>
    </div>
    <div className="experiences__container languages">
    <h3 className="experiences__title">Programming languages</h3>
    <ul className="experiences__list">
      <li className="experiences__list__ltems">Html</li>
      <li className="experiences__list__ltems">CSS</li>
      <li className="experiences__list__ltems">JavaScript</li>
      <li className="experiences__list__ltems">SCSS</li>
      <li className="experiences__list__ltems">React</li>
      <li className="experiences__list__ltems">React Native</li>
      <li className="experiences__list__ltems">Java</li>
      <li className="experiences__list__ltems">Python</li>
      <li className="experiences__list__ltems">C#</li>
    </ul>
    </div>
    <div className="experiences__container intrests">
    <h3 className="experiences__title">My Intrests</h3>
    <ul className="experiences__list">
      <li className="experiences__list__ltems">Game Development</li>
      <li className="experiences__list__ltems">Mobile App Develepment</li>
      <li className="experiences__list__ltems">Boxing</li>
      <li className="experiences__list__ltems">Archery</li>
      <li className="experiences__list__ltems">Horse-riding</li>  
      <li className="experiences__list__ltems">Tae-kwon-do</li>
    </ul>
    </div>
  </div>;
};

export default Experiences;
