import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Seo from '../components/seo'
import colors from '../styles/colors'

const formStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 60vw;
  background: rgba(13, 15, 14, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`

const pageStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  margin: 0 auto;
`

const formHeadStyle = css`
  color: ${colors.primaryGreen};
  align-self: start;
  padding-left: 20px; 
  font-weight: 100;
`

const submitButtonStyle = css`
  width: 100px;
  align-self: start;
  margin-left: 25px;
  background-color: ${colors.primaryGreen};
  border: none;
  padding: 10px;
  color: ${colors.lightGray};
`

const Input = styled.input`
  border: 2px solid ${colors.primaryGreen};
  width: 80%;
  height: 50px;
  background-color: transparent;
  color: ${colors.lightGray};
  margin: 10px 0;
  padding-left: 20px;
  ::placeholder {
    color: ${colors.primaryGreen};
  }
`

const Message = styled.textarea`
border: 2px solid ${colors.primaryGreen};
width: 80%;
height: 100px;
background-color: transparent;
color: ${colors.lightGray};
margin: 10px 0;
padding-left: 20px;
padding-top: 20px;
::placeholder {
  color: ${colors.primaryGreen};
}
`

const ContactForm = () => {
  return (
    <Layout>
      <main css={pageStyle}>
        <form action="submit" css={formStyle} name='contact' method='POST'>
          <h1 css={formHeadStyle}>Get In Touch</h1>
          <Input type="text" name="name" id="name" required placeholder='First Name'/>
          <Input type="email" name="email" id="email" required placeholder="Email"/>
          <Input type="tel" name="phone" id="phone" required placeholder="Phone"/>
          <Message 
            placeholder="Want to schedule a free intro lesson? Need more info? We're here to help..."
            />
          <input type="submit" value="Submit" css={submitButtonStyle}/>
        </form>
      </main>
  </Layout>
  )
}
export default ContactForm

export const Head = () => <Seo title="Contact" />