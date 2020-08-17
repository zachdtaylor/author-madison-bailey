import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Blog = () => {
  return (
    <Layout>
      <div className="m-5">
        <SEO title="Blog" />
        <h1 className="text-2xl font-bold pb-5">Blog</h1>
      </div>
    </Layout>
  )
}

export default Blog
