import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageTitle from "../components/PageTitle"
// サイドバー
import Sidebar from "../components/Sidebar"

// CSS
import * as Styles from "../styles/_information.module.scss"

const categoryPage = ({ data }) => (
  <Layout>
    <Seo
      title="カテゴリー別記事一覧"
      description="カテゴリー別記事一覧ページ"
    />
    {data.allMicrocmsCategory.edges.map(({ node }) => (
      <PageTitle>
        {node.categoryId}
        <span>{node.category}</span>
      </PageTitle>
    ))}
    <div className="content__wrap content__pd">
      <div className={Styles.inner}>
        <div className={Styles.mainInner}>
          {data.allMicrocmsInformation.edges.map(({ node }) => (
            <div className={Styles.article}>
              <div className={Styles.title}>
                <Link to={node.informationId}>{node.title}</Link>
              </div>
              <p className={Styles.excerpt}>{node.excerpt}</p>
              <ul className={Styles.footer}>
                <li>{node.date}</li>
                <li>{node.category.category}</li>
                <li className={Styles.more}>
                  <Link to={`/information/${node.informationId}`}>
                    MORE&nbsp;&#x226B;
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <Sidebar />
      </div>
    </div>
  </Layout>
)

export default categoryPage

export const query = graphql`
  query ($categoryId: String!) {
    allMicrocmsInformation(filter: { category: { id: { eq: $categoryId } } }) {
      edges {
        node {
          title
          excerpt
          informationId
          date(formatString: "YYYY年MM月DD日")
          category {
            category
            id
          }
        }
      }
    }
    allMicrocmsCategory(filter: { categoryId: { eq: $categoryId } }) {
      edges {
        node {
          category
          categoryId
        }
      }
    }
  }
`
