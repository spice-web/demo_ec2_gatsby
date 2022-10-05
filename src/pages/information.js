import * as React from "react"
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const InformationPage = ({ data }) => (
  <Layout>
    <Seo title="インフォーメーション" />

    {/* コンテナ */}
    <div className="">

      {/* 表題ブロック */}
      <div className="">
        インフォーメーション
      </div>

      {/* カードブロック */}
      {data.allMicrocmsInformation.edges.map(({ node }) => (
        <div className="">
          <div className="">
            <div className="">
              <Link to={node.informationId}>
                {node.title}
              </Link>
            </div>
            <div className="">
              {node.deta}{`  `}{node.category.category}
            </div>
            <p>{node.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default InformationPage

export const query = graphql`
query {
  allMicrocmsInformation(sort: {fields:[date], order:DESC}) {
    edges {
      node {
        body
        category {
          category
        }
        date(formatString: "YYYY年MM月DD日")
        informationId
        title
      }
    }
  }
}
`