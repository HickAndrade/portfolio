import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';


const StyledHeroSection = styled.section `
    flex-direction: column;
    aligh-items: flex-start;
    background-image: linear-gradient(to bottom, #f1f1f1, #ffffff);
    color: white;
    min-height: 50vh;
    height:100vh;
    padding: 0;
` 
const StyledHeroCard = styled.div `
    display: flex;
    margin: auto;
    flex-direction: column;
    aligh-items: flex-start;
    background-color:#1F3545;
    height:20rem;
    width: 80%;
    color: white;

    div {
        display:flex;
        text-align: center;

        
        p {
            text-align: left;
        }
    }
`

const Hero = () => {
const [isMounted, setIsMounted] = useState(false);

const one = <h1>Hi,</h1>
const two = <h1>I'm Henrique Andrade,</h1>
const three = <h1>Web Developer</h1>
const four = <p> Lorem Ipsu1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book. </p>

const five = (
    <>
      <a href="">Contact me</a>
      <a href="">Check my work</a>
    </>
)

const items = [one, two, three, four, five]

useEffect(() => {
    setTimeout(() =>setIsMounted(true), 1000)
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