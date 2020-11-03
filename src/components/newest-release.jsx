import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Paragraph from '../components/paragraph'
import Button from './button'

const NewestRelease = () => {
  const data = useStaticQuery(graphql`
    query {
      hemiolaImage: file(relativePath: { eq: "hemiola-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="px-6 py-2">
      <div className="pt-8 pb-5">
        <hr />
      </div>
      <div className="md:mx-8 lg:mx-32">
        <h2 className="text-3xl pb-3 pr-12">Read My Newest Release</h2>
        <div className="border-gray-700 rounded-md shadow-md overflow-hidden md:grid md:grid-cols-2 md:gap-4 md:rounded-none md:shadow-none">
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
            <div className="text-right md:text-left">
              <Button.Link to="/books/hemiola" className="mt-3 mb-5 md:my-3">
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
