import React from "react";
import styled, { keyframes } from "styled-components";

const Html = () => {
  return (
    <Wrapper className="skills__container__item">
      <i class="skills__container__item__icon fab fa-html5"></i>
      <p class="skills__container__item__desc">HTML</p>
    </Wrapper>
  );
};
const moveInDown = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-50rem);
    }

    100% {
    opacity: 1;
    transform: translateY(0);
    }`;

const Wrapper = styled.div`
  animation: ${moveInDown} 0.8s ease-in 1.1s both;
`;

export default Html;
