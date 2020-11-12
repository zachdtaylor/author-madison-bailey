require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Author Madison Bailey`,
    description: `Madison Bailey is an author writing clean romances for the hopeful romantic.`,
    author: `@authormadisonbailey`,
  },
  plugins: [
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `author-madison-bailey`,
        short_name: `author`,
        start_url: `/`,
        background_color: `#ffb3b3`,
        theme_color: `#ffb3b3`,
        display: `minimal-ui`,
        icon: `src/images/Madison-Bailey-Submark.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      }
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
