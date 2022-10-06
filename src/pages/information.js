import * as React from "react"
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

// ページネーション
import { Pagination } from "../components/pagination"

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
              {node.date}{`  `}{node.category.category}
            </div>
            <p>{node.excerpt}</p>
          </div>
        </div>
      ))}
    </div>

    {/* ページネーション */}
    <Pagination totalCount={data.allMicrocmsInformation.totalCount} />

  </Layout>
)

export default InformationPage

export const query = graphql`
query {
  allMicrocmsInformation(limit:2, skip:0, sort: {fields:[date], order:DESC}) {
    totalCount
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