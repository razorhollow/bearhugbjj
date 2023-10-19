import * as React from 'react'
import { css } from '@emotion/react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import HeroSection from '../components/HeroSection'
import CardSection from '../components/CardSection'
import AboutSnippet from '../components/AboutSnippet'

const backgroundImageStyle = css`
  position: absolute;
  top: 25%;
  left: -3%;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: brightness(30%);
`

const cardBackgroundContainer = css`
  position: relative;
`

const cardSectionStyle = css`
  position: relative;
  z-index: 1;
`

const index = () => {


  return (
      <Layout pageTitle="Home Page">
        <HeroSection />
        <AboutSnippet />
        <div css={cardBackgroundContainer}>
          <CardSection css={cardSectionStyle}/>
          <StaticImage src="../images/bear.png" css={backgroundImageStyle} alt="grizzly bear"/>
        </div>
      </Layout>
  )
}

export const Head = () => <Seo title="Home" />
export default index