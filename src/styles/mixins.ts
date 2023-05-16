import { css } from 'styled-components';


const mixins = {
    darkMode: {
        smallButton: css `
        font-family: var(--font-nunito);
        font-weight: 800;
        font-size:15px;
        padding: .5rem 1rem;
        border-radius: 4px;
        margin-right: 30px;
        text-decoration: none;
    ` ,
        contactMe: css `
        background-color:#005D96;
        color:white;
        border: 1px solid #23ABFF;
            &:hover {   
                background-color: #23ABFF;
            }

        `,
        checkWork: css `
        background-color:white;
        color:black;
        border: 1px solid black;
            &:hover {
                background-color: whitesmoke;
            }


        `
    }
}


export default mixins;