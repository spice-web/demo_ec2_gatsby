import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from "../components/layout"
import Seo from '../components/seo';
import { Pagination } from '../components/pagination';
import PageTitle from '../components/PageTitle';

// サイドバー
import Sidebar from "../components/Sidebar";
// CSS
import * as Styles from "../styles/_information.module.scss"

const InformationPage = ({ data }) => {
  return (
    <Layout>
      <Seo title='HOME' />
      <PageTitle>INFORMATION<span>新着情報</span></PageTitle>
      <div className="content__wrap">
      <div className={Styles.inner}>

      {/* コンテナ */}
      <div className={Styles.mainInner}>
        {/* カードブロック */}
        {data.allMicrocmsInformation.edges.map(({ node }) => (
          <div className={Styles.article}>
              <div className={Styles.title}>
                <Link to={node.informationId}>
                  {node.title}
                </Link>
              </div>
              <p className={Styles.excerpt}>{node.excerpt}</p>
                <ul className={Styles.footer}>
                  <li>{node.date}</li>
                  <li>{node.category.category}</li>
                  <li className={Styles.more}><Link to={node.informationId}>MORE&nbsp;&#x226B;</Link></li>
                </ul>
          </div>
        ))}

        {/* ページネーション */}
        <Pagination totalCount={data.allMicrocmsInformation.totalCount} />
      </div>

      <Sidebar />
      </div>



    </div>{/* content__wrap */}

    </Layout>
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
          }
          date(formatString: "YYYY年MM月DD日")
        }
      }
    }
  }

`