import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Typewriter } from 'react-simple-typewriter';
import styled from 'styled-components';


const StyledHeroSection = styled.section `
    flex-direction: column;
    display:flex;
    aligh-items: flex-start;
    background-color: #0D1730;
    color: white;
    min-height: 50vh;
    height:100vh;
    padding: 0;
` 
const StyledHeroCard = styled.div `
    display: flex;
    margin: auto;
    margin-top: 13rem;
    flex-direction: column;
    aligh-items: flex-start;
    height:auto;
    width: 80%;
    color: white;

    h1 {
      margin: 0 0 30px 4px;
      font-family: var(--font-sans);
      font-weight: 800;
      font-size:35px;
      margin-bottom: 5px;
    }
    
    p {
        text-align: left;
        width: 600px;
        font-family: var(--font-nunito);
        margin-bottom: 3rem;
    }
    
    .email-link{
      ${({ theme }) => ( theme.darkMode.smallButton )};
      ${({ theme }) => ( theme.darkMode.contactMe )};
    }

    .check-work{
      ${({ theme }) => ( theme.darkMode.checkWork )};
      ${({ theme }) => ( theme.darkMode.smallButton )};  
    }

`

const Hero = () => {
const [isMounted, setIsMounted] = useState(false);
const [cursorBlink, setBlink] = useState(true);


const one = <h1>Hey there,</h1>
const two = <h1>I'm Henrique Andrade,</h1>
const three = <div id='different-color'><Typewriter words={["Software Developer."]} loop={1} cursor={cursorBlink} /></div>
const four = <p> Lorem Ipsu1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.
    Lorem Ipsu1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book. </p>

const five = (
    <>
      <a className="email-link" href="">Contact me</a>
      <a className="check-work" href="">Check my work</a>
    </>
)

const items = [one, two, three, four, five]

useEffect(() => {
    setTimeout(() =>setIsMounted(true), 1000)
    setTimeout(() =>setBlink(false), 4600)
})

  return (
    <StyledHeroSection>
      <StyledHeroCard>
        <TransitionGroup component={null}>
            {
            isMounted && items.map(( item, i ) => (
            <CSSTransition key={i} classNames="fadeup" timeout={ 2000 }>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>              
            </CSSTransition>
            ))}
        </TransitionGroup>
      </StyledHeroCard>
    </StyledHeroSection>
  )
}

export default Hero