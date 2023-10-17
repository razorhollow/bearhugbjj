import * as React from 'react'
import { css } from '@emotion/react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import HeroSection from '../components/HeroSection'
import CardSection from '../components/CardSection'

const backgroundImageStyle = css`
  position: absolute;
  top: 64vh; left: 20px;
  z-index: -2;
  filter: brightness(30%);
`

const index = () => {


  return (
      <Layout pageTitle="Home Page">
        <HeroSection />
        <CardSection />
        <StaticImage src="../images/bear.png" css={backgroundImageStyle} alt="grizzly bear"/>
      </Layout>
  )
}

export const Head = () => <Seo title="Home" />
export default index