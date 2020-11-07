import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import Paragraph from '../components/paragraph'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'

const BookDetail = ({ data: { book } }) => (
  <Layout>
    <PageHeader title={book.title} />
    <SEO title={book.title} />
    <div className="m-5 sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:mx-32">
      <div>
        <div className="border-gray-700 rounded-md shadow-lg overflow-hidden">
          <Img fluid={book.coverArt.fluid} />
        </div>
      </div>
      <div className="p-3 pt-5 sm:pt-0 md:col-span-2">
        {book.description.content.map(({ content }, index) => {
          return <Paragraph key={index}>{content[0].value}</Paragraph>
        })}
      </div>
    </div>
  </Layout>
)

export default BookDetail

export const pageQuery = graphql`
  query($id: String!) {
    book: contentfulBook(id: { eq: $id }) {
      title
      description {
        content {
          content {
            value
          }
        }
      }
      coverArt {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
