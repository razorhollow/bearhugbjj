import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { css } from '@emotion/react';
import { Button } from './lib';
import colors from '../styles/colors';

const heroContainer = css`
  position: relative;  
  min-height: 60vh;
  `      

const backgroundStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; 
`;

const contentStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;  
  z-index: 1;    
  padding: 2rem;
`;

const buttonGroup = css`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
  margin-top: 4rem;
`

const buttonStyle = css`
  width: 400px;
  height: 80px;
  &:hover {
    box-shadow: 0px 0px 5px ${colors.primaryGreen};
  }
`

const HeroSection = () => {
  return (
    <div css={heroContainer}>
      <StaticImage
        src="https://static.wixstatic.com/media/2ae6e1_292251469a8745cf9a44251f8fb6ba76~mv2.png/v1/fill/w_1280,h_836,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2ae6e1_292251469a8745cf9a44251f8fb6ba76~mv2.png"
        alt="Background Image"
        css={backgroundStyle}
        layout="fullWidth"  // This ensures the image takes the full width of the container
      />
      <div css={contentStyle}>
        <StaticImage src="../images/logo.webp" alt="Bear Hug Logo" />
        <div css={buttonGroup}>
          {/* Phone Number and Training Schedule CTAs */}
          <Button css={buttonStyle}>Call Us Now</Button>
          <Button variant='secondary' css={buttonStyle}>See Our Schedule</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
