import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
      background: rgb(20,20,20);
      color: white;
        button {
        color: black;
        }
    }
  #wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
    margin: 0 auto;
    a {
        text-decoration: none;
        color: inherit;
    }
  }
`;

export default GlobalStyle;