import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/_index.module.scss"

// carousel
import SlickSlider from "../components/SlickSlider"

const IndexPage = ( { data } ) => (
  <Layout>
    <Seo title="Home" />

    {/* スライダーブロック */}
    <SlickSlider />

    {/* 最新記事ブロック */}
    <div className="content__wrap">
      <div className="content__inner --sm">

        <h3 className="text-center">最新情報</h3>

        {data.allMicrocmsInformation.edges.map(({ node }) => (
          <div className={styles.info__list}>
            <div className="info__head">
              {node.category.category}{node.date}
            </div>
            <div className="info__center">
              <Link to={`/information/${node.informationId}`}>
                {node.title}
              </Link>
            </div>
            <div className="info__foot">
              <Link to={`/information/${node.informationId}`}>&gt;&gt;&gt; MORE</Link>
            </div>
          </div>
        ))}

        <p className="text-center"><Link to="/information">&gt;&gt;&gt; 記事一覧 &lt;&lt;&lt;</Link></p>

      </div>
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