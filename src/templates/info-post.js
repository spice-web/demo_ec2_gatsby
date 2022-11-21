import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

// サイドバー
import Sidebar from "../components/Sidebar";
//  CSS
import * as Styles from "../styles/_info_post.module.scss";
import * as infoStyles from "../styles/_information.module.scss";


const InformationPost = ({ data }) => (

  <Layout>
    <Seo title={data.microcmsInformation.title} />

    {/* コンテナ */}
    <div className="content__wrap content__pd">
      <div className={infoStyles.inner}>

        <div className={infoStyles.mainInner}>
          {/* 表題ブロック */}
          <div className={infoStyles.title}>
            {data.microcmsInformation.title}
          </div>

          {/* 記事詳細ブロック */}
          <div className="">
            <div className="">
              {data.microcmsInformation.date}{` `}{data.microcmsInformation.category.category}
            </div>
            <div className="" dangerouslySetInnerHTML={{ __html: data.microcmsInformation.body }} />
          </div>
        </div>

        <Sidebar />

      </div>


    </div>
  </Layout>
)

export default InformationPost

export const query = graphql`
query($id: String!) {
  microcmsInformation(informationId: { eq: $id }) {
    informationId
    title
    date(formatString: "YYYY年MM月DD日")
    body
    category {
      category
    }
  }
}
`