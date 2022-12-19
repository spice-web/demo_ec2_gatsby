import React, { useState, useEffect } from "react"
import { getSearchParams } from "gatsby-query-params"
//...その他コンポーネントなど

function previewPage() {
  //microCMS側に設定するurlはhttps://xxxxxx.com/previewPage/?contentId={CONTENT_ID}&draftKey={DRAFT_KEY}みたいな感じ
  const queryParams = getSearchParams()

  //queryParamsには
  //{contentId:"xxxx",
  //draftKey:"xxxx"}
  //というようなデータが入ります。

  const contentId = queryParams.contentId
  const draftKey = queryParams.draftKey

  const [postData, setPostData] = useState(null) //最初、postDataにはnullが入ります。

  useEffect(() => {
    if (!postData) {
      fetch(
        `https://spice-web.microcms.io/api/v1/blogs/${contentId}?draftKey=${draftKey}`,
        {
          headers: {
            "X-API-KEY": "uPiwKCQW7hJHydhbPrZsn0iXGG908ipjfai7",
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
    <div
      dangerouslySetInnerHTML={{
        __html: postData ? postData.sentence : "",
      }}
    ></div>
  )
}

export default previewPage