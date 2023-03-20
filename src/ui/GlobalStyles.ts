import { createGlobalStyle } from 'styled-components';
import { resetCSS } from './resetCSS';

export const GlobalStyles = createGlobalStyle`
    ${resetCSS}
`;
