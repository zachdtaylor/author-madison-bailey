import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import Paragraph from '../components/paragraph'

const IndexPage = ({ data }) => (
  <div className="pt-3 pb-5">
    <SEO title="Home" />
    <Img fluid={data.headerImage.childImageSharp.fluid} />
    <div className="px-6 py-2">
      <h1 className="text-4xl font-bold text-gray-800">
        Clean Romances for the
        <span className="text-red-300"> Hopeful Romantic</span>
      </h1>
      <div className="mt-5">
        <Link
          to="/books"
          className="inline-block bg-red-300 text-white py-3 px-4 rounded shadow-md"
        >
          Check out my books
        </Link>
      </div>
      <div className="pt-8 pb-5">
        <hr />
      </div>
      <h2 className="text-3xl pb-3 pr-12">Read My Newest Release</h2>
      <Link to="/books/hemiola">
        <div className="border-gray-700 rounded-md shadow-md overflow-hidden">
          <Img fluid={data.hemiolaImage.childImageSharp.fluid} />
          <div className="p-4 pb-0">
            <h1 className="text-2xl font-bold">Hemiola</h1>
            <Paragraph>
              Micah Moore is young, handsome, and newly famous. Riding high from
              his recent success as the lead in a box office hit, the world is
              his oyster. To him every door is open, and there are no
              consequences he can’t charm his way out of.
            </Paragraph>
            <Paragraph>
              But after a drunken car crash lands him in the hospital, Micah and
              his twin sister, Melanie, are sent to live with their aunt in
              Kimball Junction, Utah, for the ultimate attitude adjustment.
            </Paragraph>
          </div>
          <div className="text-red-300 text-right pr-5 pb-5">
            <p>Read More</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
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
  }
`
