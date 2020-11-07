const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const bookDetailTemplate = path.resolve('src/templates/book-detail.jsx')
  const result = await graphql(`
    {
      allContentfulBook {
        edges {
          book: node {
            id
            title
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
      path: `/books/${book.title.toLowerCase()}`,
      component: bookDetailTemplate,
      context: { id: book.id }
    })
  })
}
