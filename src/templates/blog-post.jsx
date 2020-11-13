import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'
import RichText from '../components/rich-text'
import Margin from '../components/margin'

const BlogPost = ({ data: { blogPost } }) => (
  <Layout>
    <PageHeader title={blogPost.title} />
    <SEO title={blogPost.title} />
    <Margin>
      <div>
        <div className="p-3 pt-5 sm:pt-0 md:col-span-2">
          <RichText field={blogPost.body} />
        </div>
      </div>
    </Margin>
  </Layout>
)

export default BlogPost

export const pageQuery = graphql`
  query($id: String!) {
    blogPost: contentfulBlogPost(id: { eq: $id }) {
      title
      body {
        raw
      }
    }
  }
`
