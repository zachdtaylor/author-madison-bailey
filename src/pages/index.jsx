import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <div>
    <SEO title="Home" />
    <Img fluid={data.headerImage.childImageSharp.fluid} />
    <div className="px-6 py-3">
      <h1 className="text-4xl font-bold text-gray-800">
        Clean Romances for the
        <span className="text-red-300"> Hopeful Romantic</span>
      </h1>
    </div>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: file(relativePath: { eq: "Madison-Bailey-Logo-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
