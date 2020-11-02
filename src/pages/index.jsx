import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import Paragraph from '../components/paragraph'
import Layout from '../components/layout'
import Button from '../components/button'

const IndexPage = ({ data }) => (
  <Layout noHeader>
    <div className="pt-3 pb-5">
      <SEO title="Home" />
      <Img
        fluid={data.headerImage.childImageSharp.fluid}
        className="md:w-48 md:mx-auto"
      />
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
      <div className="px-6 py-2">
        <div className="pt-8 pb-5">
          <hr />
        </div>
        <div className="md:mx-32">
          <h2 className="text-3xl pb-3 pr-12">Read My Newest Release</h2>
          <div className="border-gray-700 rounded-md shadow-md overflow-hidden md:grid md:grid-cols-2 md:gap-4 md:rounded-none md:shadow-none">
            <Img fluid={data.hemiolaImage.childImageSharp.fluid} />
            <div className="p-4 pb-0">
              <h1 className="text-2xl font-bold">Hemiola</h1>
              <Paragraph>
                Micah Moore is young, handsome, and newly famous. Riding high
                from his recent success as the lead in a box office hit, the
                world is his oyster. To him every door is open, and there are no
                consequences he can’t charm his way out of.
              </Paragraph>
              <Paragraph>
                But after a drunken car crash lands him in the hospital, Micah
                and his twin sister, Melanie, are sent to live with their aunt
                in Kimball Junction, Utah, for the ultimate attitude adjustment.
              </Paragraph>
              <div className="text-right md:text-left">
                <Button.Link to="/books/hemiola" className="mt-3 mb-5 md:my-3">
                  Read More
                </Button.Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query ImageQuery {
    headerImage: file(relativePath: { eq: "Madison-Bailey-Logo-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hemiolaImage: file(relativePath: { eq: "hemiola-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bookImage: file(relativePath: { eq: "book-close-up.jpg" }) {
      publicURL
      childImageSharp {
        fixed {
          aspectRatio
        }
      }
    }
  }
`
