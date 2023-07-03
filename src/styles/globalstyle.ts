import { createGlobalStyle } from "styled-components";
import TransitionStyles from "./TransitionStyles";
import variables from "./variables";
import fonts from "./fonts";


const GlobalStyle = createGlobalStyle`
${fonts};
${variables};


  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
    
  }
  
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    
    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        pointer-events: none;
        user-select: none;
      }
    }
  }

  /*Scrollbar */

  html {
    scrollbar-width: thin;
  }
  ::-webkit-scrollbar{
    width: 9px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color:#4f4f4f;
    border: 3px solid #4f4f4f;
    border-radius: 20px;
}

  ${TransitionStyles};

`;

export default GlobalStyle;