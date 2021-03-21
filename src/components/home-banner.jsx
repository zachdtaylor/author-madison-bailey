import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Button from './button'
import BackgroundImage from 'gatsby-background-image'
import 'twin.macro'

const HomeBanner = () => {
  const { bookImage } = useQueryData()
  return (
    <BackgroundImage
      fluid={bookImage.childImageSharp.fluid}
      tw="w-full h-0 relative mt-4"
      style={{
        backgroundSize: 'cover',
        paddingTop: `${100 / bookImage.childImageSharp.fluid.aspectRatio}%`,
      }}
    >
      <div tw="absolute inset-0 py-4 px-6 md:p-8">
        <div tw="relative h-full md:bg-gray-100 md:bg-opacity-50 md:p-8 md:w-1/2">
          <h1 tw="hidden md:text-7xl md:leading-tight md:mb-6 md:block">
            Madison
            <br />
            Bailey
          </h1>
          <h2 tw="text-2xl xs:text-4xl md:text-3xl font-bold text-gray-800">
            Clean Romances for the
            <span tw="text-primary-dark"> Hopeful Romantic</span>
          </h2>
          <div tw="mt-5">
            <Button.Link to="/books">Check out my books</Button.Link>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default HomeBanner

function useQueryData() {
  return useStaticQuery(graphql`
    query {
      bookImage: file(relativePath: { eq: "book-close-up.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
            aspectRatio
          }
        }
      }
    }
  `)
}
