import * as React from 'react'
import Navbar from './NavBar'
import { Global } from '@emotion/react'
import { GlobalStyles } from '../styles/GlobalStyles'
import Footer from './Footer'


const Layout = ({ pageTitle, children }) => {
  
  return (
    <>
      <Global styles={GlobalStyles} />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export const Head = () => {
  <>
<link 
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" 
  rel="stylesheet" 
/>
  </>
}
export default Layout
