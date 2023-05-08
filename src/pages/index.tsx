import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from 'styled-components';

import Hero from "../components/sections/hero";
import Layout from "../components/layout";

const STyledMainContainer = styled.main `
 counter-reset: section;
`


const IndexPage = ({ location }: PageProps): JSX.Element => (
  <Layout location={ location }>
    <STyledMainContainer className="fillHeight">
      <Hero />

    </STyledMainContainer>
  </Layout>
)

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>
