import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import NavBarItem from './nav-bar-item'
import MenuIcon from './menu-icon'

const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "Madison-Bailey-Submark.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header id="top" className="mx-auto w-full">
      <nav
        id="site-menu"
        className="flex-row md:flex md:justify-between md:border-b-2"
      >
        <div className="flex flex-row justify-between px-2 py-1 pr-4 shadow-md md:shadow-none">
          <Link to="/">
            <Img
              fluid={data.headerImage.childImageSharp.fluid}
              className="w-16"
            />
          </Link>
          <div
            id="hamburgerbtn"
            className="w-10 relative md:hidden"
            role="button"
            tabIndex="0"
            onClick={() => setMobileMenuActive(!mobileMenuActive)}
            onKeyDown={() => setMobileMenuActive(!mobileMenuActive)}
          >
            <div className="absolute bottom-0 top-0">
              <MenuIcon />
            </div>
          </div>
        </div>
        <ul
          className={`hidden my-3 mx-5 md:flex md:flex-row ${mobileMenuActive && 'active'
            }`}
        >
          <Link to="/" className="w-full">
            <NavBarItem>
              <span className="text-xl">Home</span>
            </NavBarItem>
          </Link>
          <Link to="/books" className="w-full">
            <NavBarItem>
              <span className="text-xl">Books</span>
            </NavBarItem>
          </Link>
          <Link to="/contact" className="w-full">
            <NavBarItem>
              <span className="text-xl">Contact</span>
            </NavBarItem>
          </Link>
          <Link to="/blog" className="w-full">
            <NavBarItem>
              <span className="text-xl">Blog</span>
            </NavBarItem>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
