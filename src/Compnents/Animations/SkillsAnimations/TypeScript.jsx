import React from "react";
import styled, { keyframes } from "styled-components";

const TupeScript = () => {
  return (
    <Wrapper className="skills__container__item">
      <img class="skills__container__item__icon" src="https://img.icons8.com/material/106/d8d8d8/typescript.png"/>
      <p class="skills__container__item__desc">JavaScript</p>
    </Wrapper>
  );
};
const moveInDown = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-80rem);
    }

    100% {
    opacity: 1;
    transform: translateY(0);
    }`;

const Wrapper = styled.div`
  animation: ${moveInDown} 1.4s ease-in 1.1s both;
`;

export default TupeScript;
