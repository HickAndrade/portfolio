import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { PlateInfo } from "@components";

const StyledWorksSection = styled.section`
${({theme}) => theme.theme.primaryColor}
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

`

const BodyWorks = styled.div `
background-color:yellow;
width:80%;
display:flex;
height: 5rem;
`;




const MyWorks = () => {
    return (
        <StyledWorksSection  id='works'>
            <PlateInfo info='My Works' />

            <BodyWorks>

            </BodyWorks>

        </StyledWorksSection>
    )
}

export default MyWorks;