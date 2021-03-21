import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import NewestRelease from '../components/newest-release'
import HomeBanner from '../components/home-banner'
import 'twin.macro'

const IndexPage = ({ data }) => (
  <Layout noHeader>
    <div tw="pt-3 pb-5">
      <SEO title="Home" />
      <Img
        fluid={data.headerImage.childImageSharp.fluid}
        tw="md:w-48 md:mx-auto"
      />
      <HomeBanner />
      <NewestRelease />
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query ImageQuery {
    headerImage: file(relativePath: { eq: "Madison-Bailey-Logo-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
