import React, { useEffect, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import config from "@config";
import { Icon } from "@icons";
import sr from "@utils/sr";
import { PlateInfo } from "@components";

interface JobData {
  title: string;
  desc: string;
  icon: string;
  config: {
    right: string;
    margin: string;
  };
}

const StyledAboutSection = styled.section`
  ${({ theme }) => theme.theme.secondColor}
  height: 78rem;

  @media screen and (max-width: 930px) {
    height: 100rem;
  }
  @media screen and (max-width: 800px) {
    height: 100rem;
  }
  @media screen and (max-width: 712px) {
    height: 100rem;
  }
  @media screen and (max-width: 572px) {
    height: 100rem;
  }
  @media screen and (max-width: 428px) {
    height: 120rem;
  }
  @media screen and (max-width: 361px) {
    height: 120rem;
  }
`;

const ImageBall = styled.div`
  position: relative;
  height: 4.5rem;
  width: 4.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
`;

const WrapConnector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    ${({ theme }) => theme.theme.aboutAnimationColor.color}
  }
  span {
    position: relative;
    ${({ theme }) => theme.theme.aboutAnimationColor.color}
    width: 4px;
    margin: 0 2.5rem;
  }
`;

const AboutInfo = styled.div`
  position: relative;
  width: 22rem;
  justify-content: center;
  flex-direction: row;

  #message {
    ${({ theme }) => theme.theme.aboutMessages}
  }
`;

const Message = styled.div`
  position: absolute;
  width: 22rem;
  text-align: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;

  h2 {
    width: 90%;
    font-family: var(--font-sans);
    font-size: 17px;
    position: relative;
    margin-bottom: 5px;
  }

  p {
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
  ${({ theme }) => theme.theme.fontColor}
  padding-top:1rem;
  align-items: center;
  text-align: center;
  font-family: var(--font-sans);

  #aboutme {
    width: 70%;
  }

  p {
    width: 95%;
    &:nth-child(2) {
      margin-bottom: 3rem;
    }
  }

  #continue {
    margin-top: 10rem;
    position: relative;
  }

  @media screen and (max-width: 930px) {
    ${ImageBall} {
      position: absolute;
      display: none;
    }
    ${Message} {
      position: relative;
      margin-bottom: 3rem;
    }
    ${WrapConnector} {
      span {
        position: absolute;
        display: none;
      }
    }
    #continue {
      position: relative;
      font-size: 16px;
      margin-top: -2rem;
    }
  }
`;
const initialValue = {
  firstRef: false,
  secondRef: false,
  thirdRef: false,
  fourRef: false,
  fiveRef: false,
};
const initialState = {
  showLoadingBar: initialValue,
  showInfoArrow: initialValue,
};

type InicialType = typeof initialValue;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { frontmatter: { date: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              desc
              icon
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
    const { title, desc, config, icon } = node.frontmatter;
    return { title, desc, config, icon };
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

    const mediaQuery = window.matchMedia("(max-width: 930px)");
    setMediaConfig(mediaQuery.matches);

    mediaQuery.addEventListener("change", () =>
      setMediaConfig(mediaQuery.matches)
    );

    const handleScroll = () => {
      let { scrollY, innerHeight } = window;
      let documentHeight = document.documentElement.scrollHeight;
      let scrollPercentage = (scrollY / (documentHeight - innerHeight)) * 100;

      const infoDistances = [28, 34, 40, 46, 52];

      infoDistances.forEach((infoDistance, index) => {
        setScrollStatus((prevState) => ({
          ...prevState,
          showInfoArrow: {
            ...prevState.showInfoArrow,
            [loadkeys[index]]: scrollPercentage > infoDistance,
          },
          showLoadingBar: {
            ...prevState.showLoadingBar,
            [loadkeys[index]]: scrollPercentage > infoDistance + 3,
          },
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
        <PlateInfo info="Sobre mim" />

        <p id="aboutme">
        Olá, meu nome é Henrique Andrade!

Desenvolvedor front-end atuando há mais de 4 anos. Tenho experiência na construção de aplicações Web com React e algumas tecnologias como Next.js, Gatsby.js, Docker, Redux/React Hooks, GraphQL, Figma, CSS-in-JS, Tailwind e Rest APIs,
 Sempre com foco em padrões que envolvem uma boa Arquitetura de software. 
          Participei de algumas fases do ciclo de vida de software com fluxos de versionamento e 
          implementação de funcionalidades, 
          desenvolvendo e aprendendo com novas ferramentas, 
          o que me permitiu destacar soluções e funcionalidades bem desenvolvidas.
          <br />Sou apaixonado por construir interfaces elegantes e fáceis de usar, sempre me adaptando as mudanças e evoluindo constantemente como desenvolvedor.
        </p>
        {jobsData.map(({ title, desc, icon, config }: JobData, i: number) => {
          const loadingBar = scrollStatus.showLoadingBar[loadkeys[i]];
          const infoArrow = scrollStatus.showInfoArrow[loadkeys[i]];
          const arrowDecision = i % 2 === 0;
          const { margin, right } = config;

          return (
            <AboutInfo key={title}>
              <CSSTransition in={infoArrow} timeout={500} classNames="arrow" unmountOnExit>
                {!mediaConfig ? ( arrowDecision ? (
                    <Icon name="LeftArrow" />
                  ) : (
                    <Icon name="RightArrow" />
                  )
                ) : (
                  <></>
                )}
              </CSSTransition>
              <CSSTransition in={infoArrow} timeout={500} classNames="fade">
                <Message
                  id="message"
                  style={{
                    opacity: !infoArrow ? "0" : "1",
                    transition: "opacity 400ms",
                    margin: !mediaConfig && margin ? margin : "",
                    right: !mediaConfig && right ? right : "",
                  }}
                >
                  <h2>{title}</h2>
                  <span />
                  <p>{desc}</p>
                </Message>
              </CSSTransition>
              <WrapConnector>
                <CSSTransition in={infoArrow} timeout={500} classNames="fade">
                  <ImageBall
                    style={{
                      opacity: !infoArrow ? "0" : "1",
                      transition: "opacity 400ms",
                    }}
                  >
                    <Icon name={icon} />
                  </ImageBall>
                </CSSTransition>
                <CSSTransition
                  in={loadingBar}
                  timeout={500}
                  classNames="loading"
                  unmountOnExit
                >
                  <span />
                </CSSTransition>
              </WrapConnector>
            </AboutInfo>
          );
        })}

        <CSSTransition
          in={scrollStatus.showLoadingBar.fiveRef}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <h2 id="continue">To be continue...</h2>
        </CSSTransition>
      </BodySection>
    </StyledAboutSection>
  );
};

export default About;
