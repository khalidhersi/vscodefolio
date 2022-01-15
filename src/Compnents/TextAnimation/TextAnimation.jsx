import React from "react";
import styled, { keyframes } from "styled-components";

const TextAnimation = (word) => {
  const textArr = "I'm".split("");
  return (
    <Wrapper className="landing__header__title__id">
      {textArr.map((word, index) => (
        <span key={index}>{word}</span>
      ))}
    </Wrapper>
  );
};
const moveInDown = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-550rem);
    }

    100% {
    opacity: 1;
    transform: translateY(0);
    }`;

const Wrapper = styled.h2`
  display: inline-block;
  font-size: 6rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 400;
  letter-spacing: 0.5rem;
  animation: ${moveInDown} 1s ease-in 0.3s both;
`;

export default TextAnimation;
