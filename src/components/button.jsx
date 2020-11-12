import React from 'react'
import { Link } from 'gatsby'

const Button = {
  Link: ({ to, children, className }) => (
    <Link
      to={to}
      className={`inline-block bg-pink hover:bg-pink-light ease-in-out transition duration-500 text-white py-3 px-4 rounded shadow-md ${className}`}
    >
      {children}
    </Link>
  ),
}

export default Button
