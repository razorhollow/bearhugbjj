import * as React from 'react'
import { css } from '@emotion/react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import colors from '../styles/colors'

const aboutStyle = css`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  padding: 20px;
  width: 80vw;
  background: rgba(158, 158, 158, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  h1, h2 {
    color: ${colors.primary};
    border-bottom: 2px solid ${colors.accent};
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  p {
    color: ${colors.lightGray};
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

const AboutPage = () => {


  return (
    <Layout>
      <div css={aboutStyle}>
            <h1>Discover the Power of Brazilian Jiu-Jitsu</h1>
            <p>Dive into a combat sport that's taken the world by storm. BJJ's magic? Ground fighting and technique that let you outmaneuver even the toughest opponents. Born in Brazil, BJJ's heart now beats strong in the U.S., thanks to legends like the Gracie family.</p>
            
            <h2>The Origin</h2>
            <p>Ever heard of Judo? That's where BJJ's story starts. Brought to Brazil from Japan, it transformed into BJJ under the skilled hands of Carlos and Helio Gracie. Fast-forward to the '80s and '90s, and the U.S. caught the BJJ fever, all sparked by Rorion Gracie's move to California. The Ultimate Fighting Championship (UFC) in 1993? Dominated by Royce Gracie, showcasing BJJ's sheer power.</p>

            <h2>BJJ Today</h2>
            <p>Today, BJJ isn't just a sport – it's a lifestyle. Across the U.S., thousands dive into BJJ for fitness, self-defense, and even a mental edge. It's a full-body workout, a brain teaser, and a self-defense class, all in one. And the best part? A community that's got your back, pushing you to new heights.</p>

            <h2>Join the Journey</h2>
            <p>Ready to embrace the BJJ journey? With its rich legacy, game-changing techniques, and a supportive community, there's no better time to start!</p>
        </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />
export default AboutPage