import React from 'react'
import { Link } from 'gatsby'

const Button = {
  Link: ({ to, children, className }) => (
    <Link
      to={to}
      className={`inline-block bg-pink text-white py-3 px-4 rounded shadow-md ${className}`}
    >
      {children}
    </Link>
  ),
}

export default Button
