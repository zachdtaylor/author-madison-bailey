import React from 'react'

const PurchaseLink = ({ link, imgURL, altText }) => {
  return (
    <a href={link} className="self-center">
      <img src={imgURL} alt={altText} className="w-40" />
    </a>
  )
}

export default PurchaseLink
