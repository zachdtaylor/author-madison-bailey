import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ headerImage }) => (
  <header>
    <div>
      <h1>Hello There</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
