import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";
import PageTitle from "../components/PageTitle";
import { StaticImage } from "gatsby-plugin-image";
// 価格表
import PriceChart from "../components/price_chart-sub"

const PricePage = () => (
  <Layout>
    <Seo title="料金について" />
    
    <PageTitle>PRICE<span>料金について</span></PageTitle>

  <div className="content__wrap">
    <div className="content__inner --md">
      <StaticImage src="../images/top/banner_campaign.jpg"  className="br_md"></StaticImage>
      <StaticImage src="../images/top/banner_campaign_sp.jpg" className="br_maxmd"></StaticImage>
      <h3 className="text-lg text-center text-gr text-bold">サンパーキング成田店は、<br className="br-sp" /><span className="text-pk">安心の総額表示</span>で<br className="br-sp" /><span className="nowrap">実質最安値に挑戦中！</span></h3>
      <PriceChart />
    </div>
    
    {/* オプションサービス */}
    <div className="bg--light-green">
      <h3>OPTION SERVICE<span>オプションサービス</span></h3>
      <div className="content__inner --lg">
        <div className="flex__wrap flex__wrap--md">
          <div className="flex-col-4--md flex-col-2">
            <StaticImage src="../images/price/option001.jpg" />
            <dl className="text-deep-gr">
              <dt className="text-bold">洗車・カーメンテナンス</dt>
              <dd>お帰りに合わせてお車をキレイに仕上げてお返しできます。お車の気になる点もご相談ください。</dd>
            </dl>
          </div>
          <div className="flex-col-4--md flex-col-2">
            <StaticImage src="../images/price/option002.jpg" />
            <dl className="text-deep-gr">
              <dt className="text-bold">電気自動車充電</dt>
              <dd>200Vの普通充電器と、テスラ充電用のデスティネーションチャージングを設置。</dd>
            </dl>
          </div>
          <div className="flex-col-4--md flex-col-2">
            <StaticImage src="../images/price/option003.jpg" />
            <dl className="text-deep-gr">
              <dt className="text-bold">海外・国内旅行保険</dt>
              <dd>旅行保険もお任せください。最短1分！お客様の旅の安心のために保険をご用意しています。</dd>
            </dl>
          </div>
          <div className="flex-col-4--md flex-col-2">
            <StaticImage src="../images/price/option004.jpg" />
            <dl className="text-deep-gr">
              <dt className="text-bold">空港お届けサービス</dt>
              <dd>出発時やお帰り時に、スタッフがお車をお届けするサービスです。</dd>
            </dl>
          </div>
        </div>
      </div>

    </div>
    {/* オプションサービス */}

    <div className="content__inner">
      <h3 className="headline--greenLabel">お支払い方法</h3>
      <div>
        <h4>WEB予約でカード事前決済可能</h4>
        <p>VISA・MasterCard・JCB・AMEX・DinersではWEB予約時にカード決済ができます。カード決済のタイミングはWEBで予約された時点で決済されます。</p>
        <StaticImage src="../images/price/logo/visa.png" alt="VISA" />
        <StaticImage src="../images/price/logo/master.png" alt="master card" />
        <StaticImage src="../images/price/logo/american.png" alt="AMERICAN EXPRESS" />
        <StaticImage src="../images/price/logo/jcb.png" alt="JCB" />
        <StaticImage src="../images/price/logo/diners.png" alt="Diners Club" />
      </div>

      <div>
        <h4>ご来店時は、現金、カード、 PayPayなどでお支払い可能</h4>
        <p>JCB・VISA・ダイナース・DC・UFJ・ニコス・MASTER・AMEX・UC・Orico・CF・セゾン・イオン・JAL・TS CUBIC・OMC・楽天カード ・銀聯カード・PayPayなど、各種決済が可能です。</p>
        <StaticImage src="../images/price/logo/jcb.png" alt="JCB" />
        <StaticImage src="../images/price/logo/visa.png" alt="VISA" />
        <StaticImage src="../images/price/logo/diners.png" alt="Diners Club" />
        <StaticImage src="../images/price/logo/dc.png" alt="DC" />
        <StaticImage src="../images/price/logo/mufg.png" alt="MUFG" />
        <StaticImage src="../images/price/logo/nicos.png" alt="nicos card" />
        <StaticImage src="../images/price/logo/master.png" alt="master card" />
        <StaticImage src="../images/price/logo/american.png" alt="AMERICAN EXPRESS" />
        <StaticImage src="../images/price/logo/uc.png" alt="uc" />
        <StaticImage src="../images/price/logo/orico.png" alt="orico card" />
        <StaticImage src="../images/price/logo/cf.png" alt="CF card" />
        <StaticImage src="../images/price/logo/saison.png" alt="saison card"/>
        <StaticImage src="../images/price/logo/aeon.png" alt="aeon card" />
        <StaticImage src="../images/price/logo/jal.png" alt="JAL" />
        <StaticImage src="../images/price/logo/ts.png" alt="TS card" />
        <StaticImage src="../images/price/logo/omc.png" alt="OMC card" />
        <StaticImage src="../images/price/logo/union.png" alt="union card" />
        <StaticImage src="../images/price/logo/paypay.png" alt="paypay card" />
        <StaticImage src="../images/price/logo/rakuten.png" alt="Rakuten card" />
        <StaticImage src="../images/price/logo/paypal.png" alt="Paypal card" />
        <StaticImage src="../images/price/logo/amazonpay.png" alt="amazonpay card" />
        <StaticImage src="../images/price/logo/applepay.png" alt="apple card" />
        <StaticImage src="../images/price/logo/ufj.png" alt="UFJ card" />
        <StaticImage src="../images/price/logo/life.png" alt="Life card" />
        <StaticImage src="../images/price/logo/jaccs.png" alt="Jaccs card" />
        <StaticImage src="../images/price/logo/cedyna.png" alt="cedyna card" />
        <StaticImage src="../images/price/logo/discover.png" alt="discover card" />
        <StaticImage src="../images/price/logo/redy.png" alt="R edy card" />
        <StaticImage src="../images/price/logo/payeasy.png" alt="Pay Easy card" />
        <StaticImage src="../images/price/logo/yahoo.png" alt="Yahoo ウォレット" />
      </div>

      <h3 className="headline--greenLabel">マイル・ポイント</h3>
      <h4>マイル・ポイントを ためるコースもあります</h4>
      <p>提携マイル・ポイントをためるには、料金ご精算時にマイル積算希望の旨をお申し出ください。※通常料金でのご利用のみマイル対象となります。</p>
      <figure>
        <StaticImage src="../images/price/logo/mileage.png" alt="R edy card" />
        <figcaption>JAL マイレージバンク</figcaption>
      </figure>
      <figure>
        <StaticImage src="../images/price/logo/jal_card.png" alt="Pay Easy card" />
        <figcaption>JALカード ショッピングマイル</figcaption>
      </figure>
      <figure>
        <StaticImage src="../images/price/logo/ts.png" alt="Yahoo ウォレット" />
        <figcaption>TS CUBIC カード</figcaption>
      </figure>

      <Link to="/more-information">更に詳しく</Link>
      
      




    </div>

    </div>
    {/* content__wrap */}

  </Layout>
)

export default PricePage