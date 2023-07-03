import React, { useState, createContext, useEffect } from "react";
import { GlobalStyle, mixins, themeStyle } from "@styles";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Nav, ToggleMode, Social } from "@components";

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
  const [changeNav, setChangeNav] = useState({ prevScroll: 0, switchNav: true });


  const switchMode = (e: boolean) => {
    setLogoChange(e);
    if(e == true) {
      setThemeChange(prevstate => ({...prevstate, theme: themeStyle.lightMode }));
    }else {
      setThemeChange(prevstate => ({...prevstate, theme: themeStyle.darkMode }));
    }
  };

  useEffect(() => {
    const handleNav = () => {
      const { scrollY } = window;
      
      if (changeNav.prevScroll > scrollY) {
        setChangeNav((prev) => ({ ...prev, switchNav: true }));
      }else{
        setChangeNav((prev) => ({ ...prev, switchNav: false }));
      }

      setChangeNav((prev) => ({ ...prev, prevScroll: scrollY }));

    }
   
  window.addEventListener('scroll', handleNav);

  return () => {
    window.removeEventListener('scroll', handleNav);
  };

  }, [changeNav]);
  return (
    <div id="root">
      <GlobalStyle />
      <ThemeProvider theme={themeChange}>
        <StyledContent>  
          <ToggleMode isChecked={(e) => switchMode(e)} backOff={changeNav.switchNav}/>
          <Nav isHome={isHome} logotype={logoChange} backOff={changeNav.switchNav}/>
          <Social />
          <div id="content">{children}</div>
        </StyledContent>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
