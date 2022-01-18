import React from "react";
import "./About.scss";
import AboutAnimationText from "../AboutAnimationText/AboutAnimationText";
import Typewriter from "typewriter-effect";



const About = () => {
  return (
    <section className="about sections" id="about">
<h2 className="about__header">
  {/* <AboutAnimation/> */}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(200)
              .typeString("About Me")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </h2>     
       <div className="about__bio">
          <AboutAnimationText/>
      </div>
    </section>
  );
};

export default About;
