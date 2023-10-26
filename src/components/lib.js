import * as React from 'react';
import { css } from '@emotion/react';
import colors from '../styles/colors';
import { Link } from 'gatsby-link';
import { GatsbyImage } from 'gatsby-plugin-image';

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

const learnMore = css`
text-decoration: none;
padding: 10px;
  width: 100px;
  color: ${colors.primaryYellow};
  text-transform: uppercase;
  border-radius: 10px;
  &:hover {
    background-color: ${colors.darkGray}
  }
`

const cardStyle = css`
/* From https://css.glass */
background: rgba(158, 158, 158, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
width: 30%;
min-height: 700px;
color: ${colors.lightGray};
position: relative;
overflow: hidden;
`

const cardImage = css`
  width: 100%;
  height: 350px;
`

export const Button = ({ variant = 'primary', children, ...props }) => {
  return (
    <button css={buttonStyles[variant]} {...props}>
      {children}
    </button>
  );
};

export const Card = ({ title, text, image }) => {
  return (
    <div css={cardStyle}>
      <GatsbyImage image={image} alt={title} css={cardImage} imgStyle={{objectFit: 'cover', objectPosition: 'center'}}/>
      <div css={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
        <h5 css={{fontSize: '1.8rem', margin: '0 auto', color: 'white'}}>{title}</h5>
        <p css={{fontSize: '1.2rem'}}>{text}</p>
        <Link to="/" css={learnMore}>learn more</Link>
      </div>
    </div>
  );
};

