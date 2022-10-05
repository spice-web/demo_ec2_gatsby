import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const InformationPost = ({ data }) => (

  <Layout>
    <Seo title="data.microcmsInformation.title" />

    {/* コンテナ */}
    <div className="">

      {/* 表題ブロック */}
      <div className="">
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