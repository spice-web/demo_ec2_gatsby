import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";
import PageTitle from "../components/PageTitle";
import { StaticImage } from "gatsby-plugin-image";
// 価格表
import PriceChart from "../components/price_chart-sub"
// css
import * as Styles from "../styles/_price.module.scss"

// 予約リンク
const reserve = "/"

const PricePage = () => (
  <Layout>
    <Seo title="料金について" />
    
    <PageTitle>PRICE<span>料金について</span></PageTitle>

  <div className="content__wrap content__pd">
    <div className="content__inner --md">
      <div className="mb--lg">
        <Link to={reserve}>
          <div className="br_md">
            <StaticImage src="../images/top/banner_campaign.jpg"  />
          </div>
          <div className="br_maxmd">
            <StaticImage src="../images/top/banner_campaign_sp.jpg" />
          </div>          
        </Link>
      </div>
      <h3 className="text-lg text-center text-deep-gr text-bold mb--lg">サンパーキング成田店は、<br className="br_maxmd" /><span className="text-pk">安心の総額表示</span>で<br className="br_maxmd" /><span className="nowrap">実質最安値に挑戦中！</span></h3>
      <PriceChart />
    </div>
  </div>
  {/* content__wrap */}
    
    {/* オプションサービス */}
    <div className={Styles.option}>
      <h3 className="sec__ttl text-regular">OPTION SERVICE<span className="sec__ttl--sub text-normal mb--md">オプションサービス</span></h3>
      <div className={Styles.inner}>
        <div className={Styles.flex}>
          <div className={Styles.box}>
            <figure className={Styles.img}>
              <StaticImage
                src="../images/price/option003.jpg"
                alt="洗車・カーメンテナンス"
              />
            </figure>
            <dl className={Styles.text}>
              <dt className="text-bold">洗車・カーメンテナンス</dt>
              <dd>お帰りに合わせてお車をキレイに仕上げてお返しできます。お車の気になる点もご相談ください。</dd>
            </dl>
            <Link to="/option#maintenance" className={Styles.link}>詳しく&#9654;&#9654;</Link>
          </div>
          <div className={Styles.box}>
            <figure className={Styles.img}>
              <StaticImage
                src="../images/price/option001.jpg"
                alt="電気自動車充電"
              />
            </figure>
            <dl className={Styles.text}>
              <dt className="text-bold">電気自動車充電</dt>
              <dd>200Vの普通充電器と、テスラ充電用のデスティネーションチャージングを設置。</dd>
            </dl>
            <Link to="/option#electrification" className={Styles.link}>詳しく&#9654;&#9654;</Link>
          </div>
          <div className={Styles.box}>
            <figure className={Styles.img}>
              <StaticImage
                src="../images/price/option002.jpg"
                alt="海外・国内旅行保険"
              />
            </figure>
            <dl className={Styles.text}>
              <dt className="text-bold">海外・国内旅行保険</dt>
              <dd>旅行保険もお任せください。最短1分！お客様の旅の安心のために保険をご用意しています。</dd>
            </dl>
            <Link to="/option#insurance" className={Styles.link}>詳しく&#9654;&#9654;</Link>
          </div>
          <div className={Styles.box}>
            <figure className={Styles.img}>
              <StaticImage
                src="../images/price/option004.jpg"
                alt="空港お届けサービス"
              />
            </figure>
            <dl className={Styles.text}>
              <dt className="text-bold">空港お届けサービス</dt>
              <dd>出発時やお帰り時に、スタッフがお車をお届けするサービスです。</dd>
            </dl>
            <Link to="/option#" className={Styles.link}>詳しく&#9654;&#9654;</Link>
          </div>
        </div>

  
      </div>
      {/* inner */}

    </div>
    {/* オプションサービス */}

  <div className="content__wrap">
    <div className="content__inner --md">
      <h3 className="headline--greenLabel" id="payment">お支払い方法</h3>
      <div>
        <h4 className="sec__ttl">WEB予約でカード事前決済可能</h4>
        <p className="pg--sm-lgt mb--sm">VISA・MasterCard・JCB・AMEX・DinersではWEB予約時にカード決済ができます。カード決済のタイミングはWEBで予約された時点で決済されます。</p>
        <div className={Styles.card}>
          <div className={Styles.box}><StaticImage src="../images/price/logo/visa.png" alt="VISA" /></div>
          <div className={Styles.box}><StaticImage src="../images/price/logo/master.png" alt="master card" /></div>
          <div className={Styles.box}><StaticImage src="../images/price/logo/american.png" alt="AMERICAN EXPRESS" /></div>
          <div className={Styles.box}><StaticImage src="../images/price/logo/jcb.png" alt="JCB" /></div>
          <div className={Styles.box}><StaticImage src="../images/price/logo/diners.png" alt="Diners Club" /></div>
        </div>
      </div>

      <div>
        <h4 className="sec__ttl">ご来店時は、現金、カード、PayPayなどで<span className="nowrap">お支払い可能</span></h4>
        <p className="pg--sm-lgt mb--md">JCB・VISA・ダイナース・DC・UFJ・ニコス・MASTER・AMEX・UC・Orico・CF・セゾン・イオン・JAL・TS CUBIC・OMC・楽天カード ・銀聯カード・PayPayなど、各種決済が可能です。</p>
        
        <div className={Styles.card_sec}>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/jcb.png" alt="JCB" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/visa.png" alt="VISA" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/diners.png" alt="Diners Club" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/dc.png" alt="DC" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/mufg.png" alt="MUFG" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/nicos.png" alt="nicos card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/master.png" alt="master card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/american.png" alt="AMERICAN EXPRESS" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/uc.png" alt="uc" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/orico.png" alt="orico card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/cf.png" alt="CF card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/saison.png" alt="saison card"/></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/aeon.png" alt="aeon card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/jal.png" alt="JAL" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/ts.png" alt="TS card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/omc.png" alt="OMC card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/union.png" alt="union card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/paypay.png" alt="paypay card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/rakuten.png" alt="Rakuten card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/paypal.png" alt="Paypal card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/amazonpay.png" alt="amazonpay card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/applepay.png" alt="apple card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/ufj.png" alt="UFJ card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/life.png" alt="Life card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/jaccs.png" alt="Jaccs card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/cedyna.png" alt="cedyna card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/discover.png" alt="discover card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/redy.png" alt="R edy card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/payeasy.png" alt="Pay Easy card" /></div>
          <div className={Styles.box_sec}><StaticImage src="../images/price/logo/yahoo.png" alt="Yahoo ウォレット" /></div>
        </div>
      </div>

      <h3 className="headline--greenLabel">マイル・ポイント</h3>
      <h4 className="sec__ttl">マイル・ポイントを<br />ためるコースもあります</h4>
      <p className="pg--sm-lgt mb--md text-center--md">提携マイル・ポイントをためるには、料金ご精算時にマイル積算希望の旨をお申し出ください。<br className="br_md"/>※通常料金でのご利用のみマイル対象となります。</p>

      <div className={Styles.mile}>
        <div className={Styles.box}>
          <p className={Styles.circle}>100円<br />3マイル</p>
          <figure>
            <StaticImage src="../images/price/logo/mileage.png" alt="R edy card" />
            <figcaption>JAL<br />マイレージバンク</figcaption>
          </figure>
        </div>
        <div className={Styles.box}>
          <p className={Styles.circle}>100円<br />2マイル</p>
          <figure>
            <StaticImage src="../images/price/logo/jal_card.png" alt="Pay Easy card" />
            <figcaption>JALカード<br />ショッピングマイル</figcaption>
          </figure>
        </div>
        <div className={Styles.box}>
          <p className={Styles.circle}>100円<br />1マイル</p>
          <figure>
            <StaticImage src="../images/price/logo/ts_lg.png" alt="Yahoo ウォレット" />
            <figcaption>TS CUBIC<br />カード</figcaption>
          </figure>
        </div>






      </div>

      <Link to="/more-information" className={Styles.button}>更に詳しく</Link>
      
      




    </div>
  </div>
{/* content__wrap */}
  



  </Layout>
)

export default PricePage