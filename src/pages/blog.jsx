import React from 'react'
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
