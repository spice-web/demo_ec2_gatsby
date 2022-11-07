import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

// css
import * as styles from "../styles/_more-information.module.scss"
//components
import PageTitle from "../components/PageTitle"
import Wrap from "../components/grayContainer"
import LinkOther from "../components/link_other"

const green  = { color: "#51B674" }
const silver = { color: "#547998" }
const gold   = { color: "#C89650" }
const black  = { color: "#9E3D9B" }


const MoreInfoPage = ( {data} ) => (
  <Layout>
    <Seo title="サンパーキンについて" />
    <PageTitle>MORE INFORMATION<span>関連情報</span></PageTitle>

<div className="content__wrap content__pd">
    <Wrap>
      <h3 className="sec__ttl mb--md">マイル・ポイント</h3>
      <p className="text-normal text-light mb--md lh175">提携マイル・ポイントを貯めるには、料金ご精算時にカウンターで「マイル積算希望」とお申し出ください。お申し出がない場合はマイルが積算されませんのでご注意ください。マイルはご利用日の約２～３ヶ月後に積算されます。 ※通常料金でのご利用で、駐車料金のみがマイルの対象となります。）</p>

      <div className="flex__wrap--lg">
        <div className={styles.mile_box}>
          <StaticImage src="../images/more-information/b4_001.png"
            alt="JALマイレージバンク"
            style={{maxWidth:'350px', margin:'0 auto', objectFit: 'contain'}}
            className='br_maxlg' />
          <StaticImage src="../images/more-information/b4_004.png" alt="JALマイレージバンク" className="br_lg" />
          <h4 className="text-smd">JAL<br className="br_lg"/>マイレージバンク</h4>
          <p>ためたマイルを、航空券や電子マネーなどの豊富な特典と交換できるJALのマイレージプログラム。マイルの換算率が高いので当駐車場をよくご利用される方にオススメです。</p>
        </div>
        <div className={styles.mile_box}>
          <StaticImage src="../images/more-information/b4_002.png"
            alt="JALカード ショッピングマイル"
            style={{maxWidth:'350px', margin:'0 auto', objectFit: 'contain'}}
            className='br_maxlg' />
            <StaticImage src="../images/more-information/b4_005.png" alt="JALカード ショッピングマイル" className="br_lg" />
          <h4 className="text-smd">JALカード<br className="br_lg"/>ショッピングマイル</h4>
          <p>ショッピングマイル・プレミアムに入会すると、日常でのカードご利用分はもちろん、月づきの定期的なお支払いでもショッピングマイルが2倍たまります。</p>
          <div className="note text-center">※ショッピングマイル・プレミアム（有料）にご入会の場合</div>
        </div>
        <div className={styles.mile_box}>
          <StaticImage src="../images/more-information/b4_003.png"
            alt="TS CUBIC カード"
            style={{maxWidth:'350px', margin:'0 auto', objectFit: 'contain'}}
            className='br_maxlg' />
          <StaticImage src="../images/more-information/b4_006.png" alt="TS CUBIC カード" className="br_lg" />
          <h4 className="text-smd">TS CUBIC<br className="br_lg"/>カード</h4>
          <p>毎日をもっと快適、お得、安心に。 くらしをトータルサポートする、トヨタのクレジットカードです。駐車料金のお支払いをポイント提携カードでお支払いいただくとポイントが溜まります。</p>
        </div>
      </div>

    </Wrap>

    <Wrap>
      <h3 className="sec__ttl mb--md">メンバーズカード</h3>
      <p className="text-normal text-light mb--md lh175">
      スタンプが貯まれば貯まるほど、カード、特典条件がランクUP!カード記載のIDを入力するWEB予約でメンバー料金が適用されます。
      </p>
      <div className={styles.member}>
        <div className="flex__wrap--sm mb--lg">
          <div className="inner-pd bg--white bdr-sm flex-col-2--sm mb--sm" data-wrap="member">
            <div className="flex__wrap">
              <StaticImage src="../images/more-information/green.png" className="flex-col-2"/>
              <dl className="flex-col-2">
                <dt style={green}>GREEN<span className="text-xxs is-block">グリーンカード</span></dt>
                <dd>ご利用回数10回まで<br /><span style={green}>スタンプ５個で一日無料券</span></dd>
              </dl>
            </div>
          </div>
          <div className="inner-pd bg--white bdr-sm flex-col-2--sm mb--sm" data-wrap="member">
            <div className="flex__wrap">
              <StaticImage src="../images/more-information/silver.png" className="flex-col-2"/>
              <dl className="flex-col-2">
                <dt style={silver}>SILVER<span className="text-xxs is-block">シルバーカード</span></dt>
                <dd>ご利用回数20回まで<br /><span style={silver}>スタンプ５個で一日無料券</span></dd>
              </dl>
            </div>
          </div>
          <div className="inner-pd bg--white bdr-sm flex-col-2--sm mb--sm" data-wrap="member">
            <div className="flex__wrap">
              <StaticImage
                src="../images/more-information/gold.png"
                className="flex-col-2 img-contain"
              />
              <dl className="flex-col-2">
                <dt style={gold}>GOLD<span className="text-xxs is-block">ゴールドカード</span></dt>
                <dd>ご利用回数50回まで<br /><span style={gold}>スタンプ４個で一日無料券</span></dd>
              </dl>
            </div>
          </div>
          <div className="inner-pd bg--white bdr-sm flex-col-2--sm mb--sm" data-wrap="member">
            <div className="flex__wrap">
              <StaticImage src="../images/more-information/black.png" className="flex-col-2"/>
              <dl className="flex-col-2">
                <dt style={black}>BLACK<span className="text-xxs is-block">ブラックカード</span></dt>
                <dd>ご利用回数100回超<br /><span style={green}>スタンプ3個で一日無料券</span></dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* card block */}

      <h4 className={styles.headline}>メンバーズカードについて</h4>
      <div className={styles.aboutMemberWrap}>
      <dl className={styles.aboutMember}>
        <dt>■ メンバーズカードの発行</dt>
        <dd>
          <ul>
            <li>サンパーキング成田店にて初回ご利用時にメンバーズカードを発行いたします。</li>
            <li>メンバーズカード発行時に当社メンバーとしてご登録させていただきます。</li>
            <li>メンバーズカードはお一人様１枚の発行とさせていただきます。</li>
            <li>カード発行後の2回目以降のご予約で、本公式サイトからWeb予約をご利用いただく際には、メンバーIDを入力するとメンバー料金が適用となります。</li>
          </ul>
        </dd>
      </dl>
      <dl className={styles.aboutMember}>
        <dt>■ メンバーズカードへの押印</dt>
        <dd>
          <ul>
            <li>ご精算の際にメンバーズカードをご提示いただくと、１回１台につき１個の押印をいたします。 </li>
            <li>スタンプの押印が所定数※貯まったメンバーズカードは１日無料券１枚発行となります。発行された無料券は次回以降にご利用いただけます。 ※グリーン及びシルバー色のカードは５個、ゴールド色は４個、ブラック色は３個で一日無料券となります。</li>
          </ul>
        </dd>
      </dl>
      <dl className={styles.aboutMember}>
        <dt>■ 一日無料券のご利用 <br />（所定スタンプ押印済みメンバーズカード）</dt>
        <dd>
          <ul>
            <li>一日無料券はご精算前にご提出ください。ご精算後の場合、ご利用いただけない場合がございます（次回以降のご利用となります）。</li>
            <li>一日無料券は他の優待券との併用はできません。</li>
            <li>一日無料券の再発行はできません。</li>
          </ul>
        </dd>
      </dl>
      <dl className={styles.aboutMember}>
        <dt>■ メンバーズカードの紛失、再発行</dt>
        <dd>
          <ul>
            <li>カード紛失、盗難の際は消失したカードに押印されたスタンプはすべて無効となります。お申し付けいただければメンバーズカードの再発行は可能です。（一日無料券の再発行は不可）。 ※本案内の内容は予告なしに変更する場合がございます。予めご了承ください。</li>
          </ul>
        </dd>
      </dl>
      </div>

      <div className="inner-pd bg--white bdr-sm flex-col-2--sm text-medium mb-center">
        <p className="text-deep-gr text-center">
        SUNメンバーズカードに関する<br />
        お問い合わせ先は<br />
        サン予約センター<br />
        TEL. 0476-33-1123（9:00〜18:00）
        </p>
      </div>

    </Wrap>

    <Wrap>
      <h3 className="sec__ttl">お客さまの声</h3>
      {data.allMicrocmsVoice.edges.map(({ node }) => (
        <div className={styles.voice__wrap}>
          <div className={styles.customer}>
            <h3 className={styles.voice__title}>お客様の声#{node.number}</h3>
            <p className="pg--md --mb0 text-xs">{node.user_voice}</p>
          </div>
          <div className={styles.reply}>
            <h3 className={styles.reply__title}>サンパーキングより</h3>
            <p className="pg--md --mb0 text-xs">{node.reply}</p>
          </div>
        </div>
      ))}

      <Link to="/voice" className={styles.more}>さらに詳しく</Link>
    </Wrap>

    <Wrap>
      <h3 className="sec__ttl">旅のリンク集</h3>
      <LinkOther />
    </Wrap>

    </div>
    {/* content__wrap */}
  </Layout>
)

export default MoreInfoPage

export const query = graphql`
query {
  allMicrocmsVoice(limit:5, sort:{fields:[number], order:ASC}) {
    edges {
      node {
        user_voice
        reply
        number
      }
    }
  }
}
`