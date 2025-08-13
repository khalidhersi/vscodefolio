import React from "react";
import styled, { keyframes } from "styled-components";

const K8 = () => {
  return (
    <Wrapper className="skills__container__item">
      <i className="skills__container__item__icon fa fa-dharmachakra"></i>
      <p className="skills__container__item__desc">Kubernetes</p>
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
export default K8;
