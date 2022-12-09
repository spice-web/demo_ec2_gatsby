require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `成田空港駐車場サンパーキング | 安心・信頼の顧客満足No.1`,
    description: `基本料金無し、深夜早朝・追加料金一切無し。安心の総額表示で「実質最安値」挑戦中！もちろんLCC対応・無料送迎バス付き！クレカ支払い対応`,
    author: `@spice Inc.`,
    // 
    // 本番時変更
    // 
    siteUrl: `http://ec2-54-238-164-111.ap-northeast-1.compute.amazonaws.com`,
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
        // id: `GTM-T43LP9C`,
    
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

    // robots
    // {
    //   resolve: `gatsby-plugin-robots-txt`,
    //   option: {
    //     host: `https://corp.sunparking.co.jp/`,
    //     sitemap: `https://corp.sunparking.co.jp/sitemap-index.xml`,
    //     policy: [{ userAgent: `*`, allow: `/`}]
    //   }
    // },
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
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     // This will impact how browsers show your PWA/website
    //     // https://css-tricks.com/meta-theme-color-and-trickery/
    //     // theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/faviconV2.png`, // This path is relative to the root of the site.
    //   },
    // },

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },

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


    // PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sunparking`,
        short_name: `sunparking`,
        start_url: `/?utm_source=homescreen`,
        background_color: '#333',
        theme_color: `#32B400`,
        display: 'minimal-ui',  // アプリのスタイル
        icon: `src/images/icon-512x512.png`,
        "icons": [
          {
            "src": "src/images/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          // サイズ別のアイコン設定
        ],
      },
    },
    `gatsby-plugin-offline`,

    // 不要なlodashライブラリを削除
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disablesFeatures: [`shorthand`]
      },
    },
    {
    // リダイレクト設定
    resolve: 'gatsby-plugin-htaccess',
    options: {
        ErrorDocument: `ErrorDocument 404 /404/index.html`,
        custom: ``,
      },
    },

  ],
}
