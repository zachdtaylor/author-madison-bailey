import React from 'react'
import SEO from '../../components/seo'
import BookPreviewCard from '../../components/book-preview-card'
import Layout from '../../components/layout'
import Margin from '../../components/margin'

const Books = ({ data }) => {
  return (
    <Layout>
      <Margin>
        <SEO title="Books" />
        <h1 className="text-2xl font-bold pb-5">My Books</h1>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
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
      </Margin>
    </Layout>
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
