import * as React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import colors from '../styles/colors'

const footerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  padding-top: 150px;
  padding-bottom: 40px;
  width: 100%;
  clip-path: polygon(
    0 0,
    25% 25%,
    50% 0%,
    75% 25%,
    100% 0%,
    100% 100%,
    0 100%
  );  margin-top: auto;
  margin-right: 0;
  box-sizing: border-box;
`

const logoStyle = css`
    width: 200px;
    height: auto;
    filter: brightness(.5);
    margin-bottom: 10px;
`

const indexItemsStyle = css`
    text-decoration: none;
    list-style-type: none;
    color: ${colors.mediumGray};
    &:hover {
      color: white;
    }
`

const addressStyle = css`
    color: ${colors.mediumGray};
`

const iconStyle = css`
    margin-right: 10px;
`



//site index component
const SiteIndex = () => {
  return (
    <div>
      <StaticImage src="../images/logo.webp" alt="Bear Hug Logo" css={logoStyle} />
      <nav css={indexItemsStyle}>
        <Link to='/' css={indexItemsStyle}><li css={indexItemsStyle}>Home</li></Link>
        <Link to='/about' css={indexItemsStyle}><li css={indexItemsStyle}>About</li></Link>
        <Link to='/classes' css={indexItemsStyle}><li css={indexItemsStyle}>Classes</li></Link>
        <Link to='/contact' css={indexItemsStyle}><li css={indexItemsStyle}>Contact</li></Link>
        <Link to='/blog' css={indexItemsStyle}><li css={indexItemsStyle}>Blog</li></Link>
      </nav>
      <p css={{paddingTop: '10px', color: `${colors.mediumGray}`}}>&copy; {new Date().getFullYear()} Bearhug Jiujitsu | All Rights Reserved</p>
    </div>
  )
}

//social icons component

const SocialIcons = () => {
  return(
    <div css={{paddingTop: '10px'}}>
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"  css={{paddingRight: '10px'}}>
        <FontAwesomeIcon icon={['fab', 'facebook']} size="3x" color={colors.mediumGray}/>
      </a>
      <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" color={colors.mediumGray} />
        </a>
    </div>
  )
}

//address component

const AddressSection = () => {
  return (
    <div css={addressStyle}>
      <h3>Bearhug BJJ</h3>
      <p><FontAwesomeIcon icon={faMapMarkerAlt} css={iconStyle} />100 Nasser Civic Center Plaza, Corning, NY 14830</p>
      <p><FontAwesomeIcon icon={faEnvelope} css={iconStyle} />info@bear-bjj.com</p>
      <p><FontAwesomeIcon icon={faPhone} css={iconStyle} />607-542-9966</p>
    </div>
  )
}

//copyright component

const Footer = () => {
  return (
      <div css={footerStyle}>
        <SiteIndex />
        <AddressSection />
      </div>
  )
}
export default Footer