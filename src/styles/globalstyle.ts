import { createGlobalStyle } from "styled-components";
import TransitionStyles from "./TransitionStyles";
import variables from "./variables";

const GlobalStyle = createGlobalStyle `
    ${variables};
    

 html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
 }
 *,
  *:before,
  *:after {
    box-sizing: inherit;
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
  ${TransitionStyles};

`;

export default GlobalStyle;