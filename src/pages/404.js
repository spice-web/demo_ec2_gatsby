import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="content__wrap content__pd">
      <div className="content__inner --md">
      <h1 className="text-center">404: Not Found</h1>
      <h2 className="text-center">ページがみつかりませんでした</h2>
      <p className="text-center">入力されたURLをもう一度ご確認ください。</p>
      </div>
    </div>
    
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
