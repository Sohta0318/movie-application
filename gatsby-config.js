/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
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
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
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
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
        socialLogins: ["google", "email"], // Googleアカウント認証の場合はこう
        // 他の認証も使いたい場合は配列内に追記
        // socialLogins: ["google", "twitter", "facebook", "github"]
      },
    },
    {
      resolve: "gatsby-firesource", //プラグイン名
      options: {
        credential: require("./firebase.json"), //認証情報
        types: [
          {
            type: "Genre", // GraphQL上で表示される名前
            collection: "genre", // 作成したコレクション名
            map: doc => ({
              // ドキュメントデータ
              data: doc.data, // ドキュメントデータのフィールドname // ドキュメントデータのフィールドemail
            }),
          },
        ],
      },
    },
  ],
}
