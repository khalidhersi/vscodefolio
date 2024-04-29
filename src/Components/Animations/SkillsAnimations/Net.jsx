import React from "react";
import styled, { keyframes } from "styled-components";

const Net = () => {
  return (
    <Wrapper className="skills__container__item">
      <i className="skills__container__item__icon fas fa-hashtag"></i>
      <p className="skills__container__item__desc">.NET</p>
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
  animation: ${moveInDown} 0.8s ease-in 0.2s both;
`;

export default Net;
