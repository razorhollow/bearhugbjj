import * as React from 'react';
import { css } from '@emotion/react';
import colors from '../styles/colors';

const buttonStyles = {
  primary: css`
    background-color: ${colors.primary};
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 2rem;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  `,
  secondary: css`
    background-color: transparent; 
    color: ${colors.primary};
    border: 4px solid ${colors.primary};
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 2rem;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  `
};

const cardStyle = css`
 border: 1px solid black;
`

export const Button = ({ variant = 'primary', children, ...props }) => {
  return (
    <button css={buttonStyles[variant]} {...props}>
      {children}
    </button>
  );
};

export const Card = (props) => {  // added the style prop
  return (
    <div css={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

