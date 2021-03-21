import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import tw, { GlobalStyles } from 'twin.macro'
import { Global, css } from '@emotion/react'

const globalStyles = css`
  body {
    ${tw`bg-gray-100 text-gray-900`}
  }
`

const Layout = ({ children, noHeader }) => (
  <div
    style={{
      minHeight: '100%',
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateColumns: '100%',
    }}
  >
    <GlobalStyles />
    <Global styles={globalStyles} />
    {!noHeader && <Header />}
    <main>{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
