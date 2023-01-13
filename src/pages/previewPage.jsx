import * as React from "react"
import { useState, useEffect } from "react"
import { getSearchParams, getSearchParams } from "gatsby-query-params"
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

  const contentId = queryParams.contentId
  const draftKey = queryParams.draftKey

  const [postData, setPostData] = useState("initialState") //最初、postDataにはnullが入ります。

  useEffect(() => {
    if (!postData) {
      fetch(
        `https://spice-web.microcms.io/api/v1/information/${contentId}?draftKey=${draftKey}`,
        {
          headers: {
            "X-API-KEY": `${process.env.MICROCMS_APIKEY}`,
            //
          },
        }
      )
        .then(response => {
          if (response.ok) {
            return response.json()
          }
        })
        .then(json => {
          postData = setPostData(json) //ここで、postDataに取得したコンテンツが格納されます。
        })
    } else {
      return function cleanup() {
        console.log("done")
      }
    }
  })
  return (
    <Layout>
      <Seo
        title={postData ? postData.title : "見つかりませんでした"}
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
