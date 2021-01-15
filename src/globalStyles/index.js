import { createGlobalStyle } from 'styled-components';
import * as global from './variables'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: ${global.greyColour};
    font-family: 'Lato', sans-serif;

  }
`;

export default GlobalStyle;