import React from "react";
import styled, { keyframes } from "styled-components";

const SpringBoot = () => {
  return (
    <Wrapper className="skills__container__item">
      <i className="skills__container__item__icon fa fa-leaf"></i>
      <p className="skills__container__item__desc">SpringBoot</p>
    </Wrapper>
  );
};
const moveInDown = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-170rem);
    }

    100% {
    opacity: 1;
    transform: translateY(0);
    }`;

const Wrapper = styled.div`
  animation: ${moveInDown} 3s ease-in 1.1s both;
`;

export default SpringBoot;
