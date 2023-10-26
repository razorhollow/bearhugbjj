// src/styles/GlobalStyles.js
import { css } from '@emotion/react';
import colors from './colors';

export const GlobalStyles = css`
html {
  box-sizing: border-box;
}  

/* The Universal Selector */
*, /* All elements*/
*::before, /* All ::before pseudo-elements */
*::after { /* All ::after pseudo-elements */
  /* height & width will now include border & padding by default
     but can be over-ridden as needed */
  box-sizing: inherit;
}

/* resets font size to be 62.5% of the user preference - 
     in most browser configurations this will be 10px */
:root {
  font-size: 62.5%;
}
body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;  
    color: ${colors.text};
    background-color: #232323;
    background-image: linear-gradient(315deg, #232323 0%, #4d4d4d 74%); 
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.5;
  }
  html {
    margin: 0;
    padding: 0;
  }
`;
