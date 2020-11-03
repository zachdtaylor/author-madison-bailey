import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Button from './button'

const HomeBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      bookImage: file(relativePath: { eq: "book-close-up.jpg" }) {
        publicURL
        childImageSharp {
          fixed {
            aspectRatio
          }
        }
      }
    }
  `)
  return (
    <div
      className="w-full h-0 relative mt-4"
      style={{
        backgroundImage: `url(${data.bookImage.publicURL})`,
        backgroundSize: 'cover',
        paddingTop: `${
          100 / data.bookImage.childImageSharp.fixed.aspectRatio
        }%`,
      }}
    >
      <div className="absolute inset-0 p-6 md:p-8">
        <div className="relative h-full md:bg-gray-100 md:bg-opacity-50 md:p-8 md:w-1/2">
          <h1 className="hidden md:text-7xl md:leading-tight md:mb-6 md:block">
            Madison
            <br />
            Bailey
          </h1>
          <h2 className="text-2xl xs:text-4xl md:text-3xl font-bold text-gray-800">
            Clean Romances for the
            <span className="text-red-300"> Hopeful Romantic</span>
          </h2>
          <div className="mt-5">
            <Button.Link to="/books">Check out my books</Button.Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner