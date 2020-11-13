import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Button from './button'
import RichText from './rich-text'

const NewestRelease = () => {
  const { books } = useQueryData()
  const newestBook = books.edges[0].node
  return (
    <div className="px-6 py-2">
      <div className="pt-8 pb-5">
        <hr />
      </div>
      <div className="md:mx-8 lg:mx-32">
        <h2 className="text-3xl pb-3 pr-12">Read My Newest Release</h2>
        <div className="border-gray-700 rounded-md shadow-md overflow-hidden md:grid md:grid-cols-3 md:gap-4 md:rounded-none md:shadow-none">
          <Img
            fluid={newestBook.coverArt.fluid}
            imgStyle={{ height: 'auto' }}
          />
          <div className="p-4 pb-0 md:pt-0 md:col-span-2">
            <h1 className="text-2xl font-bold">{newestBook.title}</h1>
            {RichText({ field: newestBook.description }).slice(0, 2)}
            <div className="text-right md:text-left">
              <Button.Link
                to={newestBook.fields.slug}
                className="mt-3 mb-5 md:my-3"
              >
                Read More
              </Button.Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewestRelease

function useQueryData() {
  return useStaticQuery(graphql`
    query {
      books: allContentfulBook(
        sort: { fields: [publicationDate], order: DESC }
        limit: 1
      ) {
        edges {
          node {
            title
            fields {
              slug
            }
            description {
              raw
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
  `)
}
