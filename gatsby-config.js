module.exports = {
  siteMetadata: {
    title: `BearhugSite`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-emotion", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-image", 
    "gatsby-plugin-mdx", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/"
      }
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "blog",
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "cardImages",
        path: `${__dirname}/src/images/card-images/`
      }
    }
  ]
};
