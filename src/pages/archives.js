import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArchivesPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>カテゴリー一覧</p>
    <ul>
      {data.allMicrocmsInformation.group.map(cate => (
        <li key={cate.distinct}>
          <Link to={`/information/${cate.distinct}`}>{cate.distinct}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default ArchivesPage

export const query = graphql`
  query {
    allMicrocmsInformation {
      group(field: category___id) {
        totalCount
        distinct(field: category___id)
      }
    }
  }
`


