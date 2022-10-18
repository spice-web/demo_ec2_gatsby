import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/_index.module.scss"

// carousel
import SlickSlider from "../components/SlickSlider"

// button
import ButtonMore from "../components/button-more"
import ButtonReserve from "../components/button-reserve"
import PriceChart from "../components/price_chart"

// アニメーション
import { motion } from "framer-motion"

const IndexPage = ( { data } ) => (
  <Layout>
    <Seo title="Home" />

    {/* スライダーブロック */}
    <div className={styles.slider__wrap}>
      <SlickSlider />
    </div>

    {/* 最新記事ブロック */}
    <div className="content__wrap">
      <div className="content__inner --sm">

        <h3 className="text-center">最新情報</h3>

        {/* 最新記事ループ */}
        <div className={styles.info__wrap}>
          {data.allMicrocmsInformation.edges.map(({ node }) => (
            <div className={styles.info__article}>
              <div className={styles.info__head}>
                <ul className={styles.info__list}>
                  <li className={styles.info__cate}>{node.category.category}</li>
                  <li className={styles.info__date}>{node.date}</li>
                </ul>
              </div>
              <div className={styles.info__center}>
                <p className={styles.info__title}>
                  <Link to={`/information/${node.informationId}`}>
                    {node.title}
                  </Link>
                </p>
              </div>
              <div className={styles.info__foot}>
                <Link to={`/information/${node.informationId}`}>&gt;&gt;&gt;&nbsp;&nbsp;&nbsp;&nbsp;MORE</Link>
              </div>
            </div>
          ))}
        </div>
        {/* 最新記事ループ */}

        <p className="text-center"><Link to="/information">&gt;&gt;&gt;&nbsp;&nbsp;&nbsp;記事一覧&nbsp;&nbsp;&nbsp;&lt;&lt;&lt;</Link></p>

      </div>
    </div>
    {/* 最新記事ブロック */}



    <h2 className="text-center text-lg text-deep-gr text-bold">創業37年の信頼と<br />安⼼のサンパーキング<br className="br-sp" />成⽥店です。</h2>
    
    <div className={styles.hero_image}>
      <StaticImage src="../images/top/year.png" alt="サンパーキングは今年で創業37年を迎えます" className={styles.hero_logo} />
      <StaticImage src="../images/top/build.png" alt="サンパーキング外観" className={styles.hero_build} />
      <StaticImage src="../images/top/airplane.png" alt="飛行機イメージ図" className={styles.hero_airplane} />
      <motion.div animate={{ x: [null, 50, -50, 0] }}
        transition={{ duration: 4, times: [0, 0.5, 0.8, 1] }}
        ><StaticImage src="../images/top/bus.png" alt="送迎用バス" className={styles.hero_bus} />
      </motion.div>
    </div>


    <div className="content__wrap bg--pale-green">
      <div className="content__inner --lg">
        <StaticImage src="../images/top/banner_campaign.jpg"></StaticImage>
        <h3 className="text-lg text-center text-gr text-bold">サンパーキング成田店は、<br className="br-sp" /><span className="text-pk">安心の総額表示</span>で<br className="br-sp" /><span className="nowrap">実質最安値に挑戦中！</span></h3>

        {/* 価格表 */}
        <div className="content__inner --lg">
          <PriceChart />
        </div>

        {/* 予約ボタン */}
          <ButtonReserve />
        {/* 予約ボタン */}

      </div>
    </div>

    <div className="content__wrap">
      <div className="content__inner --lg">
        <h3 className="text-center text-lg text-deep-gr text-bold">信頼と安心の<br className="br-sp" />サンパーキング成田店<br />
          航空会社や旅行会社、<span className="nowrap">銀行、官公庁など</span><span className="nowrap">約2,000社と契約！</span></h3>

        <div className={styles.sponsor}>
          <div className={styles.sponsor_top}>
            <StaticImage src="../images/company-logo/jal.jpg" alt="JAL" />
            <StaticImage src="../images/company-logo/ana.jpg" alt="ANA" />
            <StaticImage src="../images/company-logo/jet.jpg" alt="JET STAR" />
            <StaticImage src="../images/company-logo/peach.jpg" alt="peach" />
            <StaticImage src="../images/company-logo/zipair.jpg" alt="Zip Air" />
          </div>
          <div className={styles.sponsor_bottom}>
            <StaticImage src="../images/company-logo/spring.jpg" alt="spring" />
            <StaticImage src="../images/company-logo/jtb.jpg" alt="JTB" />
            <StaticImage src="../images/company-logo/his.jpg" alt="HIS" />
            <StaticImage src="../images/company-logo/kinki.jpg" alt="近畿日本ツーリスト" />
            <StaticImage src="../images/company-logo/nipon.jpg" alt="日本旅行" />
            <StaticImage src="../images/company-logo/hankyu.jpg" alt="阪急交通社" />
          </div>
        </div>


        <div className="flex__wrap--md">
          <div className="text-white flex__box flex-col-4--md bg--dark-green bdr-xs">test</div>
          <div className="text-white flex__box flex-col-4--md bg--dark-green bdr-xs">test</div>
          <div className="text-white flex__box flex-col-4--md bg--dark-green bdr-xs">test</div>
          <div className="text-white flex__box flex-col-4--md bg--dark-green bdr-xs">test</div>
        </div>
      </div>
    </div>

    <div className="content__wrap bg--light-green">
      <h3>比べたらやっぱりサンパーキング成田店。 利便性とサービスに自信あり！</h3>
      <div className="content__inner --lg">
        <div className="flex__wrap flex__wrap--md">
          <div className="flex-col-4--md flex-col-2">test</div>
          <div className="flex-col-4--md flex-col-2">test</div>
          <div className="flex-col-4--md flex-col-2">test</div>
          <div className="flex-col-4--md flex-col-2">test</div>
        </div>
      </div>

      <ButtonMore title="test" url="/about" />
    </div>

{/* information ここから */}
    <div className="content__wrap">
      <h3>INFORMATION</h3>
      <div className="content__inner --md">
        <div className={styles.sns__wrap}>
          <div className={styles.sns__box_line}>
            <a href="https://lin.ee/3Lxkzi9" target="_blank" rel="noreferrer noopener"> 
              <div className={styles.sns__inner}>
                <p className="text-dark-gr text-center">お得なクーポンを配信中！</p>
                <StaticImage
                  src="../images/top/line.png"
                  alt="Line公式アカウント"
                >
                </StaticImage>
              </div>
              <div className={styles.sns__foot}>
                <StaticImage
                  src="../images/top/icon-line.svg"
                  alt="Line公式アカウント"
                  width="50"
                  >
                </StaticImage>LINEで簡単予約！
              </div>
            </a>
          </div>
          <div className={styles.sns__box_tw}>
            <a href="https://twitter.com/sunparking" target="_blank" rel="noreferrer noopener"> 
              <div className={styles.sns__inner}>
                <p className="text-bl text-center">お役立ち情報発信中！</p>
                <StaticImage
                  src="../images/top/twitter.png"
                  alt="Twitter公式アカウント"
                  >
                </StaticImage>
              </div>
              <div className={styles.sns__foot}>
                <StaticImage
                  src="../images/top/icon-tw.svg"
                  alt="Line公式アカウント"
                  width="50"
                >
                </StaticImage>今すぐフォロー！
              </div>
            </a>
          </div>
        </div>
      
        <ul className="flex__wrap">
          <li className="flex-col-2 flex-col-4--sm"><Link to=""><StaticImage src="../images/parts/button/point.png" /></Link></li>
          <li className="flex-col-2 flex-col-4--sm"><Link to=""><StaticImage src="../images/parts/button/how_pay.png" /></Link></li>
          <li className="flex-col-2 flex-col-4--sm"><Link to=""><StaticImage src="../images/parts/button/voice.png" /></Link></li>
          <li className="flex-col-2 flex-col-4--sm"><Link to=""><StaticImage src="../images/parts/button/faq.png" /></Link></li>
        </ul>

        <div className="flex__wrap--sm">
          <div className="flex-col-3--sm bdr-xs bdr-dark-green">
            <dl>
              <dt>洗車・コーティング</dt>
              <dd>お帰りまでにお車ピカピカキレイを、長く！
                本格派コーティング。</dd>
              <dd></dd>
            </dl>
          </div>
          <div className="flex-col-3--sm bdr-xs bdr-dark-green">CHUBB海外旅行保険</div>
          <div className="flex-col-3--sm bdr-xs bdr-dark-green">JAF</div>
        </div>

      </div>
      {/* inner */}

    </div>
    {/* INFORMATION */}

  
  
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
query {
  allMicrocmsInformation(limit: 3, sort: {fields:date, order:DESC }) {
    edges {
      node {
        informationId
        title
        date(formatString: "YYYY年MM月DD日")
        category {
          category
        }
      }
    }
  }
}
`