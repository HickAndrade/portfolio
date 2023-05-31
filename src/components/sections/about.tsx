import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { CSSTransition } from "react-transition-group";
import config, { SrConfig } from "@config";

import { LeftArrow, RightArrow } from "@icons";
import sr from "@utils/sr";

const StyledAboutSection = styled.section`
  background-color: var(--fst-blue);
  height: 140vh;
`;

const PlateInfo = styled.div`
    position: relative;
    background-color: var(--six-blue);
    margin: 2rem auto;
    border-radius: 20px 20px 0px 0px;
    width: auto;
    padding 5px 21px;
    text-align: center;
    font-family: var(--font-sans);
    color: white;
    &::after {
        position: absolute;
        content: "";
        right: 0;
        left:0;
        bottom:0;
        background-color: white;
        height: 3px;
    }
    h1{
        
        font-size: 22px;
        height: 2rem;
        margin:0;
    }
`;

const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: var(--font-sans);
  p {
    width: 50%;
  }
`;

const ImageBall = styled.div`
  position: relative;
  height: 5rem;
  width: 5rem;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  background-color: white;
`;
const WrapConnector = styled.div`
  display: flex;
  flex-direction: column;
  background-color: none;
  align-items: center;
  /*background-color: gray; */

  span {
    position: relative;
    background-color: white;
    height: 4rem;
    width: 4px;
    margin: 0 2.5rem;
  }
`;

const AboutInfo = styled.div`
  position: relative;
  display: flex;
  width: 20rem;
  justify-content: center;
  flex-direction: row;
  /*background-color: yellow;*/
  h2 {
    position: absolute;
  }
`;

const Message = styled.div`
  position: absolute;
  height: auto;
  width: 100%;
  text-align: center;
  align-items: center;
  /*background-color: gray;*/
  color: white;
  display: flex;
  flex-direction: column;
  h2 {
    font-family: var(--font-sans);
    font-size: 18px;
    position: relative;
    margin-bottom: 2px;
  }

  p {
    width: 100%;
    font-family: var(--font-nunito);
    font-size: 15px;
    position: relative;
    margin-bottom: 1px;
  }

  span {
    height: 3.5px;
    width: 50%;
    background-color: blue;
    border-radius: 7px;
  }
`;

const initialState = {
  firstRef: false,
  secondRef: false,
  thirdRef: false,
  fourRef: false
}
type InicialType = typeof initialState;

const About = () => {
  const revealContainer = useRef<HTMLDivElement | null>(null);
  
  const [showLoadingBar, setShowLoadingBar] = useState(initialState);
  const [showInfoArrow, setShowInfoArrow] = useState(initialState);

  const loadkeys = Object.keys(initialState) as Array<keyof InicialType>;
  
  const { srConfig } = config;

  useEffect(() => {
    if (revealContainer.current !== null) {
      sr?.reveal(revealContainer.current, srConfig());
    }

    const handleScroll = () => {
      const { scrollY, innerHeight } = window
      const documentHeight = document.documentElement.scrollHeight;
      const thresholds = [28, 35 , 42, 49];

      const scrollPercentage = (scrollY / (documentHeight - innerHeight)) * 100;

      thresholds.forEach((threshold, index) => {
        const loadingBarKey = loadkeys[index];
        const infoArrowKey = loadkeys[index];
        
        setShowLoadingBar(prev => ({ ...prev, [loadingBarKey]: scrollPercentage > threshold }));
        setShowInfoArrow(prev => ({ ...prev, [infoArrowKey]: scrollPercentage > threshold }));
      });

      
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledAboutSection id="about">
      <BodySection ref={revealContainer}>
        <PlateInfo>
          <h1>About Me</h1>
        </PlateInfo>

        <p>
          My name is Henrique and i creating things that live on Internet. This
          is my lifetime of experiences that enjoy for along time Where I've
          Worked my professional profile
        </p>


        {[
          {title: '2000 - Where it started', 
           desc: 'Born in São Paulo, Brasil.',
           config: { right: "100%", margin: "3rem -6rem" },
          },
          {title: '2020 - FIAP College', 
          desc: 'Completed the technologist course in System analysis and development at FIAP.',
          config: { right:'-70%', margin: '-7rem 0rem' },
         },
         {title: '2021/2022 - Palmont Montagem Industrial', 
          desc: 'Born in São Paulo, Brasil.',
          config: { right: "100%", margin: "3rem -6rem" },
         },
         {title: '2000 - Where it started', 
         desc: 'Born in São Paulo, Brasil.',
         config: { right:'-70%', margin: '-7rem 0rem' }
        },
        ].map(({ title, desc, config }, i) => {
          const loadingBar = showLoadingBar[loadkeys[i]];
          const infoArrow = showInfoArrow[loadkeys[i]];
          const arrowDecision = (i) % 2 === 0;
          
          
        return(
          <AboutInfo key={title}>
          <CSSTransition in={infoArrow} timeout={500} classNames="arrow" unmountOnExit>
            {arrowDecision ? (<LeftArrow />) : (<RightArrow />)}
          </CSSTransition>
          <CSSTransition in={infoArrow} timeout={500} classNames="fade" unmountOnExit>
            <Message style={config}>
              <h2>{title}</h2>
              <span />
              <p>{desc}</p>
            </Message>
          </CSSTransition>
          <WrapConnector>
          <CSSTransition in={infoArrow} timeout={500} classNames="fade" unmountOnExit>
            <ImageBall />
            </CSSTransition>
            <CSSTransition in={loadingBar} timeout={500} classNames="loading" unmountOnExit>
              <span />
            </CSSTransition>
          </WrapConnector>
        </AboutInfo>
        )}
      )}

      </BodySection> 
    </StyledAboutSection>
  );
};

export default About;
