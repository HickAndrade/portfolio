import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Icon } from '@icons';
import config from '@config';

const StyledSocial = styled.div `
    position: fixed;
    bottom: 1.3rem;
    z-index:10;
    padding: 0;

    @media screen and (max-width: 1024px){
     right:1rem;
    }
    @media screen and (min-width: 1025px){
     left:1rem;
    }

    @keyframes fadeUpAnimation {
        0% {
            opacity: 0;
            transform: translateY(10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }   
    }

    &:after {
        display:block;
        content: '';
        width: 100%;
        height: 2px;
        opacity:0;
        background-color:white;
        animation: fadeUpAnimation .5s ease-in-out forwards;
        animation-delay: 1s;
    }
    &:before {
        position:absolute;
        content: '';
        width: 60%;
        height: 2px;
        background-color: white;
        top:45px; 
        opacity:0;
        left: 10px;
        animation: fadeUpAnimation 1s ease-in-out forwards;
        animation-delay: 1s;
    }

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        
        padding:0;
        margin:0;
        li {
            margin: 3px;
            
            &:hover{
            transform: scale(1.2);
            }
        }
    }
`;

const Social = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { socialMedia } = config;
    
    useEffect(() => {
        setTimeout(() =>setIsMounted(true), 1000)
    });

    return (
        <StyledSocial>
           <ul>
            <TransitionGroup component={null}>
              {isMounted && socialMedia.map(({ name, url, icon }, i) => (
                <CSSTransition classNames='fade' timeout={300} key={name}>
                <li>
                    <a href={url} target='_blank' rel='noreferrer'>
                        <Icon name={icon} />
                    </a>
                </li>
                </CSSTransition>
              ))}
              </TransitionGroup>
            </ul>
            
        </StyledSocial>
    )
};


export default Social;