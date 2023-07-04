import React from 'react';
import styled, { keyframes } from 'styled-components';

const LeftArrowComponent = styled.div`
  position: absolute;
  display: flex;
  height: 5rem;
  width: 8rem;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scaleX(-1);
  left: 0;
`;
const RightArrowComponent = styled.div`
  position: absolute;
  display: flex;
  height: 5rem;
  width: 8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scaleX(1);
  right: 0;
`;

const drawArrow = keyframes`
  0% {
    stroke-dashoffset: 500;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const ArrowSvg = styled.svg`
  width: 120px;
  position: absolute;
  height: 110px;
`;

const ArrowPath = styled.path`
  transform: translate(-30%, 10%);
  fill: none;
  ${({ theme }) => theme.theme.aboutAnimationColor.stroke}
  stroke-width: 2;
  stroke-dasharray: 500;
  stroke-dashoffset: 450;
  animation: ${drawArrow} 5s forwards;
`;

const LeftArrow = () => (
    <LeftArrowComponent>
        <ArrowSvg xmlns="http://www.w3.org/2000/svg">
            <ArrowPath d="M35,20 Q80,5 130,40 L120,18  M131,41 L100,40 M110,50" />
        </ArrowSvg>
    </LeftArrowComponent>
);

const RightArrow = () => (
    <RightArrowComponent>
    <ArrowSvg xmlns="http://www.w3.org/2000/svg">
      <ArrowPath d="M40,50 Q100,80 140,30 L140,55  M113,32 L140,29" />
    </ArrowSvg>
  </RightArrowComponent>
);

export {
  LeftArrow, RightArrow
};