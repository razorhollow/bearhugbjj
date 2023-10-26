import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Seo from '../components/seo'
import colors from '../styles/colors'
import { large, medium, small } from '../styles/media-queries'
import { encode } from '../../utils/markdownUtils'

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
  margin: 30px auto;
  ${small} {
    width: 100%;
  }
  ${large} {
    width: 50vw;
  }
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
  cursor: pointer;
  &:hover {
    color: ${colors.darkGray}
  }
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
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [formStatus, setFormStatus] = React.useState('')

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
    .then(() => {
      setFormStatus("Thanks for reaching out!")
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setTimeout(() => {
        setFormStatus("")
      }, 4000)
    })
    .catch(error => setFormStatus("Something Went Wrong. Try Submitting Again!"))
  }

  return (
    <Layout>
      <main css={pageStyle}>
        <form css={formStyle} name='contact' method='POST' data-netlify='true' onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <h1 css={formHeadStyle}>Get In Touch</h1>
          <Input type="text" name="name" id="name" required placeholder='First Name' value={formData.name} onChange={handleChange}/>
          <Input type="email" name="email" id="email" required placeholder="Email" value={formData.email} onChange={handleChange}/>
          <Input type="tel" name="phone" id="phone" required placeholder="Phone" value={formData.phone} onChange={handleChange}/>
          <Message 
            placeholder="Want to schedule a free intro lesson? Need more info? We're here to help..."
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            />
          <input type="submit" value="Submit" css={submitButtonStyle}/>
          {formStatus && <p css={{color: `${colors.primaryGreen}`}}>{formStatus}</p>}

        </form>
      </main>
  </Layout>
  )
}
export default ContactForm

export const Head = () => <Seo title="Contact" />