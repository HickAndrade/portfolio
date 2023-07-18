import { css } from "styled-components";

const themeStyle = {

  darkMode: {
    iconColor: css `
    fill: white;
    `,
    aboutIconColor: css `
    fill: var(--fst-blue);
    `,
    fontColor: css`
      transition: color 300ms;
      color: white;
    `,
    primaryColor: css `background-color: var(--scd-blue);`,
    secondColor: css `background-color: #020816;`,
    thirdColor: css ` background-color:#1a2b51;`,
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
    aboutMessages: css `
        border: 1px solid #151823;
        box-shadow: 0px 0px 2px .3px #08090a;
        background-color: #151823;
        span{
          background-color: blue;
        }
      `,
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
    cardWorksColor: css `
    background-color: var(--scd-blue);
    ` 
  },

  lightMode: {
    iconColor: css `
    fill: var(--fst-blue);
    `,
    aboutIconColor: css `
    fill: white;
    `,
    fontColor: css`
      transition: color 300ms;
      color: black;
    `,
    primaryColor: css `background: linear-gradient(var(--fst-linear), var(--scd-linear));`,
    secondColor: css ` background-color:var(--fst-gray);`,
    thirdColor: css ` background-color:#f2f2f2;`,
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
    aboutMessages: css `
        color:black;
        background-color: #e7e7e7;
        border: 1px solid #BEBEBE;
        box-shadow: 0px 0px 2px .3px rgba(0, 0, 0, 0.25);
        span{
          background-color:#002557;
        }
      `,
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
        background-color:  var(--fst-blue);
      `,
      arrowColor:css `
        border-bottom: 25px solid var(--fst-blue);
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
    cardWorksColor: css `
    background-color:var(--fst-gray);
    ` 
  },
};

export default themeStyle;
