import React from 'react'

const PurchaseLink = ({ link, imgURL, altText }) => {
  return (
    <a href={link} className="self-center">
      <img src={imgURL} alt={altText} className="max-h-12" />
    </a>
  )
}

export default PurchaseLink
