import React from 'react'
import SEO from '../../components/seo'
import BookPreviewCard from '../../components/book-preview-card'

const Books = ({ data }) => {
  return (
    <div className="m-5">
      <SEO title="Books" />
      <h1 className="text-2xl font-bold pb-5">My Books</h1>
      <BookPreviewCard
        linkTo="/books/hemiola"
        previewText={`Micah Moore is young, handsome, and newly famous. Riding high
                from his recent success as the lead in a box office hit, the
                world is his oyster. To him every door is open, and there are no
                consequences he can’t charm his way out of.`}
        title="Hemiola"
        imgFluid={data.hemiolaCover.childImageSharp.fluid}
      />
    </div>
  )
}

export default Books

export const pageQuery = graphql`
  query {
    hemiolaCover: file(relativePath: { eq: "hemiola-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`