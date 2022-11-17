import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Faq from "../components/faq"
import Wrap from "../components/grayContainer"


export default function FormPage() {

  return (

  <Layout>
    <Seo title="よくあるお問い合わせ" />
    <h2 class="headline--title">FAQ<span>よくあるお問い合わせ</span></h2>
    {/* コンテナ */}
    <div className="content__wrap content__pd">

      <Wrap>
        <div id="faq">
          <div className="content__inner--xs">

            <Faq />

          </div>
        </div>
      </Wrap>


      {/* content__inner */}

    </div>
      {/* コンテナ */}
  </Layout>
  )
}