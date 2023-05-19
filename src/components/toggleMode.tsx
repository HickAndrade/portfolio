import React from 'react';
import styled from 'styled-components';
import { FiMoon,FiSun } from 'react-icons/fi';

const ToggleSlot = styled.div `
    position:relative;
    height:1.5em;
    width: 4em;
    border: 1.3px solid black;
    border-radius: 30px;
    background-color: var(--scd-blue);
    box-shadow: 0px 0px 5px 1px #08090a;
    transition: background-color 250ms;
`
const ToggleButton = styled.div `
    position: absolute;
    background-color: white;
    height: 1.4em;
    width: 1.4em;
    border-radius: 50%;
    z-index: 1;
    transform: translate(40px, 1px);
    transition: background-color 250ms, transform 500ms cubic-bezier(.5,1.9,.1,.40);
    
`

const ToggleWrap = styled.label `
    align-items: center;
    justify-content: center;
    display:flex;
    position: relative;
    margin: 1rem;

    .icon-wrapper{
        display:flex;
        position: absolute;
        height: 1.5em;
        width: 1.9em;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    .sun{
       color: black;
       right: 0;
    }
    .moon{
        color: white;
    }

    input {
        position: absolute;
        cursor:pointer;
        &:checked ~ ${ToggleSlot} {
            background-color: white;
            ${ToggleButton} {
                background-color: #1e1e1e;
                transform: translate(1px, 1px);
            }
        }
    }
`

const ToggleMode = (): JSX.Element => {

const sun = (<div className='icon-wrapper sun'><FiSun /></div>)
const moon = (<div className='icon-wrapper moon'><FiMoon /></div>)

    return (
        <ToggleWrap>
          <input type='checkbox' onChange={(e)=> console.log(e.target.checked)} />
           <ToggleSlot>
                {moon}
            <ToggleButton />
                {sun}
           </ToggleSlot>
        </ToggleWrap>
    )
}

export default ToggleMode;