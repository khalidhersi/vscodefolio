import React from "react";
import styled, { keyframes } from "styled-components";

const Bootstrap = () => {
  return (
    <Wrapper className="skills__container__item">
      <i className="skills__container__item__icon fab fa-bootstrap "></i>
      <p className="skills__container__item__desc">Bootstrap</p>
    </Wrapper>
  );
};
const moveInLeft = keyframes`
    0% {
    opacity: 0;
    transform: translateX(60em);
    }

    100% {
    opacity: 1;
    transform: translateX(0);
    }`;

const Wrapper = styled.div`
  animation: ${moveInLeft} 0.6s ease-in 2s both;
`;

export default Bootstrap;
