import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Pagination } from "../components/pagination"
import PageTitle from "../components/PageTitle"

// import { Helmet } from "react-helmet"

// サイドバー
import Sidebar from "../components/Sidebar"
// CSS
import * as Styles from "../styles/_information.module.scss"

const InformationPage = ({ data }) => {
  return (
    <>
      {/* <Helmet>
      <link rel="canonical" href="https://example.com/dresses/green-dresses" />
    </Helmet> */}
      <Layout>
        <Seo title="HOME" />
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
                    <Link to={`/information/${node.informationId}`}>
                      {node.title}
                    </Link>
                  </div>
                  <p className={Styles.excerpt}>{node.excerpt}</p>
                  <ul className={Styles.footer}>
                    <li>{node.date}</li>
                    <li>
                      <Link to={`/category/${node.category.id}`}>
                        {node.category.category}
                      </Link>
                    </li>
                    <li className={Styles.more}>
                      <Link to={`/information/${node.informationId}`}>
                        MORE&nbsp;&#x226B;
                      </Link>
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
    </>
  )
}

export default InformationPage

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMicrocmsInformation(limit: $limit, skip: $skip) {
      totalCount
      edges {
        node {
          id
          informationId
          title
          excerpt
          category {
            category
            id
          }
          date(formatString: "YYYY年MM月DD日")
        }
      }
    }
  }
`
