import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Bearhug Brazilian Jiujitsu</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quas mollitia? Minima, nihil animi laborum aperiam at laudantium, molestiae aspernatur ratione maxime recusandae et sunt voluptatum maiores rem! Quod, consequuntur?
      Saepe, nesciunt pariatur accusamus dolorem aliquid id nemo sunt fuga voluptatem et nisi quos voluptates eum recusandae itaque error similique ea illum! Vitae voluptatem nemo fuga corrupti eum quia ratione?</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />
export default AboutPage