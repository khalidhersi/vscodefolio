import React from "react";
import styled, { keyframes } from "styled-components";

const Css = () => {
  return (
    <Wrapper className="skills__container__item">
     <i class="skills__container__item__icon fab fa-css3-alt"></i>
                <p class="skills__container__item__desc">CSS</p>
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
  animation: ${moveInDown} 1s ease-in 1.1s both;
`;

export default Css;
