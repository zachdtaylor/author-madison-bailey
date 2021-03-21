import React from 'react'
import { Link } from 'gatsby'
import { usePathname } from '../utils/misc'
import tw from 'twin.macro'

const NavBarItem = ({ to, exact, children }) => {
  const pathname = usePathname()
  const urlMatches = exact ? pathname === to : pathname.startsWith(to)
  return (
    <Link to={to} tw="w-full">
      <li tw="py-4 border-b-2 md:mx-4 md:py-2 md:border-b-0 hover:text-primary-dark transition duration-200 ease-in-out">
        <span css={[tw`text-xl`, urlMatches && tw`text-primary-dark`]}>
          {children}
        </span>
      </li>
    </Link>
  )
}

export default NavBarItem
