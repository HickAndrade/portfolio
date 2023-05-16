import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import config, { NavLink } from '@config';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:fixed;
    top:0;
    z-index:11;
    width: 100%;
    height: 100px;
    background-color:black;
    pointer-events: auto !important;
   
`
const StyledNav = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items:center;
    position:relative;
    z-index:12;
    width: 100%;
    margin: 3rem;
    background-color: white;
    font-family: var(--font-sans);
    font-weight: 700;
`

const StyledLinks = styled.div`
    display: flex;
    aligh-items: center;
    margin-right: 5rem;
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;
        li {
            margin: 0 15px;
            position: relative;
            font-size: 16.5px;
            a {
                padding: 5px;
                background-color: red;
            }
        }
    }
`

const Nav = ({ isHome }: { isHome: boolean }): JSX.Element => {
    const [isMounted, setIsMounted] = useState(isHome);
    const { navLinks } = config;
    return (
        <StyledHeader>
            <StyledNav>
                <div className='logo'>
                    <a href='/'>
                        <div className='logo-container'>
                            Logo Here
                        </div>
                    </a>
                </div>

            <StyledLinks>
                <ul>
                    <li> <a>About</a> </li>
                    <li> <a>Skills</a> </li>
                    <li> <a>Projects</a> </li>
                    <li> <a>Contact</a> </li>
                </ul>
            </StyledLinks>
            </StyledNav>
        </StyledHeader>
    )
}

export default Nav;