import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";

import Wrap from "../components/grayContainer"
import PageTitle from "../components/PageTitle"
// GoogleMap
import GoogleMap from "../components/GoogleMap"

const GuidePage = () => (
  <Layout>
    <Seo title="サンパーキンについて" />
    <PageTitle>USER GUIDE<span>ご利用案内</span></PageTitle>
    <Wrap>
      <h3 className="sec__ttl">アクセスについて</h3>
      <GoogleMap />

      <h4 className="headline--greenLabel">カーナビゲーションセットの方法</h4>
      <div className="flex__wrap--md">
        <div className="flex-col-2--md content__inner inner--white text-center">
          <p>電話番号で検索する<br />☎ 0476-33-1166</p>
        </div>
        <div className="flex-col-2--md content__inner inner--white text-center">
          <p>住所で検索する<br />〒286-0121 千葉県成田市駒井野134</p>
        </div>
      </div>

      <p className="text-light text-sm">表示されない場合には、ANAクラウンプラザホテル成田（旧：全日空ホテル）を目印にしてセットしてください。</p>

      <h4 className="headline--greenLabel">東関東自動車道からの場合</h4>
      <p className="pg--md">東関東自動車道「成田I.C.」料金所の「成田市内」を出て国道295号を「空港方面」へ</p>

    </Wrap>
  </Layout>
)

export default GuidePage