import React from "react";
import styled, { keyframes } from "styled-components";

const AboutAnimationText = () => {
  return (
    <Wrapper>
      <p className="about__bio__text">
        As <span className="text-accent--pink">YOUR</span> Freelance <span className="text-accent--pink"> Fullstack </span> Software Developer;
        I bring a wealth of expertise and dedication to <span className="text-accent--pink"> EVERY</span> project.
      </p>
      <p className="about__bio__text">
         With a strong foundation in 
         <span className="text-accent--pink"> React</span>, 
         <span className="text-accent--pink"> TypeScript</span>, 
         <span className="text-accent--pink"> .NET</span> and
         <span className="text-accent--pink"> Java</span>.
         <br/>
        I offer versatile skills in this ever changing <span className="text-accent--pink">techincal</span> world 
        set to tackle a wide array of <span className="text-accent--pink">development</span> challenges.
      </p>

      <p className="about__bio__text">
        Making <span className="text-accent--pink">ME</span> the ideal choice for clients seeking top-notch development solutions.
      </p>
    </Wrapper>
  );
};
const moveInRight = keyframes`
    0% {
    opacity: 0;
    transform: translateX(60rem);
    }

    100% {
    opacity: 1;
    transform: translateX(0);
    }`;

const Wrapper = styled.h2`
  display: inline-block;
  font-family: $body-font;
  font-size: 6rem;
  color: $font-color;
  text-transform: none;
  animation: ${moveInRight} 1.3s ease-out 1.9s both;
`;

export default AboutAnimationText;
