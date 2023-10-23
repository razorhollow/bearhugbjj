// src/styles/GlobalStyles.js
import { css } from '@emotion/react';
import colors from './colors';

export const GlobalStyles = css`
  body {
    font-family: 'Roboto', sans-serif;  
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
