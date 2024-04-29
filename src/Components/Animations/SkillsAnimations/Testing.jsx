import React from "react";
import styled, { keyframes } from "styled-components";

const Testing = () => {
  return (
    <Wrapper
      className="skills__container__item"
      id="react-testing-library__container"
    >
      <i className="skills__container__item__icon fa fa-vial"></i>
      <p
        className="skills__container__item__desc"
        id="react-testing-library__text" 
      >
        Testing
      </p>
    </Wrapper>
  );
};
const moveInLeft = keyframes`
    0% {
    opacity: 0;
    transform: translateX(60rem);
    }

    100% {
    opacity: 1;
    transform: translateX(0);
    }`;

const Wrapper = styled.div`
  animation: ${moveInLeft} 0.6s ease-in 2s both;
`;

export default Testing;
