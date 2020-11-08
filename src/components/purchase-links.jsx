import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PurchaseLink from './purchase-link'

const PurchaseLinks = ({
  amazonPurchaseLink,
  appleBooksPurchaseLink,
  barnesAndNoblePurchaseLink,
  googlePlayBooksPurchaseLink,
  koboPurchaseLink,
}) => {
  const data = useStaticQuery(graphql`
    query {
      amazonIcon: file(relativePath: { eq: "amazon-icon.png" }) {
        publicURL
      }
      appleBooksIcon: file(relativePath: { eq: "apple-books-icon.svg" }) {
        publicURL
      }
      barnesAndNobleIcon: file(
        relativePath: { eq: "barnes-and-noble-icon.png" }
      ) {
        publicURL
      }
      googlePlayBooksIcon: file(
        relativePath: { eq: "google-play-books-icon.png" }
      ) {
        publicURL
      }
      koboIcon: file(relativePath: { eq: "kobo-icon.jpg" }) {
        publicURL
      }
    }
  `)
  return (
    <div>
      <h2 className="text-xl mb-5">Buy it now</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-3">
        <PurchaseLink
          link={amazonPurchaseLink}
          imgURL={data.amazonIcon.publicURL}
          altText="Buy on Amazon"
        />
        <PurchaseLink
          link={appleBooksPurchaseLink}
          imgURL={data.appleBooksIcon.publicURL}
          altText="Get it on Apple Books"
        />
        <PurchaseLink
          link={barnesAndNoblePurchaseLink}
          imgURL={data.barnesAndNobleIcon.publicURL}
          altText="Buy on Barnes and Noble"
        />
        <PurchaseLink
          link={googlePlayBooksPurchaseLink}
          imgURL={data.googlePlayBooksIcon.publicURL}
          altText="Buy on Google Play Books"
        />
        <PurchaseLink
          link={koboPurchaseLink}
          imgURL={data.koboIcon.publicURL}
          altText="Buy on Kobo"
        />
      </div>
    </div>
  )
}

export default PurchaseLinks