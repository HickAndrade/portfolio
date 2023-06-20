import React, { useState, createContext, useEffect } from "react";
import { GlobalStyle, mixins, themeStyle } from "@styles";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Nav, ToggleMode } from "@components";

interface LayoutProps {
  children: React.ReactNode;
  location: {
    pathname: string;
    hash: string;
  };
}

export const ThemeContext = createContext(null);

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


const Layout = ({ children, location }: LayoutProps): JSX.Element => {
  const isHome = location.pathname === "/";
  const [logoChange, setLogoChange] = useState(false);
  const [themeChange, setThemeChange] = useState({ ...mixins, theme: themeStyle.darkMode});

  const switchMode = (e: boolean) => {
    setLogoChange(e);
    if(e == true) {
      setThemeChange(prevstate => ({...prevstate, theme: themeStyle.lightMode }));
    }else {
      setThemeChange(prevstate => ({...prevstate, theme: themeStyle.darkMode }));
    }
  };

  useEffect(()=> {

    

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          console.log(el);
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  },[]);

  return (
    <div id="root">
      <GlobalStyle />
      <ThemeProvider theme={themeChange}>
        <StyledContent>
          
          <ToggleMode isChecked={(e) => switchMode(e)} />
          <Nav isHome={isHome} logotype={logoChange}/>
          <div id="content">{children}</div>
        </StyledContent>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
