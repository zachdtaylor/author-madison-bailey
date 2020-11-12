import React from 'react'
import { Link } from 'gatsby'
import { usePathname } from '../utils/misc'

const NavBarItem = ({ to, exact, children }) => {
  const pathname = usePathname()
  const urlMatches = exact ? pathname === to : pathname.startsWith(to)
  return (
    <Link to={to} className="w-full">
      <li className="py-4 border-b-2 md:mx-4 md:py-2 md:border-b-0 hover:text-pink-light transition duration-500 ease-in-out">
        <span className={`text-xl ${urlMatches && 'text-pink'}`}>
          {children}
        </span>
      </li>
    </Link>
  )
}

export default NavBarItem
