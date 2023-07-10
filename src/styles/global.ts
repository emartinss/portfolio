import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: "Inter", sans-serif;
  }

  button{
    cursor: pointer;
  }

  dialog{
    display: unset;
    position: unset;
  }

  body{
    background-color: #0A182E;
  }

  :root{
    --color-secundary:rgba(255, 230, 5, 1)
  }
`;