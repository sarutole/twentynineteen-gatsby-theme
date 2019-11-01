module.exports = {
  siteMetadata: {
    title: `Twenty Nineteen Starter`,
    description: `Gatsby starter site for Twenty Nineteen Gatsby Theme and Theme UI enabled.`,
    author: `@muhsinlk`,
    wordPressUrl: `http://dev-twenty-nineteen-gatsby-demo.pantheonsite.io`
  },
  plugins: [
    {
      resolve: "gatsby-theme-twentynineteen",
      options: {
        wordPressUrl: `http://dev-twenty-nineteen-gatsby-demo.pantheonsite.io`
      }
    }
  ]
};
