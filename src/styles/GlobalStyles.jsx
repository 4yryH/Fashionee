import { createGlobalStyle } from 'styled-components';
import RalewayFont from '../assets/fonts/Raleway/Raleway-VariableFont_wght.ttf';
import JosefinSansFont from '../assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf';

export const GlobalStyle = createGlobalStyle`
  :root {
    --body-text-color: #444444;
    --titles-color: #000;
    --red: #ff8e8e;
    --green: #95ccb5;
    --gray: #999;
    --white: #fff;
    --border-color: #d9d9d9ff;
    --background-images-color: #f1f2f3;
    --background-quantity: #f8f8fb;
    /*fonts*/
    --font-family: 'Raleway';
    --second-family: 'Josefin Sans';
  }

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

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
