import * as React from "react"
import { useState, useEffect } from "react"
import { getSearchParams } from "gatsby-query-params"
//...その他コンポーネントなど

import Seo from "../components/seo"
import Layout from "../components/layout"

function PreviewPage() {
  //microCMS側に設定するurlはhttps://xxxxxx.com/previewPage/?contentId={CONTENT_ID}&draftKey={DRAFT_KEY}みたいな感じ
  const queryParams = getSearchParams()

  //queryParamsには
  //{contentId:"xxxx",
  //draftKey:"xxxx"}
  //というようなデータが入ります。

  const params = new URLSearchParams(window.location.search)
  const contentId = params.get("contentId")
  const draftKey = params.get("draftKey")

  // const contentId = queryParams.contentId
  // const draftKey = queryParams.draftKey

  const [postData, setPostData] = useState(null) //最初、postDataにはnullが入ります。

  useEffect(() => {
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
        <div
          dangerouslySetInnerHTML={{
            __html: postData ? postData.title : "見つかりませんでした",
          }}
        ></div>
      </div>
    </Layout>
  )
}

export default PreviewPage
