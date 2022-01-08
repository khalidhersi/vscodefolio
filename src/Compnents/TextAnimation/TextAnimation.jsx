import React from 'react';
import styled, { keyframes } from 'styled-components';

const TextAnimation = (word) => {
    return (
        <Wrapper className="landing__header__title__id">
            I'm
        </Wrapper>
    )
}
    const animation = keyframes`
    0& {opacity: 0; transorm: translate(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); }
    50& {opacity: 0.5; transorm: translate(-50px) skewY(5deg) skewX(5deg) rotateZ(15deg); filter: blur(5px); }
    100& {opacity: 1; transorm: translate(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
    `
    const moveInLeft = keyframes`
0% {
opacity: 0;
transform: translateY(-10rem);
}

100% {
opacity: 1;
transform: translate(0);
}`

const Wrapper =  styled.h2`
font-size: 6rem;
text-transform: uppercase;
color: #fff;
font-weight: 300;
letter-spacing: 0.5rem;
animation: ${moveInLeft} 1s ease-in-out .3s both;
`

export default TextAnimation
