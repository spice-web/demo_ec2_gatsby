import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ( {data} ) => (
  <Layout>
    <Seo title="Home" />

    {/* 最新記事ブロック */}
    <div className="">
      <div className="">
        最新情報
      </div>
      {data.allMicrocmsInformation.edges.map(({ node }) => (
        <div className="">
          <Link to={`/information/${node.informationId}`}>
            {node.date}{`   `} {node.title}
          </Link>
        </div>
      ))}
    </div>

  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
query {
  allMicrocmsInformation(limit: 4, sort: {fields:date, order:DESC }) {
    edges {
      node {
        informationId
        title
        date(formatString: "YYYY年MM月DD日")
        category {
          category
        }
      }
    }
  }
}
`