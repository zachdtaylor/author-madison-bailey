import React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

const Button = {
  Link: ({ to, children, extraMargin }) => (
    <Link
      to={to}
      css={[
        tw`inline-block bg-primary-dark hover:bg-primary ease-in-out transition duration-200 text-white py-3 px-4 rounded shadow-md`,
        extraMargin && tw`mt-3 mb-5 md:my-3`,
      ]}
    >
      {children}
    </Link>
  ),
}

export default Button
