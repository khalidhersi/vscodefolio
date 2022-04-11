import React from "react";
import styled, { keyframes } from "styled-components";

const AboutAnimationText = () => {
  return (
    <Wrapper>
      <p className="about__bio__text">
        I’m a<span className="text-accent"> junior web developer</span> from
        London and I’ve just completed a 12 week developer course at
        <span className="text-accent"> _nology</span>. I’m on the lookout for a{" "}
        <span className="text-accent"> challenging tech role</span>, which will
        test my skills and help me develop them further.
      </p>
      <p className="about__bio__text">
        During my time at <span className="text-accent"> _nology</span> I was
        able to test my abilities and apply all the skills I learnt to complete
        Projects. I was able to complete a client project for the{" "}
        <span className="text-accent">
          {" "}
          Orchestra of the Age of Enlightenment{" "}
        </span>
        .
      </p>
      <p className="about__bio__text">
        Working in an agile team compelting sprints week to week gave me an
        insight on the avaergae day of a{" "}
        <span className="text-accent"> Web-develpoer. </span>
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
