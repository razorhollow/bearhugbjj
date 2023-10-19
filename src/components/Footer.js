import * as React from 'react'
import { css } from '@emotion/react'

const footerStyle = css`
  background-color: black;
  padding: 50px 0;
  width: 100%;
  clip-path: polygon(
    0 0,
    25% 25%,
    50% 0%,
    75% 25%,
    100% 0%,
    100% 100%,
    0 100%
  );  margin-top: auto;
  margin-right: 0;
  box-sizing: border-box;
`

const footer = () => {
  return (
    <div css={footerStyle}>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Classes</li>
        <li>Blog</li>
      </nav>
    </div>
  )
}
export default footer