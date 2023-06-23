import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { PlateInfo } from "@components";

const StyledSkillsSection = styled.section`
${({theme}) => theme.theme.primaryColor}
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

`

const BodySkills = styled.div `


`;




const Skills = () => {
    return (
        <StyledSkillsSection  id='skills'>
            <PlateInfo info='My Skills' />


        </StyledSkillsSection>
    )
}

export default Skills;