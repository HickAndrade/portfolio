import { css } from "styled-components";

const mixins = {
  smallButton: css`
    font-family: Nunito;
    font-weight: 800;
    font-size: 15px;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin-right: 30px;
    text-decoration: none;
    transition: all 300ms;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  nav: {
    effect: css`
      position: absolute;
      content: "";
      height: 3px;
      transition: width 0.3s ease;
    `,
  }
};

export default mixins;
