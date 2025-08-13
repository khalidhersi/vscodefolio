import React from "react";
import styled, { keyframes } from "styled-components";
// import { ReactComponent as TerraformIcon } from "../../../assets/images/terraform.svg";


const Terraform = () => {
  return (
    <Wrapper className="skills__container__item">
      <i className="skills__container__item__icon fa-solid fa-t "></i>
      <p className="skills__container__item__desc">Terraform</p>
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

export default Terraform;
