/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

const Layout = ({ children, noHeader }) => {
  return (
    <>
      <div
        style={{
          minHeight: '100%',
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          gridTemplateColumns: '100%',
        }}
      >
        {!noHeader && <Header />}
        <main className="mx-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
