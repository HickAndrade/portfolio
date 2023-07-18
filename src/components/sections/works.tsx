import React from "react";
import styled from "styled-components";
import { PlateInfo } from "@components";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Icon } from "@icons";


const StyledWorksSection = styled.section`
  ${({ theme }) => theme.theme.thirdColor}
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardList = styled.ul `
    padding:5px;
    list-style:none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    margin: 0px 300px 0px 300px;

    li {
        margin: 10px;
    }
`


const Card = styled.div `
   ${({ theme }) => theme.theme.cardWorksColor};
   ${({ theme }) => theme.theme.fontColor};
    display:grid;
    grid-template-columns: 140px 1fr;
    grid-template-rows: minmax(100px, auto) auto;
    font-family: var( --font-nunito);
    font-size: 14px;
    border-radius: 5px;
    overflow: hidden;
    transition: all 300ms;
    position: relative;
    min-height: 170px;
    

    .project-image{
      align-self: start;
      top:40px;
      left:8px;
      overflow:hidden;
      border-radius: 5px;
      border:1px solid gray;
      width: 120px;
      position:relative;
      background-color:blue;
      
    }

    .project-info{
      position:relative;
   
     
      .tech-list{
        list-style: none;
        display:flex;
        margin:0;
        padding:0;
        flex-wrap:wrap;
        li{
          
          border-radius:2px;
          font-size:11px;
        }
      }
    }

    .project-title a{
      text-decoration: none;
      ${({ theme }) => theme.theme.fontColor};
      &::before{
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
    

    .project-links{
      text-align:center;
      
      padding:3px;
      position: absolute;
      bottom: 1rem;
      
      width:133px;
      a{
        margin:5px;
      }
    }

    &:hover{
      transform: translateY(-10px);

      .project-image{
        border:1px solid white;
        transition: all 400ms;
      }
    }
`

const MyWorks = () => {
  const data = useStaticQuery(graphql`
    query {
      works: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        sort: { frontmatter: { date: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 120, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              github
              external
              tech
            }
            html
          }
        }
      }
    }
  `);
  const worksData = data.works.edges;

  return (
    <StyledWorksSection id="works">
      <PlateInfo info="My Works" />
      
        <CardList>
        {worksData.map(({ node }: any) => {
          const { frontmatter, html } = node;
          const { title, github, external, tech, cover }  = frontmatter;
          const image:any = getImage(cover);
          return (
            <li>
              <Card>
                <div className="project-image">
                <a href={external ? external : github} target="_blank" rel="nofollow noopener noreferrer">
                   <GatsbyImage image={image} alt={title} />
                  </a>
                </div>
                
                <div className="project-info">
                  <h3 className="project-title">
                    <a href={external} target="_blank" rel="nofollow noopener noreferrer">{title}</a>
                  </h3>
                  <div dangerouslySetInnerHTML={{__html: html}}/>
                  {tech.length && (
                    <ul className="tech-list">
                      {tech.map((name: any) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  )}

                </div>

                <div className="project-links">
                  {
                    github && (
                      <a href={github} target="_blank" rel="nofollow noopener noreferrer">
                        <Icon name="IconGitHub" />
                      </a>
                    )
                  }
                  {
                    external && (
                      <a href={external} target="_blank" rel="nofollow noopener noreferrer">
                        <Icon name="IconLink" />
                      </a>
                    )
                  }
                </div>
                
              </Card>
            </li>
          );
        })}
        </CardList>
      
    </StyledWorksSection>
  );
};

export default MyWorks;
