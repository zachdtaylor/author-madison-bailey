import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Margin from '../components/margin'
import PageHeader from '../components/page-header'
import SEO from '../components/seo'

const Blog = () => {
  return (
    <Layout>
      <PageHeader title="Blog" />
      <Margin>
        <SEO title="Blog" />
      </Margin>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    blogPosts: allContentfulBlogPost {
      edges {
        node {
          title
          postDate
        }
      }
    }
  }
`
