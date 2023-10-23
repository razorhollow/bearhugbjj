import * as React from 'react'
import { css } from '@emotion/react'
import classSchedule from '../data/classSchedule'
import Layout from '../components/layout'
import Seo from '../components/seo'
import colors from '../styles/colors'

const dayStyle = css`
margin: 1rem auto;
display: flex;
flex-direction: column;
align-items: space-around;
padding: 20px;
width: 280px;
height: 400px;
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
  font-size: 1rem;
}

li {
  color: ${colors.lightGray};
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  list-style-type: none;
  white-space: nowrap;
}
`;

const scheduleSectionStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`



const Classes = () => {
  return (
    <Layout pageTitle="Class Schedule">
      <div css={scheduleSectionStyle}>
      {Object.entries(classSchedule).map(([day, classes]) => (
        <div key={day} css={dayStyle}>
          <h2>{day}</h2>
          <ul css={{paddingRight: '2rem'}}>
            {classes.map((cls, index) => (
              <li key={index}>
                {cls.time}  <span css={{fontSize: '1rem', margin: '0 1rem', color: `${colors.secondary}`}}>{cls.title}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Class Schedule" />
export default Classes