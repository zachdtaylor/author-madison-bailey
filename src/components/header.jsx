import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
    <header id="top" className="mx-auto p-5">
      <nav id="site-menu" className="flex-row md:justify-between">
        <div className="flex flex-row justify-between">
          <Link to="/">
            <Img
              fluid={data.headerImage.childImageSharp.fluid}
              className="w-16"
            />
          </Link>
          <p
            id="hamburgerbtn"
            className="md:hidden"
            onClick={() => setMobileMenuActive(!mobileMenuActive)}
          >
            menu
          </p>
        </div>
        <ul
          className={`hidden md:flex md:flex-row ${
            mobileMenuActive && 'active'
          }`}
        >
          <li className="pr-5">
            <Link to="/books">Hi</Link>
          </li>
          <li className="pr-5">
            <Link to="/books">Books</Link>
          </li>
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
