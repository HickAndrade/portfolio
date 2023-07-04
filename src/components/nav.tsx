import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import config, { NavLink } from "@config";
import { Link } from "gatsby";
import { Icon } from "@icons";

const StyledHeader = styled.header`
  ${({ theme }) => theme.flexBetween}
  position:fixed;
  top: 0;
  z-index: 11;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.2); 
  width: 100%;
  height: 70px;
  pointer-events: auto !important;
  transition: transform 0.3s ease;
  &.get-nav{
    transition: transform 0.3s ease;
    transform: translateY(-100px);
  }
`;
const BurguerMenu = styled.span`
  display: none;
  right: 3.5rem;
  width: 30px;
  height: 25px;
  cursor: pointer;
  margin: autor;

  ${({ theme }) => theme.nav.burguerEffect}

  i {
    background-color: #fff;
    border-radius: 2px;
    content: "";
    display: block;
    width: 100%;
    height: 4px;
  }

  i:nth-child(1) {
    animation: outT 0.8s backwards;
    animation-direction: reverse;
  }

  i:nth-child(2) {
    margin: 5px 0;
    animation: outM 0.8s backwards;
    animation-direction: reverse;
  }

  i:nth-child(3) {
    animation: outBtm 0.8s backwards;
    animation-direction: reverse;
  }

  &.active {
    i:nth-child(1) {
      animation: inT 0.8s forwards;
    }

    i:nth-child(2) {
      animation: inM 0.8s forwards;
    }

    i:nth-child(3) {
      animation: inBtm 0.8s forwards;
    }
  }
`;

const NavOptions = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  margin-top:-4px;
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
        ${({ theme }) => theme.theme.fontColor}
        text-decoration: none;
      }

      &:before {
        margin-top: 1.8rem;
        width: 0%;
        ${({ theme }) => theme.nav.effect}
        ${({ theme }) => theme.theme.nav.before}
      }

      &:after {
        margin-top: 2.3rem;
        width: 0%;
        ${({ theme }) => theme.nav.effect}
        ${({ theme }) => theme.theme.nav.after}
      }

      &:hover {
        &:after {
          width: 60%;
        }
        &:before {
          width: 100%;
        }
      }
    }
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.flexBetween}
  position:relative;
  z-index: 12;
  width: 100%;
  margin: 4rem;
  font-family: var(--font-sans);
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    ${BurguerMenu} {
      position: fixed;
      display: block;
    }
    ${NavOptions} {
      margin-right: -2.9rem;
      margin-top: 13rem;
      ${({ theme }) => theme.theme.nav.sideColor}
      border-radius: 5px;

      &:before {
        content: "";
        position: absolute;
        margin-left: 1.9rem;
        margin-top: -9rem;
        border-top: 0px solid transparent;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        ${({theme}) => theme.theme.nav.arrowColor}
      }
      ul {
        flex-direction: column;
        padding-bottom: 8px;
        li {
          &:hover::after {
            width: 0%;
          }
          &:hover::before {
            ${({theme}) => theme.theme.nav.after}
          }

          a {
            ${({theme}) => theme.theme.nav.font}
          }
        }
      }
    }
  }
`;

interface NavProps { 
  isHome: boolean;
  logotype: boolean;
  backOff: boolean;
}

const Nav = ({ isHome, logotype, backOff }: NavProps): JSX.Element => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const [triggerMenu, setTriggerMenu] = useState(true);
  

  const { navLinks } = config;



  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
   
    mediaQuery.addEventListener("change", (e) => { e.matches == true? setTriggerMenu(false):setTriggerMenu(true) });
    setTriggerMenu(!mediaQuery.matches);

    setTimeout(() => setIsMounted(true), 100);
  
  }, []);


 

  const logo = (
    <div className="logo">
      <div className="logo-container">
        <a href="/">
          {logotype ? <Icon name="DarkLogo" /> : <Icon name="LightLogo" /> }
        </a>
      </div>
    </div>
  );

  return (
    <StyledHeader style={{ transform: backOff? 'translateY(0px)': 'translateY(-100px)' }}>
      <StyledNav>
        <>{logo}</>
        <CSSTransition in={backOff && triggerMenu} unmountOnExit classNames={'fastfade'} timeout={300}>
          <NavOptions>
            <ul>
              <TransitionGroup component={null}>
                {isMounted &&
                  navLinks &&
                  navLinks.map(({ name, url }: NavLink, i) => (
                    <CSSTransition key={i} classNames="fadedown" timeout={1000}>
                      <li
                        key={name}
                        style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
                      >
                        <Link to={url}>{name}</Link>
                      </li>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </ul>
          </NavOptions>
        </CSSTransition>
        <BurguerMenu
          onClick={() => setTriggerMenu(!triggerMenu)}
          className={triggerMenu ? "active" : ""}
        >
          <i />
          <i />
          <i />
        </BurguerMenu>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
