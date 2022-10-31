import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/_index.module.scss"

// carousel
import SlickSlider from "../components/SlickSlider"
import SlickSliderWide from "../components/SlickSliderWide"

// button
import ButtonMore from "../components/button-more"
import ButtonReserve from "../components/button-reserve"

// 価格表
import PriceChart from "../components/price_chart"

// アニメーション
// import { motion } from "framer-motion"

// to reservation
const reserve = "https://www.sunparking.co.jp/form/rsv1.php";

// 見出し
const headline = {
  padding: '0 0 2rem'
}

const IndexPage = ( { data } ) => (
  <Layout>
    <Seo title="Home" />

    {/* スライダーブロック */}
    <div className={styles.slider__wrap}>
      <SlickSlider />
    </div>

    <div className={styles.slider__wrapWide}>
      <SlickSliderWide />
    </div>

    {/* 最新記事ブロック */}
    <div className="content__wrap">
      <div className="content__inner --sm">

        <h3 className="text-center text-normal mb--md">最新情報</h3>

        {/* 最新記事ループ */}
        <div className={styles.info__wrap}>
          {data.allMicrocmsInformation.edges.map(({ node }) => (
            <div className={styles.info__article}>
              <ul className={styles.info__head}>
                <li className={styles.info__cate}>{node.category.category}</li>
                <li className={styles.info__date}>{node.date}</li>
              </ul>
              <div className={styles.info__center}>
                <p className={styles.info__title}>
                  <Link to={`/information/${node.informationId}`}>
                    {node.title}
                  </Link>
                </p>
              </div>
              <div className={styles.info__foot}>
                <Link to={`/information/${node.informationId}`}>&gt;&gt;&gt;&nbsp;&nbsp;MORE</Link>
              </div>
            </div>
          ))}
        </div>
        {/* 最新記事ループ */}

        <p className="text-center ls01"><Link to="/information">&gt;&gt;&gt;&nbsp;&nbsp;&nbsp;記事一覧&nbsp;&nbsp;&nbsp;&lt;&lt;&lt;</Link></p>

      </div>
    </div>
    {/* 最新記事ブロック */}



    <h2 className="text-center text-lg text-deep-gr text-bold">創業37年の信頼と<br />安⼼のサンパーキング<br className="br_sm" />成⽥店です。</h2>
    
    <div className={styles.hero_image}>
      <StaticImage
        src="../images/top/year.png"
        alt="サンパーキングは今年で創業37年を迎えます"
        className={styles.hero_logo}
      />
      <StaticImage
        src="../images/top/build.png"
        alt="サンパーキング外観"
        className={styles.hero_build}
      />
      <StaticImage
        src="../images/top/airplane.png"
        alt="飛行機イメージ図"
        className={styles.hero_airplane}
      />
      <StaticImage
        src="../images/top/bus.png"
        alt="送迎用バス"
        className={styles.hero_bus}
      />
    </div>


    <div className="content__wrap bg--pale-green">
      <div className="content__inner --lg mb0">
        <div className="br_md">
          <Link to={reserve}>
            <StaticImage
              src="../images/top/banner_campaign.jpg"
              alt="サンパーキング秋割キャンペーン"
            />
          </Link>
        </div>
        <div className="br_maxmd">
          <Link to={reserve}>
            <StaticImage
              src="../images/top/banner_campaign_sp.jpg"
              alt="サンパーキング秋割キャンペーン"
            />
          </Link>
        </div>
      </div>


      <div className="content__inner --lg">
        <h3 style={headline} className="text-lg text-center text-deep-gr text-bold">サンパーキング成田店は、<br className="br-sp" /><span className="text-pk">安心の総額表示</span>で<br className="br-sp" /><span className="nowrap">実質最安値に挑戦中！</span></h3>

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
      <div className="content__inner --lg mb0">
        <h3 style={headline} className="text-center text-lg text-deep-gr text-bold">信頼と安心の<br className="br-sp" />サンパーキング成田店<br />
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


        <div className={styles.select}>
          <ul className={styles.selectBox}>
            <li className={styles.textBox}>成田ICを降りてまっすぐ！ 成田空港通り交差点前に<span>グリーンの門が目印</span>で、わかりやすい＆入りやすい！</li>
            <StaticImage
              src="../images/top/select01.jpg" imgClassName={styles.selectImg} alt="迷わない" className={styles.imgBox} />
          </ul>
          <ul className={styles.selectBox}>
            <li className={styles.textBox}><span>24時間警備体制で安心</span>で安心！鍵はセコムの大型金庫で保管！ 預かり時のお車の状態を 動画でチェック！</li>
            <StaticImage src="../images/top/select02.jpg" imgClassName={styles.selectImg} alt="24時間警備体制で安心" />
          </ul>
          <ul className={styles.selectBox}>
            <li className={styles.textBox}>成田空港駐車場では<span>最大級の2,000台収容!</span>お仕事が旅行シーズンと重なっても大丈夫！</li>
            <StaticImage src="../images/top/select03.jpg" imgClassName={styles.selectImg} alt="成田空港駐車場では最大級の2,000台収容" className={styles.imgBox} />
          </ul>
          <ul className={styles.selectBox}>
            <li className={styles.textBox}><span>予約専用コールセンターで安心！</span>WEB予約だと更に大幅割引実施中！</li>
            <StaticImage src="../images/top/select04.jpg" imgClassName={styles.selectImg} alt="WEB予約だと更に 大幅割引実施中！" className={styles.imgBox} />
          </ul>
        </div>

        <ButtonMore title="サンパーキングが選ばれる理由" url="/advantage" />

    
      </div>
    </div>

    <div className="content__wrap bg--light-green">
      <div className="content__inner inner --lg">
      <h3 style={headline} className="sec__ttl">比べたらやっぱり<span className="nowrap">サンパーキング成田店。</span><span className="nowrap">利便性とサービスに自信あり！</span></h3>
      <div className={styles.option}>
          <ul className={styles.optionBox}>
            <li className={styles.textBox}>成田ICを降りてまっすぐ！ 成田空港通り交差点前に<span>グリーンの門が目印</span>で、わかりやすい＆入りやすい！</li>
            <StaticImage
              src="../images/top/option01.jpg" imgClassName={styles.optionImg} alt="迷わない" className={styles.imgBox} />
          </ul>
          <ul className={styles.optionBox}>
            <li className={styles.textBox}><span>24時間警備体制で安心</span>で安心！鍵はセコムの大型金庫で保管！ 預かり時のお車の状態を 動画でチェック！</li>
            <StaticImage src="../images/top/option02.jpg" imgClassName={styles.optionImg} alt="24時間警備体制で安心" />
          </ul>
          <ul className={styles.optionBox}>
            <li className={styles.textBox}>成田空港駐車場では<span>最大級の2,000台収容!</span>お仕事が旅行シーズンと重なっても大丈夫！</li>
            <StaticImage src="../images/top/option03.jpg" imgClassName={styles.optionImg} alt="成田空港駐車場では最大級の2,000台収容" className={styles.imgBox} />
          </ul>
          <ul className={styles.optionBox}>
            <li className={styles.textBox}><span>予約専用コールセンターで安心！</span>WEB予約だと更に大幅割引実施中！</li>
            <StaticImage src="../images/top/option04.jpg" imgClassName={styles.optionImg} alt="WEB予約だと更に 大幅割引実施中！" className={styles.imgBox} />
          </ul>
        </div>

        <ButtonMore title="オプションについて詳しく" url="/option" />
      </div>

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
  allMicrocmsInformation(limit:3, sort: {fields:date, order:DESC }) {
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