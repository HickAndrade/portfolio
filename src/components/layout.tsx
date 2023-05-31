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
  const [isLoading, setIsLoading] = useState(false);
  const [themeChange, setThemeChange] = useState({ ...mixins, theme: themeStyle.darkMode });

  const switchMode = (e: boolean) => {
    if(e == true) {
        setThemeChange(prevstate => ({...prevstate, theme: themeStyle.lightMode }));
    }else {
        setThemeChange(prevstate => ({...prevstate, theme: themeStyle.darkMode }));
    }
  };

  return (
    <div id="root">
      <GlobalStyle />
      <ThemeProvider theme={themeChange}>
        <StyledContent>
          <ToggleMode isChecked={(e) => switchMode(e)} />
          <Nav isHome={isHome} />
          <div id="content">{children}</div>
        </StyledContent>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
