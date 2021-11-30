/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Movie",
    description: "movie application",
    author: "@sohta",
    person: { name: "sohta", age: 22 },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-nodejs`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `utils`,
        path: `${__dirname}/src/utils`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    {
      resolve: "gatsby-plugin-express",
      options: {
        output: "config/gatsby-express.json",
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i7cys4mk2o06`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`feature`],
        // singleTypes: [`home-page`, `contact`],
      },
    },
    {
      resolve: "gatsby-firesource", //プラグイン名
      options: {
        credential: require("./firebase.json"), //認証情報
        types: [
          {
            type: "Movie", // GraphQL上で表示される名前
            collection: "movies", // 作成したコレクション名
            map: doc => ({
              // ドキュメントデータ
              title: doc.title, // ドキュメントデータのフィールドname
              date: doc.date, // ドキュメントデータのフィールドemail
            }),
          },
        ],
      },
    },
  ],
}
