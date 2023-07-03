import { 
    LeftArrow,
    DarkLogo,
    RightArrow,
    LightLogo,
    IconGithub,
    IconLinkedin,
    IconBaby,
    IconSuitCase,
    IconGraduation
} from '@icons';
import styled from 'styled-components';
import React from 'react';


export const IconColor = styled.path ` ${({ theme })=> theme.theme.iconColor}; `;
export const AboutIconColor = styled.path ` ${({ theme })=> theme.theme.aboutIconColor}; `;

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
        case 'IconBaby':
            return <IconBaby />;
        case 'IconSuitCase':
            return <IconSuitCase />;
        case 'IconGraduation':
            return <IconGraduation />;
        default:
            return <LightLogo />;
    }

}


export default Icon;
