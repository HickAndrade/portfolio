import React, { useEffect, useRef, useState } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import config from "@config";
import { LeftArrow, RightArrow } from "@icons";
import sr from "@utils/sr";
import { PlateInfo } from "@components";


interface JobData {
  title: string;
  desc: string;
  config: {
    right: string;
    margin: string;
  };
}

const StyledAboutSection = styled.section`
 ${({theme}) => theme.theme.secondColor}
  
`;


const ImageBall = styled.div`
  position: relative;
  height: 4.5rem;
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  ${({theme}) => theme.theme.aboutAnimationColor.color}
`;

const WrapConnector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  
  span {
    position: relative;
    ${({theme}) => theme.theme.aboutAnimationColor.color}
    height: 4rem;
    width: 4px;
    margin: 0 2.5rem;
  }
`;

const AboutInfo = styled.div`
  position: relative;
  width: 20rem;
  justify-content: center;
  flex-direction: row;

`;

const Message = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  align-items: center;
  border-radius: 5px;
 
  border: 2px solid #151823;
  box-shadow: 0px 0px 2px .3px #08090a;
  background-color: #151823;
  color: white;

  display: flex;
  flex-direction: column;
  h2 {
    font-family: var(--font-sans);
    font-size: 17px;
    position: relative;
    margin-bottom: 5px;
  }

  p {
    width: 100%;
    font-family: var(--font-nunito);
    font-size: 14px;
    position: relative;
    margin-bottom: 4px;
  }

  span {
    height: 3.5px;
    width: 50%;
    background-color: blue;
    border-radius: 7px;
  }
`;

const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  ${({theme}) => theme.theme.fontColor}
  padding-top:1rem;
  align-items: center;
  height: 100rem;
  text-align: center;
  font-family: var(--font-sans);
  p {
    width: 60%;
    &:nth-child(2) {
      margin-bottom: 3rem;
    }
  }
 
  #continue{
    position: absolute;
    margin-top: 70rem;
  }


  @media screen and (max-width: 768px) {
    ${ImageBall} {
      position:absolute;
      display: none;
    }
    ${Message}{
      position: relative;
      margin-bottom: 3rem;
    }
    ${WrapConnector}{   
      span{
        position:absolute;
        display:none;
      }
    }
    #continue{
      position: relative;
      margin-top: 4rem;
    }
  }

`;
const initialValue = {
  firstRef: false,
  secondRef: false,
  thirdRef: false,
  fourRef: false,
  fiveRef: false,
}
const initialState = {
  showLoadingBar: initialValue,
  showInfoArrow: initialValue
}

type InicialType = typeof initialValue;

const About = () => {
  const data = useStaticQuery(graphql `
      query {
        jobs: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/jobs/" }}
        sort: {frontmatter: {date: ASC }}
        ) {
          edges {
            node {
              frontmatter {
                title
                desc
                config {
                  right
                  margin
                }
              }
            }
          }
        }
      }

  `);

  const jobsData = data.jobs.edges.map(({ node }: any) => {
    const { title, desc, config } = node.frontmatter;
    return { title, desc, config }
  });

  const revealContainer = useRef<HTMLDivElement | null>(null);
  const [scrollStatus, setScrollStatus] = useState(initialState);
  const loadkeys = Object.keys(initialValue) as Array<keyof InicialType>;
  const [mediaConfig, setMediaConfig] = useState(false);
  const { srConfig } = config;

  useEffect(() => {
    if (revealContainer.current !== null) {
      sr?.reveal(revealContainer.current, srConfig());
    }

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setMediaConfig(mediaQuery.matches);

    mediaQuery.addEventListener("change", () => setMediaConfig(mediaQuery.matches));
    

    const handleScroll = () => {
      let { scrollY, innerHeight } = window
      let documentHeight = document.documentElement.scrollHeight;
      let scrollPercentage = (scrollY / (documentHeight - innerHeight)) * 100;
     
      const infoDistances = [28, 34, 40, 46, 52];
    
        infoDistances.forEach((infoDistance, index) => {
        setScrollStatus(prevState => ({
          ...prevState,
          showInfoArrow: {
            ...prevState.showInfoArrow,
            [loadkeys[index]]: scrollPercentage > infoDistance
          },
          showLoadingBar: {
            ...prevState.showLoadingBar,
            [loadkeys[index]]: scrollPercentage > infoDistance + 3
          }
        }));
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
        <PlateInfo info="About Me" />
          
        <p>
          My name is Henrique and I'm creating things that live on the Internet.
          During the development of my career, I have been involved in different parts of the lifecycle
          of a software development and deployment, being able to highlight which
          the best ways to guarantee something well developed, always investing in "why not?". 
        <br />
          I participated in companies with reduced infrastructure, having to deal with several aspects of a project
          and today I am satisfied with the result of this process.
          This is my timeline of experiences I've enjoyed over time where I've worked on my professional profile.
        </p>
      
        {jobsData.map(({ title, desc, config }: JobData, i: number) => {
          const loadingBar = scrollStatus.showLoadingBar[loadkeys[i]];
          const infoArrow = scrollStatus.showInfoArrow[loadkeys[i]];
          const arrowDecision = (i) % 2 === 0;
 
        return(
          <AboutInfo key={title}>
          <CSSTransition in={infoArrow} timeout={500} classNames="arrow" unmountOnExit>
          {!mediaConfig ? (arrowDecision ? (<LeftArrow />) : (<RightArrow />)) : <></> }

          </CSSTransition>
          <CSSTransition in={infoArrow} timeout={500} classNames="fade" unmountOnExit>
            <Message style={!mediaConfig ? config: {}}>
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
       <CSSTransition in={scrollStatus.showLoadingBar.fiveRef} timeout={500} classNames="fade" unmountOnExit>
        <h2 id="continue">To be continue...</h2> 
       </CSSTransition>
      </BodySection> 
    </StyledAboutSection>
  );
};

export default About;