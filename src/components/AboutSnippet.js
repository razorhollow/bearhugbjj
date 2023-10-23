import * as React from 'react'
import { css } from '@emotion/react'
import colors from '../styles/colors'

const aboutSnippetStyle = css`
  height: 20vh;
  // background-color: ${colors.darkGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.lightGray};
  font-size: 1.5rem;
  width: 100vw;
  padding: 1rem;
  min-height: 300px;

`

const AboutSnippet = () => {
  return (
    <div css={aboutSnippetStyle}>
      <h3 css={{paddingTop: "10px"}}>About Us</h3>
      <p css={{width: '80vw'}}>Led by Fortaleza-born second-degree blackbelt, Aron Rocha, Bear Hug Brazilian Jiu-jitsu delivers authentic techniques straight from the birthplace of BJJ. Dive into a welcoming atmosphere where health, confidence, and self-defense aren't just taught — they're lived.</p>
    </div>
  )
}
export default AboutSnippet