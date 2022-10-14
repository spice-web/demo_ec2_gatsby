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
import Sponsor from "../components/sponsor-logo"

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



    <h2 className="text-center text-lg text-gr text-bold">創業37年の信頼と<br />安⼼のサンパーキング<br className="br-sp" />成⽥店です。</h2>

    <div className="content__wrap bg--pale-green">
      <div className="content__inner --lg">
        <StaticImage src="../images/top/banner_campaign.jpg"></StaticImage>
        <h3 className="text-lg text-center text-gr text-bold">サンパーキング成田店は、<br className="br-sp" /><span className="text-pk">安心の総額表示</span>で<br className="br-sp" /><span className="nowrap">実質最安値に挑戦中！</span></h3>

        {/* 予約ボタン */}
          <ButtonReserve />
        {/* 予約ボタン */}

        <Sponsor />

      </div>
    </div>

    <div className="content__wrap">
      <div className="content__inner --lg">
        <h3 className="text-center text-lg text-gr text-bold">信頼と安心の<br className="br-sp" />サンパーキング成田店<br />
          航空会社や旅行会社、<br className="br-sp" />銀行、官公庁など<br className="br-sp" />約2,000社と契約！</h3>
        <div className="flex__wrap--lg">
          <div className="text-white flex__box flex-col-4--lg bg--dark-green bdr-xs">test</div>
          <div className="text-white flex__box flex-col-4--lg bg--dark-green bdr-xs">test</div>
          <div className="text-white flex__box flex-col-4--lg bg--dark-green bdr-xs">test</div>
          <div className="text-white flex__box flex-col-4--lg bg--dark-green bdr-xs">test</div>
        </div>
      </div>
    </div>

    <div className="content__wrap bg--light-green">
      <h3>比べたらやっぱりサンパーキング成田店。 利便性とサービスに自信あり！</h3>
      <div className="content__inner --lg">
        <div className="flex__wrap flex__wrap--lg">
          <div className="flex-col-4--lg flex-col-2">test</div>
          <div className="flex-col-4--lg flex-col-2">test</div>
          <div className="flex-col-4--lg flex-col-2">test</div>
          <div className="flex-col-4--lg flex-col-2">test</div>
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
          </div>
          <div className={styles.sns__box_tw}>
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
          </div>
        </div>
      </div>
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