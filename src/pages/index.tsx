import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from 'styled-components';
import { Hero, About, Layout } from "@components";


const STyledMainContainer = styled.main `
 counter-reset: section;
`


const IndexPage = ({ location }: PageProps): JSX.Element => (
  <Layout location={ location }>
    <STyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <div style={{width: '100%', height: '100vh'}}>

      </div>
    </STyledMainContainer>
  </Layout>
)

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>
