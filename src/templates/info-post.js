import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ShareButtonList from "../components/ShareButtonList"

// サイドバー
import Sidebar from "../components/Sidebar"
//  CSS
import * as infoStyles from "../styles/_information.module.scss"
//　microCMS用画像CSS
import * as Styles from "../styles/_info_post.module.scss"

// 日付取得
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)
// dayjs.utc(publishedAt).tz("Asia/Tokyo").format("YYYY-MM-DD")

const InformationPost = ({ data }) => (
  <Layout>
    <Seo
      title={data.microcmsInformation.title}
      description={data.microcmsInformation.title}
    />

    {/* コンテナ */}
    <div className="content__wrap content__pd">
      <div className={infoStyles.inner}>
        <div className={infoStyles.mainInner}>
          {/* 表題ブロック */}
          <div className={infoStyles.title}>
            {data.microcmsInformation.title}
          </div>

          {/* 記事詳細ブロック */}
          <div className={Styles.post}>
            <div className="">
              {dayjs(data.microcmsInformation.date).format("YYYY年MM月DD日")}
              {` `}
              {data.microcmsInformation.category.category}
            </div>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: data.microcmsInformation.body,
              }}
            />
          </div>

          {/* シェアボタン */}
          <ShareButtonList
            title={data.microcmsInformation.title}
            url={`http://ec2-54-238-164-111.ap-northeast-1.compute.amazonaws.com/information/${data.microcmsInformation.informationId}`}
          />
        </div>

        <Sidebar />
      </div>
    </div>
  </Layout>
)

export default InformationPost

export const query = graphql`
  query ($id: String!) {
    microcmsInformation(informationId: { eq: $id }) {
      informationId
      title
      date
      body
      category {
        category
      }
    }
  }
`
