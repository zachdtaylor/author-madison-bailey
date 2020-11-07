const path = require('path')

function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const bookDetailTemplate = path.resolve('src/templates/book-detail.jsx')
  const result = await graphql(`
    {
      allContentfulBook {
        edges {
          book: node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query')
    return
  }
  result.data.allContentfulBook.edges.forEach(({ book }) => {
    createPage({
      path: book.fields.slug,
      component: bookDetailTemplate,
      context: { id: book.id }
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `ContentfulBook`) {
    createNodeField({
      node,
      name: `slug`,
      value: `/books/${slugify(node.title)}`,
    })
  }
}