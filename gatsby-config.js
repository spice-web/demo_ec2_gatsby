require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `成田空港駐車場サンパーキング | 安心・信頼の顧客満足No.1`,
    description: `基本料金無し、深夜早朝・追加料金一切無し。安心の総額表示で「実質最安値」挑戦中！もちろんLCC対応・無料送迎バス付き！クレカ支払い対応`,
    author: `@spice Inc.`,
    siteUrl: `https://spice-web.jp/`,
  },
  plugins: [
    // smoothscroll
    `gatsby-plugin-smoothscroll`,
    // sass
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/faviconV2.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },

    // microCMS設定ここから
    // information
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: process.env.MICROCMS_APIKEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [{
          endpoint: 'information',
        }],
      },
    },
    // voice
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: process.env.MICROCMS_APIKEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [{
          endpoint: 'voice',
        }],
      },
    },
    // microCMSの設定ここまで

    // sitemap設定
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // output: `/sitemap-path.xml`, ファイル名 
        // exclude: [`/thanks`, `/category/*`],　除く
      }
    },

    // 不要なlodashライブラリを削除
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disablesFeatures: [`shorthand`]
      },
    },

  ],
}
