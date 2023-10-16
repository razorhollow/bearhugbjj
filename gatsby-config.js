/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `BearhugSite`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "blog",
      "path": `${__dirname}/blog`,
    },
    __key: "pages"
  }]
};