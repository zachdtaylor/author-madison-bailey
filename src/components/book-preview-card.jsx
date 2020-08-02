import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import ClampLines from 'react-clamp-lines'

const BookPreviewCard = ({ linkTo, imgFluid, title, previewText }) => {
  return (
    <Link to={linkTo}>
      <div className="inline-block border-gray-700 rounded-md shadow-md overflow-hidden">
        <div className="grid grid-cols-3 grid-flow-col gap-3 ">
          <div className="row-span-5">
            <Img fluid={imgFluid} />
          </div>
          <div className="col-span-2 row-span-4 pr-2">
            <h1 className="text-2xl">{title}</h1>
            <ClampLines
              className="text-sm"
              text={previewText}
              lines={4}
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
