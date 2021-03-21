import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import ClampLines from 'react-clamp-lines'
import 'twin.macro'

// sm: 640
// md: 768
// lg: 1024
// xl: 1280

const getLines = size => {
  if (size >= 1250) {
    return 5
  } else if (size >= 640) {
    return 4
  } else if (size >= 450) {
    return 8
  } else if (size >= 425) {
    return 6
  } else if (size >= 375) {
    return 5
  } else if (size >= 320) {
    return 4
  } else {
    return 3
  }
}

const BookPreviewCard = ({ linkTo, imgFluid, title, previewText }) => {
  const [previewLines, setPreviewLines] = useState(
    typeof window !== 'undefined' ? getLines(window.innerWidth) : 4
  )
  useEffect(() => {
    const handleResize = () => {
      setPreviewLines(getLines(window.innerWidth))
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  return (
    <Link to={linkTo}>
      <div tw="inline-block border-gray-700 rounded-md shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:scale-105">
        <div tw="grid grid-cols-3 grid-flow-col gap-3 ">
          <div tw="row-span-5">
            <Img fluid={imgFluid} />
          </div>
          <div tw="col-span-2 row-span-4 pr-2">
            <h1 tw="text-2xl">{title}</h1>
            <ClampLines
              tw="text-sm"
              text={previewText}
              lines={previewLines}
              ellipsis="..."
              innerElement="p"
              buttons={false}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BookPreviewCard
