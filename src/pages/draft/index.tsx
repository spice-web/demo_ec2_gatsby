// pages/draft.tsx

import React, { useEffect, useState } from "react"
import { PageProps } from "gatsby"
import queryString from "query-string"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import NewsPost from "../../../components/newsPost"

const NewsPage: React.FC<PageProps<GatsbyTypes.NewsQuery>> = ({ location }) => {
  const { contentId, draftKey } = queryString.parse(location.search)
  const [data, setData] = useState<GatsbyTypes.NewsQuery | null>(null)

  useEffect(() => {
    fetch(
      `https://spice-web.microcms.io/api/v1/information/${contentId}?draftKey=${draftKey}`,
      {
        headers: {
          "X-MICROCMS-API-KEY": `${process.env.MICROCMS_APIKEY}`,
        },
      }
    )
      .then(res => res.json())
      .then(res => setData({ microcmsInformation: res })) // ※1
  }, []) // ※2

  if (data === null) {
    return null
  }

  return (
    <Layout>
      <Seo
        title={data.microcmsInformation?.title}
        description={data.microcmsInformation?.description}
      />
      {/* <NewsPost data={data} /> // ※3 */}
    </Layout>
  )
}

export default NewsPage
