import * as React from 'react'
import { css } from '@emotion/react'
import { Card } from './lib'

const cardSectionStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 3rem;
`

const CardSection = () => {
  return (
    <div css={cardSectionStyle}>
      <Card />
      <Card />
      <Card />
    </div>
  )
}
export default CardSection