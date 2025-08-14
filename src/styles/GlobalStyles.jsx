import { createGlobalStyle } from 'styled-components';
import RalewayFont from '../assets/fonts/Raleway/Raleway-VariableFont_wght.ttf';
import JosefinSansFont from '../assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayFont}) format('truetype');
    font-weight: 100 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Josefin Sans';
    src: url(${JosefinSansFont}) format('truetype');
    font-weight: 100 900;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: #000000;
  }

  body {
    margin: 0 auto;
    /*max-width: 1920px;*/
    width: 100%;
  }
`;
