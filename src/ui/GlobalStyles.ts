import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
a {
    text-decoration: none;
    color: inherit;
    padding: 0;
    margin: 0;
    font-size: 16px;
}
* {
    font-family: 'Inter', sans-serif;
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
