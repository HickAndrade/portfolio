import React, { useState } from "react";
import styled from "styled-components";
import { FiMoon, FiSun } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";

interface ToggleModeProps {
  isChecked: (e: boolean) => any;
}

const ToggleSlot = styled.div`
  position: relative;
  height: 1.5em;
  width: 4em;
  border: 1.3px solid black;
  border-radius: 30px;
  background-color: var(--scd-blue);
  box-shadow: 0px 0px 5px 1px #08090a;
  transition: background-color 250ms;
`;
const ToggleButton = styled.div`
  position: absolute;
  background-color: white;
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  z-index: 1;
  transform: translate(40px, 1px);
  transition: background-color 250ms,
    transform 500ms cubic-bezier(0.5, 1.9, 0.1, 0.4);
`;

const ToggleWrap = styled.label`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 2rem;
  top: 1.3rem;
  z-index: 15;

  @media screen and (max-width: 1024px){
    transition: right 1s;
    right: 6.5rem;
  }

  h2 {
    white-space: nowrap;
    position: absolute;
    top: 1rem;
    font-family: var(--font-sans);
    font-size: 15px;
    color: white;
    transition: opacity 300ms;
  }


  input {
    top: 0;
    position: absolute;
    cursor: pointer;
    &:checked ~ ${ToggleSlot} {
      background-color: white;
      ${ToggleButton} {
        background-color: #1e1e1e;
        transform: translate(1px, 1px);
      }
    }
  }

  .icon-wrapper {
    display: flex;
    position: absolute;
    height: 1.5em;
    width: 1.9em;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .sun {
    color: black;
    right: 0;
  }
  .moon {
    color: white;
  }
`;

const ToggleMode = ({ isChecked }: ToggleModeProps): JSX.Element => {
  const [messageAnimation, setMessageAnimation] = useState({
    message: false,
    animation: false,
  });

  const sun = (
    <div className="icon-wrapper sun">
      <FiSun />
    </div>
  );
  const moon = (
    <div className="icon-wrapper moon">
      <FiMoon />
    </div>
  );

  const toggleMessage = (e: boolean) => {
    setMessageAnimation({ animation: true, message: !e });
    isChecked(e);

    console.log(e);
    setTimeout(() => {
      setMessageAnimation((prevstate) => ({ ...prevstate, animation: false }));
    }, 300);
  };

  return (
    <ToggleWrap>
      <input
        type="checkbox"
        onChange={(e) => toggleMessage(e.target.checked)}
      />
      <ToggleSlot>
        {moon}
        <ToggleButton />
        {sun}
      </ToggleSlot>
      <CSSTransition
        classNames="fade"
        timeout={1000}
        unmountOnExit
        in={messageAnimation.animation}
      >
        <h2>{messageAnimation.message ? "is better." : "it suits."}</h2>
      </CSSTransition>
    </ToggleWrap>
  );
};

export default ToggleMode;
