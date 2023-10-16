import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import HeroSection from '../components/HeroSection'
import CardSection from '../components/CardSection'

const index = () => {
  return (
      <Layout pageTitle="Home Page">
        <HeroSection />
        <CardSection />
      </Layout>
  )
}

export const Head = () => <Seo title="Home" />
export default index