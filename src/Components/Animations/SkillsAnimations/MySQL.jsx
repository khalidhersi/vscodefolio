import React from "react";
import styled, { keyframes } from "styled-components";

const MySQL = () => {
  return (
    <Wrapper className="skills__container__item">
      <i className="skills__container__item__icon fa fa-database"></i>
      <p className="skills__container__item__desc">MySQL</p>
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
  animation: ${moveInDown} 2.8s ease-in 1.1s both;
`;

export default MySQL;
