import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageTitle from "../components/PageTitle"

// サイドバー
import Sidebar from "../components/Sidebar"
// ページネーション
import { Pagination } from "../components/pagination"
// CSS
import * as Styles from "../styles/_information.module.scss"

const InformationPage = ({ data }) => (
  <Layout>
    <Seo
      title="インフォーメーション"
      description="サンパーキングの新着情報やお得な情報を掲載中！"
    />
    <PageTitle>
      INFORMATION<span>新着情報</span>
    </PageTitle>
    <div className="content__wrap content__pd">
      <div className={Styles.inner}>
        {/* コンテナ */}
        <div className={Styles.mainInner}>
          {/* カードブロック */}
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
                  <Link to={node.informationId}>MORE&nbsp;&#x226B;</Link>
                </li>
              </ul>
            </div>
          ))}

          {/* ページネーション */}
          <Pagination totalCount={data.allMicrocmsInformation.totalCount} />
        </div>

        <Sidebar />
      </div>
    </div>
    {/* content__wrap */}
  </Layout>
)

export default InformationPage

export const query = graphql`
  query {
    allMicrocmsInformation(limit: 2, skip: 0, sort: { date: DESC }) {
      totalCount
      edges {
        node {
          category {
            category
          }
          date(formatString: "YYYY年MM月DD日")
          informationId
          title
          excerpt
        }
      }
    }
  }
`
