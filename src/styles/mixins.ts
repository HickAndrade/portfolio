import { css } from "styled-components";

const mixins = {
  smallButton: css`
    white-space: nowrap;
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

    burguerEffect: css `
    @keyframes inM {
      50% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(45deg);
      }
    }
    
    @keyframes outM {
      50% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(45deg);
      }
    }
    
    @keyframes inT {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(9px) rotate(0deg);
      }
      100% {
        transform: translateY(9px) rotate(135deg);
      }
    }
    
    @keyframes outT {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(9px) rotate(0deg);
      }
      100% {
        transform: translateY(9px) rotate(135deg);
      }
    }
    
    @keyframes inBtm {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-9px) rotate(0deg);
      }
      100% {
        transform: translateY(-9px) rotate(135deg);
      }
    }
    
    @keyframes outBtm {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-9px) rotate(0deg);
      }
      100% {
        transform: translateY(-9px) rotate(135deg);
      }
    }
    `
  }
};

export default mixins;
