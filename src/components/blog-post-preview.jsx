import React from 'react'
import { Link } from 'gatsby'
import RichText from './rich-text'

const BlogPostPreview = ({ blogPost }) => (
  <div>
    <Link to={blogPost.fields.slug}>
      <h1 className="text-pink text-3xl hover:text-pink-light transition duration-500 ease-in-out py-3 inline-block">
        {blogPost.title}
      </h1>
    </Link>
    <p>{blogPost.postDate}</p>
    {RichText({ field: blogPost.body })[0]}
  </div>
)

export default BlogPostPreview
