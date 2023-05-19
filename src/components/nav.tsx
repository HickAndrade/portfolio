import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import config, { NavLink } from '@config';
import { Link } from 'gatsby';
import { ToggleMode } from '@components';


const StyledHeader = styled.header`
    ${({ theme }) => theme.flexBetween }
    position:fixed;
    top:0;
    z-index:11;
    width: 100%;
    height: 100px;
    pointer-events: auto !important;
   
`
const StyledNav = styled.nav`
    ${({ theme }) => theme.flexBetween }    
    position:relative;
    z-index:12;
    width: 100%;
    margin: 3rem; 
    font-family: var(--font-sans);
    font-weight: 700;
`
const NavOptions = styled.div`
    display: flex;
    align-items: center;
    margin-right: 3rem;

   ul {
    ${({ theme }) => theme.flexBetween}
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      display: flex;
      margin: 0 17px;
      position: relative;
      font-size: 16px;

      a {
        padding: 5px;
        ${({ theme }) => theme.darkMode.fontColor }
        text-decoration: none;
      }

      &:before {
        margin-top: 1.8rem;
        width: 0%;
        ${({ theme }) => theme.darkMode.nav.effect }
        ${({ theme }) => theme.darkMode.nav.before }
      }

      &:after {
        margin-top: 2.3rem;
        width: 0%;
        ${({ theme }) => theme.darkMode.nav.effect }
        ${({ theme }) => theme.darkMode.nav.after }
      }

      &:hover {
        &:after{ width: 60%; }
        &:before{ width:100%; }
      }
    }
   }
`

const Nav = ({ isHome }: { isHome: boolean }): JSX.Element => {
    const [isMounted, setIsMounted] = useState(!isHome);
    const { navLinks } = config;

useEffect(() => {
    setTimeout(() => setIsMounted(true) , 100)
}, [])


    const logo = (
        <div className='logo'>
        <a href='/'>
            <div className='logo-container'>
                Logo Here
            </div>
        </a>
    </div>
    )

    return (
        <StyledHeader>
            <StyledNav>
               <>{logo}</>
            <NavOptions>
                <ul>
                <TransitionGroup component={null}>
                { isMounted && navLinks && navLinks.map(({name, url}: NavLink, i) => (
                    <CSSTransition key={i} classNames="fadedown" timeout={ 1000 }>
                        <li key={name} style={{ transitionDelay: `${isHome ? i * 100 : 0 }ms` }}>
                            <Link to={url}>{name}</Link>
                        </li>
                    </CSSTransition>
                    ))}
                </TransitionGroup>
                </ul>
                <ToggleMode /> 
            </NavOptions>
            </StyledNav>
        </StyledHeader>
    )
}

export default Nav;