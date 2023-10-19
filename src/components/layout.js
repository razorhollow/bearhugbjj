import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Navbar from './NavBar'
import { Global } from '@emotion/react'
import { GlobalStyles } from '../styles/GlobalStyles'
import Footer from './Footer'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Helmet>
      <link 
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" 
        rel="stylesheet" 
      />
      </Helmet>
      <Global styles={GlobalStyles} />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
export default Layout
