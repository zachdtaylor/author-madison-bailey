import React from 'react'
import 'twin.macro'

const Footer = () => (
  <footer tw="text-center py-12 px-3 bg-gray-300 text-gray-800">
    <p tw="mb-2">
      <a href="mailto:authormadisonbailey@gmail.com" tw="hover:text-gray-200">
        Email Me
      </a>
      &nbsp;&bull;&nbsp;
      <a
        href="https://www.instagram.com/authormadisonbailey/"
        tw="hover:text-gray-200"
      >
        Instagram
      </a>
      &nbsp;&bull;&nbsp;
      <a
        href="https://m.facebook.com/authormadisonbailey/?__nodl&ref=m.facebook.com&_rdr"
        tw="hover:text-gray-200"
      >
        Facebook
      </a>
    </p>
    <p>&copy; {new Date().getFullYear().toString()} Madison Taylor</p>
  </footer>
)

export default Footer
