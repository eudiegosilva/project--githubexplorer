import { createGlobalStyle } from 'styled-components';
import { background } from 'assets';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;

    &:focus {
      outline: 0;
    }
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  body {
    background: #F0F0F5 url(${background}) no-repeat 70% top;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
