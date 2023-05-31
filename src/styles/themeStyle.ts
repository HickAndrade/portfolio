import { css } from "styled-components";

const themeStyle = {
  darkMode: {
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

    fontColor: css`
    transition: color 300ms;
      color: white;
    `,
    heroSection: css`
      background-color: var(--scd-blue);
      color: white;
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

    fontColor: css`
      transition: color 300ms;
      color: black;
    `,
    heroSection: css`
      background: linear-gradient(var(--fst-linear), var(--scd-linear));
      color: black;
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
