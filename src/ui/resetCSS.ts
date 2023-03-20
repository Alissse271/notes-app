import { css } from 'styled-components';

export const resetCSS = css`
    a {
        text-decoration: none;
        color: inherit;
        padding: 0;
        margin: 0;
        font-size: 16px;
    }
    * {
        font-family: 'Montserrat', sans-serif;
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
    li {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
`;
