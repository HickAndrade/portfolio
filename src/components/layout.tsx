import React, { useEffect, useState } from 'react';
import { GlobalStyle }  from '@styles';

import styled from 'styled-components';

import Nav from './nav';

interface LayoutProps {
    children: React.ReactNode;
    location: {
        pathname: string;
      }
  }

const StyledContent = styled.div `
  display: flex;
  flex-direction:column;
  min-height:100vh;
`



const Layout = ({ children, location } : LayoutProps) : JSX.Element => {
const isHome = location.pathname === '/';
const[isLoading, setIsLoading] = useState(isHome);

    return (

        <div id="root">
         <GlobalStyle />
            <StyledContent>
                <div id="content">
                    {children}
                </div>
            </StyledContent>
        </div>
       
    )
}


export default Layout;