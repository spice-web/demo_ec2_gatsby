import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo";


// CSS
import * as Styles from "../styles/_tokushoho.module.scss"

const TokushohoPage = () => (
  <Layout>
    <Seo title="特定商取引法に基づく表記" />
    <div className="content__wrap">
      <div className="content__inner --sm">
        <h2 class="headline--title">Notations are based<br />on the Specified Commercial<br />Transaction Act<span>特定商取引法に基づく表記</span></h2>
      </div>
    </div>

    <div className="content__wrap">
      {/* 特商法 */}
      <div className="content__inner --sm">
        <dl className={Styles.gridTokushoho}>
          <dt>運営事業者</dt>
          <dd>株式会社サン･ポート</dd>
          <dt>代表者名</dt>
          <dd>清宮 正博</dd>
          <dt>所在地</dt>
          <dd>千葉県成田市駒井野 134</dd>
          <dt>連絡先</dt>
          <dd>TEL : 0476-33-1155<br />FAX : 0476-33-1198</dd>
          <dt>販売価格</dt>
          <dd>各駐車場による（詳しくは料金一覧をご参照ください）</dd>
          <dt>販売価格以外の必要料金</dt>
          <dd>キャンセル料は条件により異なります。<br />詳しくはQ&Aをご覧ください。</dd>
          <dt>支払い時期と方法</dt>
          <dd>
            <ul>
              <li>受付にて精算<br />現金・クレジットカード・一部商品券</li>
              <li>Web 予約にて事前精算<br />クレジットカード<br />（カード会社からのご請求は予約日基準になります）</li>
            </ul>
          </dd>
          <dt>商品の引き渡し時期</dt>
          <dd>Web 予約完了のご案内がお客様画面上に表示された時点でご予約の成立となります。</dd>
          <dt>商品等の引渡後の返品の特約</dt>
          <dd>商品及びサービスの特性上、ご利用後における返品はできかねます。</dd>
          <dt>申込みの有効期限</dt>
          <dd>特にありません。</dd>
        </dl>
        {/* 特商法 */}

      </div>
      {/* inner  */}

    </div>
    {/* content__wrap */}
    


  </Layout>
)

export default TokushohoPage