import { LeftArrow, DarkLogo, RightArrow, LightLogo, IconGithub, IconLinkedin } from '@icons';
import styled from 'styled-components';
import React from 'react';


export const IconColor = styled.path ` ${({ theme })=> theme.theme.iconColor}; `;

const Icon = ({name}: {name: string}) => {
    switch (name){
        case 'LeftArrow':
            return <LeftArrow />;
        case 'RightArrow':
            return <RightArrow />;
        case 'DarkLogo':
            return <DarkLogo />;
        case 'LightLogo':
            return <LightLogo />;
        case 'IconGitHub':
            return <IconGithub />;
        case 'IconLinkedin':
            return <IconLinkedin />;
        default:
            return <LightLogo />;
    }

}


export default Icon;
