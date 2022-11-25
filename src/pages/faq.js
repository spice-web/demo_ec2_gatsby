import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Faq from "../components/faq"
import Wrap from "../components/grayContainer"


export default function FormPage() {

  return (

  <Layout>
    <Seo
      title="よくあるお問い合わせ"
      description="サンパーキングを予約・ご利用するにあったてご不明な点がございましたら、こちらをご確認ください。"
    />
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