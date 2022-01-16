import React from "react";
import styled, { keyframes } from "styled-components";

const LastNameAnimation = () => {
  return (
    <Wrapper className="landing__header__title last--name">
        <span > Hersi</span>
    </Wrapper>
  );
};
const moveInLeft = keyframes`
    0% {
    opacity: 0;
    transform: translateX(40rem);
    }

    100% {
    opacity: 1;
    transform: translateX(0);
    }`;

const Wrapper = styled.span`
  display: inline-block;
  font-size: 6rem;
  text-transform: uppercase;
  color: $font-color;
  font-weight: 400;
  letter-spacing: 0.5rem;
  animation: ${moveInLeft} 1s ease 1.6s both;
`;

export default LastNameAnimation;
