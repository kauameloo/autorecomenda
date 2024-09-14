// src/styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
    width: 100vw;  // Garantindo que o body ocupe toda a largura da tela
    overflow-x: hidden;  // Evitando qualquer rolagem horizontal

    @media (max-width: 768px) {
      font-size: 90%;
    }

    @media (max-width: 480px) {
      font-size: 85%;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
