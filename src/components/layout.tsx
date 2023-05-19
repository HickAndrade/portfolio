import React, { useState } from 'react';
import { GlobalStyle, mixins }  from '@styles';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Nav } from '@components';


interface LayoutProps {
    children: React.ReactNode;
    location: {
        pathname: string;
        hash: string;
      }
  }

const StyledContent = styled.div `
  display: flex;
  flex-direction:column;
  min-height:100vh;
`

const Layout = ({ children, location } : LayoutProps) : JSX.Element => {
const isHome = location.pathname === '/';
const[isLoading, setIsLoading] = useState(false);


    return (

        <div id="root">
        <ThemeProvider theme={mixins}>
            <GlobalStyle />
                <StyledContent>
                    <Nav isHome={isHome} />
                    <div id="content">
                        {children}
                    </div>
                </StyledContent>
        </ThemeProvider>
        </div>
       
    )
}


export default Layout;