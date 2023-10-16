import * as React from 'react'
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import colors from '../styles/colors';
import { small, medium, large } from '../styles/media-queries';

const navbarStyle = css`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.background};
  padding: 1rem;
  
  ${small} {
    flex-direction: column;
    align-items: center;
  }
  ${medium} {
    justify-content: flex-end;
  }

  ${large} {
    justify-content: flex-end;
  }
`;

const linkStyle = css`
  font-size: 1.5rem;
  color: ${colors.text};
  margin: 0 1rem;
  text-decoration: none;

  &.active {
    border-bottom: 2px solid ${colors.primary};
  }
`;

const Navbar = () => {
  return (
    <nav css={navbarStyle}>
      <div>
        <Link to="/" css={linkStyle} activeClassName="active">
          Home
        </Link>
        <Link to="/about" css={linkStyle} activeClassName="active">
          About
        </Link>
        <Link to="/classes" css={linkStyle} activeClassName="active">
          Classes
        </Link>
        <Link to="/contact" css={linkStyle} activeClassName="active">
          Contact
        </Link>
        <Link to="/blog" css={linkStyle} activeClassName="active">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
