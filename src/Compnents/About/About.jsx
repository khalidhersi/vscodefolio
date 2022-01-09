import React from 'react';
import "./About.scss" ;
import Typewriter from "typewriter-effect";

const About = () => {
    return (
        <section className="about sections" id="about">
            <h2 className="about__header"><Typewriter 
                        onInit={(typewriter) => {
                            typewriter.pauseFor(200)
                            .typeString('About Me')
                              .callFunction(() => {
                                console.log('String typed out!');
                              }).start();
                            }}/></h2>
            <div className="about__bio">
            <p className="about__bio__text">
                I’m a
                <span className="text-accent"> junior web developer</span> from London and I’ve just completed a 12 week developer course at
                <span className="text-accent">_nology</span>.
            </p>
            <p className="about__bio__text">
                I’m on the lookout for a
                challenging tech role, which will test my skills and help me develop
                them further.
            </p>
            <p className="about__bio__text">
                Write more about what I actually did on the course. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Impedit fugiat qui ut,
                obcaecati nihil expedita.
            </p>
            <p className="about__bio__text">
                <span className="text-accent">Scroll down</span> to see the skills I’ve
                learnt and the projects I’ve worked on during my time on the course.
            </p>
            </div>
      </section>
  
    )
}

export default About
