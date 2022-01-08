import React from 'react';
import styled, { keyframes } from 'styled-components';

const TextAnimation = (word) => {
    const textArr = "I'm".split("");
    return (
        <Wrapper className="landing__header__title__id" >
            {textArr.map((word, index) => (
                <span key={index}>{word}</span>
            ))}
        </Wrapper>
    )
}
    const animation = keyframes`
    0& {opacity: 0; transorm: translate(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); }
    50& {opacity: 0.5; transorm: translate(-50px) skewY(5deg) skewX(5deg) rotateZ(15deg); filter: blur(5px); }
    100& {opacity: 1; transorm: translate(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
    `
    const moveInDown = keyframes`
0% {
opacity: 0;
transform: translateY(-10rem);
filter: blur(10px);
skewX(10deg); 
skewY(10deg);
rotateZ(30deg);
}

100% {
opacity: 1;
transform: translate(0);
filter: blur(0px);
skewX(0deg); 
skewY(0deg);
rotateZ(0deg);
}`

const Wrapper =  styled.h2`
    display: inline-block;
    font-size: 6rem;
    text-transform: uppercase;
    color: #fff;
    font-weight: 300;
    letter-spacing: 0.5rem;
    animation: ${moveInDown} 1s ease-in-out .3s both;
    animation-timing-function: cubic-bezier(0.1, 0.8, 1.5);
    span:nth-child(1){
        animation-delay: 0.1s;
    }
    span:nth-child(2){
        animation-delay: 0.8s;
    }
    span:nth-child(3){
        animation-delay: 1.5s;
    }
`

export default TextAnimation
