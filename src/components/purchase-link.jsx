import React from 'react'
import 'twin.macro'

const PurchaseLink = ({ link, imgURL, altText }) => (
  <a href={link} tw="self-center">
    <img src={imgURL} alt={altText} tw="max-h-12" />
  </a>
)

export default PurchaseLink
