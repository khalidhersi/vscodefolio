import React from "react";
import styled, { keyframes } from "styled-components";

const Python = () => {
  return (
    <Wrapper className="skills__container__item">
      <i className="skills__container__item__icon fab fa-python"></i>
      <p className="skills__container__item__desc">Python</p>
    </Wrapper>
  );
};
const moveInRight = keyframes`
    0% {
    opacity: 0;
    transform: translateX(-60rem);
    }

    100% {
    opacity: 1;
    transform: translateX(0);
    }`;

const Wrapper = styled.div`
  animation: ${moveInRight} 0.6s ease-in 2s both;
`;

export default Python;
