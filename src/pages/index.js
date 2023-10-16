import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const index = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>Get After It</p>
        <StaticImage 
          alt="Background image of the bearhug logo shadowed on the front of the building"
          src="https://static.wixstatic.com/media/2ae6e1_292251469a8745cf9a44251f8fb6ba76~mv2.png/v1/fill/w_1280,h_836,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2ae6e1_292251469a8745cf9a44251f8fb6ba76~mv2.png"
        />
      </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />
export default index