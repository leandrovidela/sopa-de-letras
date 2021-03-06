import { createGlobalStyle } from "styled-components";

export const GlobalSyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body,
  html {
    font-size: 16px;
    text-align: center;
    color: #673ab7;
  }

  .api-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .selected {
    background: #673ab7;
    color: white;
  }
`;
