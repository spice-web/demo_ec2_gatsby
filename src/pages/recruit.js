import * as React from "react"
import { StaticImage
 } from "gatsby-plugin-image";
import Layout from "../components/layout"
import Seo from "../components/seo";
import PageTitle from "../components/PageTitle";
import Wrap from "../components/grayContainer_sm";
// css
import * as styles from "../styles/_recruit.module.scss"

const RecruitPage = () => (
  <Layout>
    <Seo title="求人情報" description="私達と一緒にサンパーキングで働きませんか？" />
    
    <PageTitle>RECRUIT<span>求人情報</span></PageTitle>
    <div className="content__wrap content__pd">
      <div className="content__inner --sm">
        <p className="mb--xl pg--md">「やりがい」と「充実感」が感じられる職場です。 元気があって活力のある方からのエントリーを待っています。</p>

        <h3 className="label --pd-sm bg--green bdr-xs text-medium mb--md">駐車場事業の仕事内容</h3>

        <div className={styles.recruitWrap}>
          <div className={styles.recruitInner}>
            <dl className={styles.desc}>
              <dt>送迎業務</dt>
              <dd>各駐車場から各空港間のマイクロバスによるお客様の送迎を行います。</dd>
              <dt>駐車管理</dt>
              <dd>車の移動等、大切なお客様のお車を管理します。</dd>
              <dt>カウンターでの受付・事務等の接客業務</dt>
              <dd>お客様との接客や電話対応などを行います</dd>
              <dt>予約センター業務</dt>
              <dd>予約センターにてお客様からの電話予約受付及びコンピュータ入力を行ないます。</dd>
            </dl>
          </div>

          <div className={styles.descFlex}>
          <StaticImage
             src="../images/recruit/recruit001.jpg"
             className={styles.descFlexBox}
          />
          <StaticImage
             src="../images/recruit/recruit002.jpg"
             className={styles.descFlexBox}
          />
          </div>
        </div>

        <h3 className="label --pd-sm bg--green bdr-xs text-medium mb--md">募集要項</h3>
        <Wrap>
          <h4 className="text-center text-deep-gr mb--md text-md">正社員</h4>
          <dl className={styles.recruiting}>
            <dt>応募資格</dt>
            <dd>25歳～40歳位の方</dd>
            <dt>募集職種</dt>
            <dd>管理職候補 ：駐車場業務全般、パート・アルバイトの労務管理等</dd>
            <dt>給与</dt>
            <dd>平均年収 ： 500万円 賞与：年２回　昇給：年１回</dd>
            <dt>諸手当・待遇</dt>
            <dd>社会保険・交通費支給・制服貸与・保養施設利用可・退職金制度有・
              研修旅行（年１回／過去実績：グアム、韓国、台湾、香港、シンガポール）</dd>
            <dt>勤務地</dt>
            <dd>成田（成田市）</dd>
            <dt>勤務時間</dt>
            <dd>当社規定のタイムスケジュールによる</dd>
            <dt>休日</dt>
            <dd>週休2日（シフト制）・リフレッシュ休暇制度（5連休）あり</dd>
            <dt>応募方法</dt>
            <dd>履歴書（写貼）を下記住所まで郵送してください。書類選考の上、ご連絡いたします。<br />
              株式会社サン・ポート<br className="br_maxmd"/>総務部 人事担当<br />
              〒286-0121<br className="br_maxmd"/>千葉県成田市駒井野 134</dd>
          </dl>
        </Wrap>

        <Wrap>
          <h4 className="text-center text-deep-gr mb--md text-md">シーズン・スタッフ（パート・アルバイト）</h4>
          <dl className={styles.recruiting}>
            <dt>応募資格</dt>
            <dd>16歳～60歳位の方<br />
            パーキング業務の方は要普通免許、通勤手段確保できる方<br />
            ※大型免許面持ちの方歓迎</dd>
            <dt>募集職種</dt>
            <dd>アルバイト・パート（駐車場業務全般・予約電話受付、パソコン業務等）</dd>
            <dt>時給</dt>
            <dd>990円~</dd>
            <dt>諸手当・待遇</dt>
            <dd>各種手当、交通費支給、制服貸与</dd>
            <dt>勤務地</dt>
            <dd>サンパーキング成田店（成田市駒井野）<br />
            サン予約センター（成田市駒井野）</dd>
            <dt>勤務時間</dt>
            <dd>シフト制（相談に応じます）</dd>
            <dt>営業時間</dt>
            <dd>サンパーキング成田店…<br className="br_maxmd"/>5:00～22:30<br />
                予約センター…<br className="br_maxmd"/>9:00～18:00</dd>
            <dt>休日</dt>
            <dd>シフト制</dd>
            <dt>応募方法</dt>
            <dd>お電話にてお問い合わせください<br />
              株式会社サン・ポート<br className="br_maxmd"/>総務部 人事担当<br />
              TEL : <a href="tel:0476331155">0476-33-1155</a></dd>
          </dl>
        </Wrap>

      </div>

    </div>
    
  </Layout>
)

export default RecruitPage