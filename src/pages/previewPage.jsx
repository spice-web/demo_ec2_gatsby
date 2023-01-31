import * as React from "react"
import { useState, useEffect } from "react"
import { getSearchParams } from "gatsby-query-params"
import queryString from "query-string"

//...その他コンポーネントなど
import Seo from "../components/seo"
import Layout from "../components/layout"
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

function PreviewPage() {
  //microCMS側に設定するurlはhttps://xxxxxx.com/previewPage/?contentId={CONTENT_ID}&draftKey={DRAFT_KEY}みたいな感じ
  const queryParams = getSearchParams()

  //queryParamsには
  //{contentId:"xxxx",
  //draftKey:"xxxx"}
  //というようなデータが入ります。

  // const contentId = queryParams.contentId
  // const draftKey = queryParams.draftKey

  const [postData, setPostData] = useState(null) //最初、postDataにはnullが入ります。

  useEffect(() => {
    const { contentId, draftKey } = queryString.parse(location.search)
    if (!postData) {
      fetch(
        `https://spice-web.microcms.io/api/v1/information/${contentId}?draftKey=${draftKey}`,
        // `https://spice-web.microcms.io/api/v1/information/9cnm_1-88?draftKey=Y0yp3ktSAo`,

        {
          headers: {
            "X-MICROCMS-API-KEY": "uPiwKCQW7hJHydhbPrZsn0iXGG908ipjfai7",
            //
          },
        }
      )
        .then(response => {
          if (!response.ok) {
            console.error("サーバーエラー")
          }
          return response.json()
        })
        .then(json => {
          postData = setPostData(json)
        })
    } else {
      return function cleanup() {
        console.log("done")
      }
    }
  }, [])
  return (
    <Layout>
      <Seo
        title={postData ? postData.title : "見つかりませんでした."}
        description={postData ? postData.excerpt : "見つかりませんでした"}
      />
      {/* コンテナ */}
      <div className="content__wrap content__pd">
        <div className={infoStyles.inner}>
          <div className={infoStyles.mainInner}>
            {/* 表題ブロック */}
            <div
              className={infoStyles.title}
              dangerouslySetInnerHTML={{
                __html: postData ? postData.title : "タイトルなし",
              }}
            ></div>

            {/* 記事詳細ブロック */}
            <div className={Styles.post}>
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: postData ? postData.date : "日付なし",
                }}
              ></div>
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: postData ? postData.body : "テキスト無し",
                }}
              />
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export default PreviewPage
