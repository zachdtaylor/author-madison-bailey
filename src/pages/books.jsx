import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import BookPreviewCard from '../components/book-preview-card'
import Layout from '../components/layout'
import Margin from '../components/margin'
import PageHeader from '../components/page-header'

const Books = ({ data: { books } }) => (
  <Layout>
    <PageHeader title="My Books" />
    <Margin>
      <SEO title="My Books" />
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {books.edges.map(({ node: book }) => (
          <BookPreviewCard
            linkTo={book.fields.slug}
            previewText={book.description.content[0].content[0].value}
            title={book.title}
            imgFluid={book.coverArt.fluid}
          />
        ))}
      </div>
    </Margin>
  </Layout>
)

export default Books

export const pageQuery = graphql`
  query {
    books: allContentfulBook(sort: { fields: [publicationDate], order: DESC }) {
      edges {
        node {
          id
          title
          fields {
            slug
          }
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
    }
  }
`
