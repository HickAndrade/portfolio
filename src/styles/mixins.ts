import { css } from "styled-components";

const mixins = {
  darkMode: {
    contactMe: css`
      background-color: var(--trd-blue);
      color: white;
      border: 1px solid var(--fiv-blue);
      transition: all 300ms;
      &:hover {
        background-color: var(--fiv-blue);
      }
    `,
    checkWork: css`
      background-color: white;
      color: black;
      border: 1px solid black;
      transition: all 300ms;
      &:hover {
        color: white;
        background-color: #333333;
      }
    `,

    fontColor: css`
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
      effect: css`
        position: absolute;
        content: "";
        height: 3px;
        transition: width 0.3s ease;
      `,
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
      background-color: #005d96;
      color: white;
      border: 1px solid #23abff;
      transition: all 500ms;
      &:hover {
        background-color: #23abff;
      }
    `,
    checkWork: css`
      background-color: white;
      color: black;
      border: 1px solid black;
      transition: all 500ms;
      &:hover {
        background-color: #333333;
      }
    `,
    toggleMode: {
      toggleSlot: css`
        background-color: var(--scd-blue);
      `,
      toggleButton: css`
        background-color: white;
      `,
    },
  },

  smallButton: css`
    font-family: var(--font-nunito);
    font-weight: 800;
    font-size: 15px;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin-right: 30px;
    text-decoration: none;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

export default mixins;
