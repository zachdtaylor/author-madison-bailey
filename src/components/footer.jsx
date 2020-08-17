import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center py-12 px-3 bg-red-300 text-white">
      <p className="mb-2">
        <a
          href="mailto:authormadisonbailey@gmail.com"
          className="hover:text-gray-200"
        >
          Email Me
        </a>
        &nbsp;&bull;&nbsp;
        <a
          href="https://www.instagram.com/authormadisonbailey/"
          className="hover:text-gray-200"
        >
          Instagram
        </a>
        &nbsp;&bull;&nbsp;
        <a
          href="https://m.facebook.com/authormadisonbailey/?__nodl&ref=m.facebook.com&_rdr"
          className="hover:text-gray-200"
        >
          Facebook
        </a>
      </p>
      <p>&copy; {new Date().getFullYear().toString()} Madison Taylor</p>
    </footer>
  )
}

export default Footer
