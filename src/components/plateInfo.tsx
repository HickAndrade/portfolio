import React from 'react';
import styled from 'styled-components';

const Plate = styled.div`
    position: relative;
    background-color: var(--six-blue);
    margin: 2rem auto;
    border-radius: 20px 20px 0px 0px;
    width: auto;
    padding 5px 21px;
    text-align: center;
    font-family: var(--font-sans);
    color: white;
    &::after {
        position: absolute;
        content: "";
        right: 0;
        left:0;
        bottom:0;
        ${({theme}) => theme.theme.aboutAnimationColor.color}
        height: 3px;
    }
    h1{
        font-size: 22px;
        height: 2rem;
        margin:0;
    }
`;

interface PlateProps {
    info: string;
}

const PlateInfo = ({info}: PlateProps) => (
    <Plate><h1>{info}</h1></Plate>
);

export default PlateInfo;