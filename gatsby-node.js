exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

// インフォメーション詳細ページの作成
const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
    {
      allMicrocmsInformation {
        totalCount
        edges {
          node {
            informationId
          }
        }
      }
    }
    `
  ).then(result => {
    if(result.errors) {
      throw result.errors
    }

    result.data.allMicrocmsInformation.edges.forEach( edge => {
      createPage({
        path: `/information/${edge.node.informationId}`,
        component: path.resolve(`./src/templates/info-post.js`),
        context: {
          id: edge.node.informationId
        },
        defer: false,
      })
    })

    // ページネーション
    const PerPage = 2
    const pageCount = Math.ceil(result.data.allMicrocmsInformation.totalCount / PerPage)

    for (let i = 0; i < pageCount; i++) {
      createPage({
        path: `/information/page/${i + 1}`,
        component: path.resolve("./src/templates/information-page.js"),
        context: {
          limit: PerPage,
          skip: i * PerPage,
        },
      })
    }
  })
}

// カテゴリー別記事一覧ページの作成