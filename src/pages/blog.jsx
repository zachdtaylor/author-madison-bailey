import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Margin from '../components/margin'
import PageHeader from '../components/page-header'
import SEO from '../components/seo'
import BlogPostPreview from '../components/blog-post-preview'

const Blog = ({ data: { blogPosts } }) => (
  <Layout>
    <PageHeader title="Blog" />
    <Margin>
      <SEO title="Blog" />
      {blogPosts.edges.map(({ node: blogPost }, index) => (
        <BlogPostPreview key={index} blogPost={blogPost} />
      ))}
    </Margin>
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    blogPosts: allContentfulBlogPost {
      edges {
        node {
          title
          postDate(formatString: "MMMM DD, YYYY")
          body {
            json
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
