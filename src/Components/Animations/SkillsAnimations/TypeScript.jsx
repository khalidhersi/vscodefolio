import React from "react";
import styled, { keyframes } from "styled-components";

const TupeScript = () => {
  return (
    <Wrapper className="skills__container__item">
      <img
        className="skills__container__item__icon"
        id="typescript"
        src="https://img.icons8.com/material/106/d8d8d8/typescript.png"
      />
      <p className="skills__container__item__desc">TypeScript</p>
    </Wrapper>
  );
};
const moveInDown = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-15rem);
    }

    100% {
    opacity: 1;
    transform: translateY(0);
    }`;

const Wrapper = styled.div`
  animation: ${moveInDown} 0.8s ease-in 1.2s both;
`;

export default TupeScript;
