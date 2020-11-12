import React from 'react'
import Layout from '../components/layout'
import Margin from '../components/margin'
import PageHeader from '../components/page-header'
import SEO from '../components/seo'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader title="Contact Me" />
    <Margin>
      <div className="text-center">
        <p className="text-xl">
          I would love to hear from you! Send me an email at
          hello@authormadisonbailey.com
        </p>
      </div>
    </Margin>
  </Layout>
)

export default Contact
