import React from 'react'
import Layout from '../components/layout'
import Margin from '../components/margin'
import SEO from '../components/seo'

const Blog = () => {
  return (
    <Layout>
      <Margin>
        <SEO title="Blog" />
        <h1 className="text-2xl font-bold pb-5">Blog</h1>
      </Margin>
    </Layout>
  )
}

export default Blog
