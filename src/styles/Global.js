import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }


  body {
    box-sizing: border-box;
    font-family: "Droid Serif";
  
  }
`;

export default GlobalStyles;
