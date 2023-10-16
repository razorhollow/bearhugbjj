// src/styles/GlobalStyles.js
import { css } from '@emotion/react';
import colors from './colors';

export const GlobalStyles = css`
  body {
    font-family: 'Roboto', sans-serif;  
    color: ${colors.text};
    background-color: ${colors.mediumGray};
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.5;
  }
`;
