import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import NavBarItem from './nav-bar-item'
import MenuIcon from './menu-icon'
import tw from 'twin.macro'

const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const { logo } = useQueryData()
  return (
    <header id="top" tw="mx-auto w-full">
      <nav
        id="site-menu"
        tw="flex-row md:flex md:justify-between md:border-b-2"
      >
        <div tw="flex flex-row justify-between px-2 py-1 pr-4 shadow-md md:shadow-none">
          <Link to="/">
            <Img fluid={logo.childImageSharp.fluid} tw="w-16" />
          </Link>
          <div
            id="hamburgerbtn"
            tw="w-10 relative md:hidden"
            role="button"
            tabIndex="0"
            onClick={() => setMobileMenuActive(!mobileMenuActive)}
            onKeyDown={() => setMobileMenuActive(!mobileMenuActive)}
          >
            <div tw="absolute bottom-0 top-0">
              <MenuIcon />
            </div>
          </div>
        </div>
        <ul
          css={[
            tw`hidden my-3 mx-5 md:flex md:flex-row`,
            mobileMenuActive && tw`block`,
          ]}
        >
          <NavBarItem to="/" exact>
            Home
          </NavBarItem>
          <NavBarItem to="/books">Books</NavBarItem>
          <NavBarItem to="/contact">Contact</NavBarItem>
          <NavBarItem to="/blog">Blog</NavBarItem>
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

function useQueryData() {
  return useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Madison-Bailey-Submark.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
}
