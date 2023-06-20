import { css } from "styled-components";

const themeStyle = {

  darkMode: {
    fontColor: css`
      transition: color 300ms;
      color: white;
    `,
    primaryColor: css `background-color: var(--scd-blue);`,
    secondColor: css `background-color: var(--fst-black);`,
    contactMe: css`
      background-color: var(--trd-blue);
      color: white;
      border: 1px solid var(--fiv-blue);
      &:hover {
        background-color: var(--fiv-blue);
      }
    `,
    checkWork: css`
      background-color: white;
      color: black;
      border: 1px solid black;
      &:hover {
        color: white;
        background-color: #333333;
      }
    `,
    aboutAnimationColor: {
      color: css `
      background-color: white;
      `,
      stroke: css `
      stroke: white;
      `
    },
    differentColor: css`
      background-color: white;
      color: black;
    `,
    nav: {
      after: css`
        background-color: var(--fou-blue);
      `,
      before: css`
        background-color: white;
      `,
      sideColor: css`
      background-color:  white;
    `,
    arrowColor:css `
      border-bottom: 25px solid white;
    `,
    font: css`
      color:black;
    `
    },
    toggleMode: {
      toggleSlot: css`
        background-color: white;
      `,
      toggleButton: css`
        background-color: #1e1e1e;
      `,
    },
  },

  lightMode: {
    fontColor: css`
      transition: color 300ms;
      color: black;
    `,
    primaryColor: css `background: linear-gradient(var(--fst-linear), var(--scd-linear));`,
    secondColor: css ` background-color:#E0E0E1;`,
    contactMe: css`
      background-color: var(--scd-blue);
      color: white;
      border: 1px solid black;
      &:hover {
        background-color: var(--fiv-blue);
      }
    `,
    checkWork: css`
      background-color: black;
      color: white;
      border: 1px solid #9c9c9c;
      &:hover {
        color: white;
        background-color: #333333;
      }
    `,
    aboutAnimationColor: {
      color: css `
      background-color: var(--fst-black);
      `,
      stroke: css `
      stroke: black;
      `
    },
    differentColor: css`
      background-color: var(--scd-blue);
      color: white;
    `,
    nav: {
      after: css`
        background-color: var(--fou-blue);
      `,
      before: css`
        background-color: var(--six-blue);
      `,
      sideColor: css`
        background-color:  var(--fst-gray);
      `,
      arrowColor:css `
        border-bottom: 25px solid var(--fst-gray);
      `,
      font: css`
        color:white;
      `
    },
    toggleMode: {
      toggleSlot: css`
        background-color: white;
      `,
      toggleButton: css`
        background-color: #1e1e1e;
      `,
    },
  },
};

export default themeStyle;
