import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Typewriter } from 'react-simple-typewriter';
import styled from 'styled-components';
import  config  from '@config';

const StyledHeroSection = styled.section `
    ${({ theme }) => theme.theme.primaryColor };
    flex-direction: column;
    display:flex;
    aligh-items: flex-start;
    min-height: 50vh;
    height:100vh;
    padding: 0;
` 
const StyledHeroCard = styled.div `
    display: flex;
    margin: auto;
    margin-top: 14rem;
    flex-direction: column;
    aligh-items: flex-start;
    height:auto;
    width: 80%;
    ${({ theme }) => theme.theme.fontColor };

    h1 {
      margin: 0 0 30px 4px;
      font-family: var(--font-sans);
      font-weight: 800;
      font-size:35px;
      margin-bottom: 5px;
    }
    
    p {
        text-align: left;
        width: 60%;
        font-family: var(--font-nunito);
        margin-bottom: 3rem;
    }
    
    .email-link{
      ${({ theme }) => ( theme.smallButton )};
      ${({ theme }) => ( theme.theme.contactMe )};
    }

    .check-work{
      ${({ theme }) => ( theme.smallButton )};  
      ${({ theme }) => ( theme.theme.checkWork )};
    }

    #different-color{
      display: flex;
      ${({ theme }) => theme.theme.differentColor };
      font-family: var(--font-sans);
      font-size:35px;
      font-weight: 800;
      width: 25rem;
    }

    @media screen and (max-width: 1200px) {
      p{
        width: 70%;
      }
 
      @media screen and (max-width: 768px) {
        h1{
          font-size: 27px;
        }
        p{
          width: 100%;
        }
        #different-color{
          font-size:27px;
          width: 20rem;
        }
  

      }

    }
`

const Hero = () => {
const [isMounted, setIsMounted] = useState(false);
const [cursorBlink, setBlink] = useState(true);
const { email } = config;


const two = <h1>Henrique Andrade,</h1>
const three = <div id='different-color'><Typewriter words={["Software Developer."]} loop={1} cursor={cursorBlink} /></div>
const four = <p> desenvolvedor de software especializado na criação de soluções e aplicações web escaláveis ​​utilizando as melhores práticas em arquitetura de software. Atualmente como freelancer em projetos paralelos.</p>

const five = (
    <>
      <a className="email-link" href={`mailto:${email}`}>Contato</a>
      <a className="check-work" href="#works">Meus trabalhos</a>
    </>
)

const items = [two, three, four, five]

useEffect(() => {
    setTimeout(() =>setIsMounted(true), 1000)
    setTimeout(() => setBlink(false), 4600)
    
}, [])

  return (
    <StyledHeroSection>
      <StyledHeroCard>
        <TransitionGroup component={null}>
            {
            isMounted && items.map(( item, i ) => (
            <CSSTransition key={i} classNames="fadeup" timeout={ 2000 }>
              <div style={{transitionDelay: cursorBlink == false? '0s':`${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
            ))}
        </TransitionGroup>
      </StyledHeroCard>
    </StyledHeroSection>
  )
}

export default Hero