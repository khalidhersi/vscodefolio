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
  animation: ${moveInDown} 2s ease-in 1.1s both;
`;

export default Bootstrap;
