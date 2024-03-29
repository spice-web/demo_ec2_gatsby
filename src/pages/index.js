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

// 日付日本時間
import dayjs from "dayjs"

// to reservation
const reserve = "/"

// 見出し
const headline = {
  padding: "0 0 2rem",
}

const IndexPage = ({ data }) => (
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
    <div className="content__wrap content__pd">
      <div className="content__inner --sm">
        <h2 className="text-center text-normal mb--md">新着情報</h2>

        {/* 最新記事ループ */}
        <div className={styles.info__wrap}>
          {data.allMicrocmsInformation.edges.map(({ node }) => (
            <div className={styles.info__article}>
              <ul className={styles.info__head}>
                <li>{node.category.category}</li>
                <li>{dayjs(node.date).format("YYYY/MM/DD")}</li>
              </ul>
              <div>
                <p className={styles.info__title}>
                  <Link to={`/information/${node.informationId}`}>
                    {node.title}
                  </Link>
                </p>
              </div>
              <div className={styles.info__foot}>
                <Link to={`/information/${node.informationId}`}>
                  &gt;&gt;&gt;&nbsp;&nbsp;MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* 最新記事ループ */}

        <p className="text-center ls01">
          <Link to="/information">
            &gt;&gt;&gt;&nbsp;&nbsp;&nbsp;記事一覧&nbsp;&nbsp;&nbsp;&lt;&lt;&lt;
          </Link>
        </p>
      </div>
    </div>
    {/* 最新記事ブロック */}

    <h2 className="text-center text-lg text-deep-gr text-bold">
      創業38年の信頼と
      <br />
      安⼼のSAWAYAKA
      <br className="br_maxsm" />
      成⽥店です。
    </h2>

    <div className={styles.hero_image}>
      <StaticImage
        src="../images/top/year.png"
        alt="SAWAYAKAは今年で創業38年を迎えます"
        className={styles.hero_logo}
        width={200}
        loading="lazy"
      />
      <StaticImage
        src="../images/top/build.png"
        alt="SAWAYAKA外観"
        className={styles.hero_build}
        loading="lazy"
      />
      <StaticImage
        src="../images/top/airplane.png"
        alt="飛行機イメージ図"
        className={styles.hero_airplane}
        width={185}
        loading="lazy"
        quality="40"
      />
      <StaticImage
        src="../images/top/bus.png"
        alt="送迎用バス"
        className={styles.hero_bus}
        loading="lazy"
        width={650}
        quality="40"
      />
    </div>

    {/* キャンペーン */}
    <div className="content__wrap content__pd bg--pale-green">
      <div className="content__inner  --lg">
        <div className="br_md">
          <Link to={reserve} target="_blank">
            <StaticImage
              src="../images/top/banner_campaign.jpg"
              alt="SAWAYAKA秋割キャンペーン"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="br_maxmd">
          <Link to={reserve} target="_blank">
            <StaticImage
              src="../images/top/banner_campaign_sp.jpg"
              alt="SAWAYAKA秋割キャンペーン"
              loading="lazy"
            />
          </Link>
        </div>
      </div>

      <div className="content__inner inner__pd --lg">
        <div className="content__inner inner --w1100">
          <h3 style={headline} className="sec__ttl">
            SAWAYAKA成田店は、
            <br className="br_maxmd" />
            <span className="text-pk">安心の総額表示</span>で
            <br className="br_maxmd" />
            <span className="nowrap">実質最安値に挑戦中！</span>
          </h3>

          {/* 価格表 */}
          <PriceChart />
        </div>

        {/* 予約ボタン */}
        <ButtonReserve />
        {/* 予約ボタン */}
      </div>
    </div>

    <div className="content__wrap content__pd">
      <div className="content__inner --lg mb0">
        <h3 style={headline} className="sec__ttl">
          信頼と安心の<span className="nowrap">SAWAYAKA成田店</span>
          <br />
          航空会社や旅行会社、<span className="nowrap">銀行、官公庁など</span>
          <span className="nowrap">約2,000社と契約！</span>
        </h3>

        <div>
          <div className={styles.sponsor_top}>
            <figure className={styles.sponsorLogo}>
              <StaticImage
                src="../images/company-logo/jal.jpg"
                alt="JAL"
                loading="lazy"
              />
            </figure>
            <figure className={styles.sponsorLogo}>
              <StaticImage
                src="../images/company-logo/ana.jpg"
                alt="ANA"
                loading="lazy"
              />
            </figure>
            <figure className={styles.sponsorLogo}>
              <StaticImage
                src="../images/company-logo/jet.jpg"
                alt="JET STAR"
                loading="lazy"
              />
            </figure>
            <figure className={styles.sponsorLogo}>
              <StaticImage
                src="../images/company-logo/peach.jpg"
                alt="peach"
                loading="lazy"
              />
            </figure>
            <figure className={styles.sponsorLogo}>
              <StaticImage
                src="../images/company-logo/zipair.jpg"
                alt="Zip Air"
                loading="lazy"
              />
            </figure>
            <figure className={styles.sponsorLogo}>
              <StaticImage
                src="../images/company-logo/spring.png"
                alt="spring"
                loading="lazy"
              />
            </figure>
          </div>
          <div className={styles.sponsor_bottom}>
            <figure className={styles.sponsorLogo}>
              <StaticImage
                src="../images/company-logo/jtb.jpg"
                alt="JTB"
                loading="lazy"
              />
            </figure>
            <figure className={styles.sponsorLogo}>
              <StaticImage
                src="../images/company-logo/his.jpg"
                alt="HIS"
                loading="lazy"
              />
            </figure>
            <figure className={styles.sponsorLogo}>
              <StaticImage
                src="../images/company-logo/kinki.jpg"
                alt="近畿日本ツーリスト"
                loading="lazy"
              />
            </figure>
            <figure className={styles.sponsorLogo}>
              <StaticImage
                src="../images/company-logo/nipon.jpg"
                alt="日本旅行"
                loading="lazy"
              />
            </figure>
            <figure className={styles.sponsorLogo}>
              <StaticImage
                src="../images/company-logo/hankyu.jpg"
                alt="阪急交通社"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        <div className={styles.select}>
          <ul className={styles.selectBox}>
            <li className={styles.textBox}>
              成田ICを降りてまっすぐ！ 成田空港通り交差点前に
              <span>グリーンの門が目印</span>で、わかりやすい＆入りやすい！
            </li>
            <li className={styles.imgBox}>
              <StaticImage
                src="../images/top/select01.jpg"
                imgClassName={styles.selectImg}
                alt="当日現地で迷わない"
                loading="lazy"
                className={styles.imgBox}
              />
            </li>
          </ul>
          <ul className={styles.selectBox}>
            <li className={styles.textBox}>
              <span>24時間警備体制で安心</span>で安心！鍵は大型金庫で保管！
              預かり時のお車の状態を 動画でチェック！
            </li>
            <li className={styles.imgBox}>
              <StaticImage
                src="../images/top/select02.jpg"
                imgClassName={styles.selectImg}
                alt="24時間警備体制で安心"
                loading="lazy"
              />
            </li>
          </ul>
          <ul className={styles.selectBox}>
            <li className={styles.textBox}>
              NIPPON空港駐車場では<span>最大級の5,000台収容!</span>
              お仕事が旅行シーズンと重なっても大丈夫！
            </li>
            <li className={styles.imgBox}>
              <StaticImage
                src="../images/top/select03.jpg"
                imgClassName={styles.selectImg}
                alt="成田空港駐車場では最大級の2,000台収容"
                loading="lazy"
                className={styles.imgBox}
              />
            </li>
          </ul>
          <ul className={styles.selectBox}>
            <li className={styles.textBox}>
              <span>予約専用コールセンターで安心！</span>
              WEB予約だと更に大幅割引実施中！
            </li>
            <li className={styles.imgBox}>
              <StaticImage
                src="../images/top/select04.jpg"
                imgClassName={styles.selectImg}
                alt="WEB予約だと更に 大幅割引実施中！"
                loading="lazy"
                className={styles.imgBox}
              />
            </li>
          </ul>
        </div>

        <ButtonMore title="SAWAYAKAが選ばれる理由" url="/advantage" />
      </div>
    </div>

    <div className="content__wrap content__pd bg--light-green">
      <div className="content__inner --lg mb0">
        <h3 style={headline} className="sec__ttl">
          比べたらやっぱり<span className="nowrap">SAWAYAKA成田店。</span>
          <span className="nowrap">利便性とサービスに自信あり！</span>
        </h3>
        <div className={styles.option}>
          <ul className={styles.optionBox}>
            <li className={styles.textBox}>
              <span className="text-pk">様々なお支払い方法</span>
              に対応。予約時にクレジットカードで
              <span className="text-pk">事前決済もOK！</span>
              <span className={styles.note}>
                ※その他、各種カードご利用できます。
              </span>
            </li>
            <li className={styles.imgBox}>
              <StaticImage
                src="../images/top/option02.png"
                imgClassName={styles.selectImg}
                alt="様々なお支払い方法に対応。予約時にクレジットカードで事前決済もOK！"
                loading="lazy"
                className={styles.imgBox}
              />
            </li>
          </ul>
          <ul className={styles.optionBox}>
            <li className={styles.textBox}>
              <span className="text-pk">電気自動車</span>
              の充電設備あります。TESLAも充電できます!
              <br />
              <span className={styles.note}>
                ※必ず充電用コードをお持ちください。
                <br />
                ※テスラ・ロードスターは充電できません。
              </span>
            </li>
            <li className={styles.imgBox}>
              <StaticImage
                src="../images/top/option01.png"
                imgClassName={styles.selectImg}
                alt="24時間警備体制で安心"
                loading="lazy"
                className={styles.imgBox}
              />
            </li>
          </ul>
          <ul className={styles.optionBox}>
            <li className={styles.textBox}>
              当日でも<span className="text-pk">窓口で旅行保険に加入</span>
              できるので安心。
            </li>
            <li className={styles.imgBox}>
              <StaticImage
                src="../images/top/option03.jpg"
                imgClassName={styles.selectImg}
                alt="成田空港駐車場では最大級の2,000台収容"
                loading="lazy"
                className={styles.imgBox}
              />
            </li>
          </ul>
          <ul className={styles.optionBox}>
            <li className={styles.textBox}>
              行く時も帰る時も、
              <span className="text-pk">屋根有り乗降スペース</span>
              で雨に濡れない!
            </li>
            <li className={styles.imgBox}>
              <StaticImage
                src="../images/top/option04.jpg"
                imgClassName={styles.selectImg}
                alt="WEB予約だと更に 大幅割引実施中！"
                loading="lazy"
                className={styles.imgBox}
              />
            </li>
          </ul>

          <ul className={styles.optionBox}>
            <li className={styles.textBox}>
              10日目以降の
              <span className="text-pk">長期利用は1日わずか220円</span>
              長期の出張や海外旅行でも安心！
            </li>
            <li className={styles.imgBox}>
              <StaticImage
                src="../images/top/option05.jpg"
                imgClassName={styles.selectImg}
                alt="長期の出張や海外旅行でも安心！"
                loading="lazy"
                className={styles.imgBox}
              />
            </li>
          </ul>
          <ul className={styles.optionBox}>
            <li className={styles.textBox}>
              キーパープロショップだから
              <span className="text-pk">専門店レベルの洗車クオリティ!</span>
            </li>
            <li className={styles.imgBox}>
              <StaticImage
                src="../images/top/option06.jpg"
                imgClassName={styles.selectImg}
                alt="24時間警備体制で安心"
                loading="lazy"
                className={styles.imgBox}
              />
            </li>
          </ul>
          <ul className={styles.optionBox}>
            <li className={styles.textBox}>
              <span className="text-pk">専用マイクロバス</span>
              で送迎。お帰りはICまで1分!
              <span className="text-pk">荷物の積み降ろし</span>もスタッフが対応!
            </li>
            <li className={styles.imgBox}>
              <StaticImage
                src="../images/top/option07.jpg"
                imgClassName={styles.selectImg}
                alt="成田空港駐車場では最大級の2,000台収容"
                loading="lazy"
                className={styles.imgBox}
              />
            </li>
          </ul>
          <ul className={styles.optionBox}>
            <li className={styles.textBox}>
              <span className="text-pk">成田空港最終便到着まで営業。</span>
              夜間早朝の出発＆到着、予定より早い帰着などによる
              <span className="text-pk">追加料金はありません</span>。
            </li>
            <li className={styles.imgBox}>
              <StaticImage
                src="../images/top/option08.jpg"
                imgClassName={styles.selectImg}
                alt="WEB予約だと更に 大幅割引実施中！"
                loading="lazy"
                className={styles.imgBox}
              />
            </li>
          </ul>
        </div>

        <ButtonMore title="オプションについて詳しく" url="/option" />
      </div>
    </div>

    {/* information ここから */}
    <div className="content__wrap content__pd">
      <div className="content__inner --md">
        <h3 className={styles.otherInfo__title}>INFORMATION</h3>
        <div className={styles.sns__wrap}>
          <div className={styles.sns__box_line}>
            <a
              href="https://lin.ee/3Lxkzi9"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={styles.sns__inner}>
                <p className="text-dark-gr text-center">
                  お得なクーポンを配信中！
                </p>
                <StaticImage
                  src="../images/top/line.png"
                  alt="Line公式アカウント"
                  loading="lazy"
                  width={265}
                ></StaticImage>
              </div>
              <div className={styles.sns__foot}>
                <StaticImage
                  src="../images/top/icon-line.svg"
                  alt="Line公式アカウント"
                  width={50}
                  loading="lazy"
                ></StaticImage>
                LINEで簡単予約!
              </div>
            </a>
          </div>
          <div className={styles.sns__box_tw}>
            <a
              href="https://twitter.com/sunparking"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={styles.sns__inner}>
                <p className="text-bl text-center">お役立ち情報発信中！</p>
                <StaticImage
                  src="../images/top/twitter.png"
                  alt="Twitter公式アカウント"
                  loading="lazy"
                  width={295}
                ></StaticImage>
              </div>
              <div className={styles.sns__foot}>
                <StaticImage
                  src="../images/top/icon-tw.svg"
                  alt="Line公式アカウント"
                  width={50}
                  loading="lazy"
                ></StaticImage>
                今すぐフォロー！
              </div>
            </a>
          </div>
        </div>

        <ul className="flex__wrap">
          <li className="flex-col-2 flex-col-4--sm mb--md">
            <Link to="/more-information">
              <StaticImage
                src="../images/parts/button/point.png"
                alt="貯めてオトクなマイル・ポイント"
                loading="lazy"
              />
            </Link>
          </li>
          <li className="flex-col-2 flex-col-4--sm mb--md">
            <Link to="/price#payment">
              <StaticImage
                src="../images/parts/button/how_pay.png"
                alt="色々あります。お支払い方法"
                loading="lazy"
              />
            </Link>
          </li>
          <li className="flex-col-2 flex-col-4--sm mb--md">
            <Link to="/voice">
              <StaticImage
                src="../images/parts/button/voice.png"
                alt="届いてます。お客様の声"
                loading="lazy"
              />
            </Link>
          </li>
          <li className="flex-col-2 flex-col-4--sm mb--md">
            <Link to="/form#faq">
              <StaticImage
                src="../images/parts/button/faq.png"
                alt="お答えします。Q&A"
                loading="lazy"
              />
            </Link>
          </li>
        </ul>

        {/* その他サービス */}
        <ul className="flex__wrap--sm">
          <li className={styles.otherService}>
            <p className={styles.otherServiceTitle}>洗車・コーティング</p>
            <p className={styles.otherServiceText}>
              <Link to="/option">
                お帰りまでにお車ピカピカ！キレイを長く、本格派コーティング。
              </Link>
            </p>
            <p className={styles.otherServiceImg}>
              <Link to="/option">
                <StaticImage
                  src="../images/top/link01.jpg"
                  alt="洗車・コーティングサービス"
                  loading="lazy"
                />
              </Link>
            </p>
          </li>
          <li className={styles.otherService}>
            <p className={styles.otherServiceTitle}>CHUBB海外旅行保険</p>
            <p className={styles.otherServiceText}>
              <Link to="/option#chubb">
                当日、その場で海外旅行保険に加入できます。
              </Link>
            </p>
            <p className={styles.otherServiceImg}>
              <Link href="/option#chubb">
                <StaticImage
                  src="../images/top/link02.jpg"
                  alt="CHUBB海外旅行保険サービス"
                  loading="lazy"
                />
              </Link>
            </p>
          </li>
          <li className={styles.otherService}>
            <p className={styles.otherServiceTitle}>JAF</p>
            <p className={styles.otherServiceText}>
              <Link to="/option#jaf">
                もしもの時の頼れる味方！会員優待施設も充実。
              </Link>
            </p>
            <p className={styles.otherServiceImg}>
              <Link to="/option#jaf">
                <StaticImage
                  src="../images/top/link03.jpg"
                  alt="JAFサービス"
                  loading="lazy"
                />
              </Link>
            </p>
          </li>
        </ul>
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
    allMicrocmsInformation(limit: 3, sort: { date: DESC }) {
      edges {
        node {
          informationId
          title
          date
          category {
            category
          }
        }
      }
    }
  }
`
