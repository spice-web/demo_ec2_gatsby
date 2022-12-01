require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `成田空港駐車場サンパーキング | 安心・信頼の顧客満足No.1`,
    description: `基本料金無し、深夜早朝・追加料金一切無し。安心の総額表示で「実質最安値」挑戦中！もちろんLCC対応・無料送迎バス付き！クレカ支払い対応`,
    author: `@spice Inc.`,

    // 本番時変更
    siteUrl: `http://ec2-54-238-164-111.ap-northeast-1.compute.amazonaws.com/`,
  },
  plugins: [
    // // Google Analytics
    // [
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [process.env.GATSBY_TRACKING_ID],
    //   },
    // ],


    // tag manager
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GATSBY_GOOGLE_TAG_MANAGER,
    
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
    
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
    
        // Specify optional GTM environment details.
        // gtmAuth: "xNwDtuXDGlgZTO1P8TF2cg",
        // gtmPreview: "env-1",
        // dataLayerName: 'dataLayer',
      }
    },


    // smoothscroll
    `gatsby-plugin-smoothscroll`,
    // sass
    `gatsby-plugin-sass`,
    // sitemap
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        // 本番時変更
        siteUrl: `http://ec2-54-238-164-111.ap-northeast-1.compute.amazonaws.com`,
        stripQueryString: true,
      },
    },
    // 最適化
    // `gatsby-plugin-preact`,
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
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: process.env.MICROCMS_APIKEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [{
          endpoint: 'category',
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

    // サイトマップ設定
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
