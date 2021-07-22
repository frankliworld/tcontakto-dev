import { styled, createGlobalStyle } from "styled-components";
import { themes } from "./ColorsStyle";


export const GlobalStyle = createGlobalStyle`
  
  *, *::before, *:after {
    outline: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background: rgba(0, 182, 255, .2);
    border-radius: 10px;
  }

  body {
    /* background: white; */
    background: ${themes.light.backgroundColor};
    @media (prefers-color-scheme: dark) {
        /* background: ${themes.dark.backgroundColor}; */
    }
      
      ::-webkit-scrollbar {
          width: 0;
          height: 0;
      }
  }

  input, textarea {
    transition: 1s cubic-bezier(.17, .67, .83, .67);
  }

  input:focus, textarea:focus {
    outline: none !important;
    border-color: ${themes.light.secondary};
    ${themes.light.card}
  }
  main {
      position: relative;
      width: 100%;
      height: 100vh;
  }

`;
