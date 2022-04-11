import React from "react";
import styled, { keyframes } from "styled-components";

const AboutAnimation = (word) => {
  return (
    <Wrapper className="about__header">
      <span>About</span>
    </Wrapper>
  );
};
const moveInRight = keyframes`
    0% {
    opacity: 0;
    transform: translateX(-40rem);
    }

    100% {
    opacity: 1;
    transform: translateX(0);
    }`;

const Wrapper = styled.h2`
  display: inline-block;
  font-size: 6rem;
  text-transform: uppercase;
  color: $font-color;
  font-weight: 400;
  letter-spacing: 0.5rem;
  animation: ${moveInRight} 1s ease 1.1s both;
`;

export default AboutAnimation;
