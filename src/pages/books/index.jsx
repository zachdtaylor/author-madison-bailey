import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import BookPreviewCard from '../../components/book-preview-card'
import Layout from '../../components/layout'
import Margin from '../../components/margin'
import PageHeader from '../../components/page-header'

const Books = ({ data }) => {
  return (
    <Layout>
      <PageHeader title="My Books" />
      <Margin>
        <SEO title="Books" />
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
