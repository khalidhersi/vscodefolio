import React from "react";
import styled, { keyframes } from "styled-components";

const Testing = () => {
  return (
    <Wrapper
      className="skills__container__item"
      id="react-testing-library__container"
    >
      <i className="skills__container__item__icon fa fa-vial"></i>
      <p className="skills__container__item__desc" id="react-testing-library__text">
        React Testing
      </p>
    </Wrapper>
  );
};
const moveInDown = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-140rem);
    }

    100% {
    opacity: 1;
    transform: translateY(0);
    }`;

const Wrapper = styled.div`
  animation: ${moveInDown} 2.4s ease-in 1.1s both;
`;

export default Testing;
