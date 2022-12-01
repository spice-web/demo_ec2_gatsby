import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";

const FormFlex = () => (
  <Layout>
    <Seo title="お問い合わせありがとうございます。" />

    {/* コンテナ */}
    <div className="content__wrap content__pd">
      <div className="content__inner --sm">
        <h2 className="text-center mb--sm">お問い合わせ<br className="br_maxsm"/>ありがとうございます。</h2>
        <p className="text-center mb--sm">お送り頂きました内容を確認の上、折り返しご連絡させて頂きます。なお、お急ぎの場合は電話でもご相談を受け付けております。0476-33-1123までご遠慮なくご相談ください。</p>
        <p className="text-center text-md text-deep-gr"><Link to="/">トップへ戻る</Link></p>
      </div>
    </div>    
  </Layout>
)

export default FormFlex