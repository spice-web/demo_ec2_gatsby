import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";

import Wrap from "../components/grayContainer_sm";
// css
import * as Styles from "../styles/_recruit.module.scss"

const RecruitPage = () => (
  <Layout>
    <Seo title="求人情報" />
    <h2 class="headline--title">RECRUIT<span>求人情報</span></h2>
    <div className="content__wrap">
      <div className="content__inner --sm">
        <p className="mb--xl pg--md">「やりがい」と「充実感」が感じられる職場です。 元気があって活力のある方からのエントリーを待っています。</p>

        <h3 className="label --pd-sm bg--green bdr-xs text-medium mb--md">駐車場事業の仕事内容</h3>

        <Wrap>
          <dl className={Styles.desc}>
            <dt>送迎業務</dt>
            <dd>各駐車場から各空港間のマイクロバスによるお客様の送迎を行います。</dd>
            <dt>駐車管理</dt>
            <dd>車の移動等、大切なお客様のお車を管理します。</dd>
            <dt>カウンターでの受付・事務等の接客業務</dt>
            <dd>お客様との接客や電話対応などを行います</dd>
            <dt>予約センター業務</dt>
            <dd>予約センターにてお客様からの電話予約受付及びコンピュータ入力を行ないます。</dd>
          </dl>
        </Wrap>

        <h3 className="label --pd-sm bg--green bdr-xs text-medium mb--md">募集要項</h3>
        <Wrap>
          <h4 className="text-center text-deep-gr mb--md">正社員</h4>
          <dl className={Styles.recruiting}>
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
            <dd>履歴書（写貼）を下記住所まで郵送してください。書類選考の上、ご連絡いたします。
              株式会社サン・ポート　総務部　人事担当
              〒286-0121千葉県成田市駒井野 134</dd>
          </dl>
        </Wrap>

        <Wrap>
          <h4 className="text-center text-deep-gr mb--md">シーズン・スタッフ（パート・アルバイト）</h4>
          <dl className={Styles.recruiting}>
            <dt>応募資格</dt>
            <dd>25歳～40歳位の方</dd>
            <dt>募集職種</dt>
            <dd>管理職候補 : 駐車場業務全般、パート・アルバイトの労務管理等</dd>
            <dt>給与</dt>
            <dd>平均年収 : 500万円 賞与 : 年2回 昇給：年１回</dd>
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
            <dd>履歴書（写貼）を下記住所まで郵送してください。書類選考の上、ご連絡いたします。
              株式会社サン・ポート　総務部　人事担当
              〒286-0121千葉県成田市駒井野 134</dd>
          </dl>
        </Wrap>

      </div>

    </div>
    
  </Layout>
)

export default RecruitPage