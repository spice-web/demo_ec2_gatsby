import * as React from "react"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage } from "gatsby-plugin-image";

// component
import Layout from "../components/layout"
import Seo from "../components/seo";
import Wrap from "../components/grayContainer"
import PageTitle from "../components/PageTitle"
// button
import ButtonTel from "../components/button-tel"
import ButtonReserve from "../components/button-reserve"
// GoogleMap
import GoogleMap from "../components/GoogleMap"
// css
import * as styles from "../styles/_guide.module.scss"


const flow =  {
  paddingBottom: '2.5rem',
  marginBottom: '2.5rem',
  borderBottom: '1px solid #404040'
}

const border = {
  paddingBottom: '0.5rem',
  marginBottom: '0.5rem',
  borderBottom: '1px solid rgba(242, 242, 242, 0.75)'
}

const GuidePage = () => (
  <Layout>
    <Seo
      title="ご利用案内"
      description="サンパーキングまでのアクセス方法・空港に着いてからのご利用の流れを説明しています。"
    />
    <PageTitle>USER GUIDE<span>ご利用案内</span></PageTitle>

    <div className="content__wrap content__pd">
    <Wrap>
      <h3 className="sec__ttl link__inner" id="access">アクセスについて</h3>
      <div className="mb--xl">
        <GoogleMap />
      </div>

      <h4 className={styles.headline}>カーナビゲーションセットの方法</h4>
      <div className="flex__wrap--md">
        <div className="flex-col-2--md inner--white text-center">
          <p>電話番号で検索する<br />☎ 0476-33-1166</p>
        </div>
        <div className="flex-col-2--md inner--white text-center">
          <p>住所で検索する<br />〒286-0121 千葉県成田市駒井野134</p>
        </div>
      </div>

      <p className="text-light text-sm mb--lg">表示されない場合には、ANAクラウンプラザホテル成田（旧:全日空ホテル）を目印にしてセットしてください。</p>

      <h4 className={styles.headline}>東関東自動車道からの場合</h4>
      <p className="text-sm text-light mb--sm">東関東自動車道「成田I.C.」料金所の「成田市内」を出て国道295号を「空港方面」へ</p>
      <StaticImage src="../images/guide/map.png" alt="東関東自動車道からのアクセス方法" />
      
      <div className={styles.accessFlow}>
        <div className="flex-col-2--md">
          <StaticImage src="../images/guide/img_highway.jpg" alt="東関東自動車道からのアクセス方法" />
        </div>
        <div className={styles.flowGrid}>
          <figure className={styles.number}><StaticImage src="../images/guide/number/1.png" /></figure>
          <p>成田インターチェンジ料金所を 「成田市内」へ進む</p>
          <StaticImage src="../images/guide/ao_narita.png" alt="成田市内看板"  />
        </div>
      </div>

      <div className={styles.accessFlow}>
        <div className="flex-col-2--md">
          <StaticImage src="../images/guide/img_right.jpg" alt="" />
        </div>
        <div className={styles.flowGrid}>
          <figure className={styles.number}><StaticImage src="../images/guide/number/2.png" /></figure>
          <p>料金所先の分岐を 「空港方面」へ進む</p>
          <StaticImage src="../images/guide/ao_airport.png" alt="料金所先の分岐を 「空港方面」へ進む" />
        </div>
      </div>

      <div className={styles.accessFlow}>
        <div className="flex-col-2--md">
          <StaticImage src="../images/guide/img_normal_right.jpg" alt="" />
        </div>
        <div className={styles.flowGrid_3}>
          <figure className={styles.number}><StaticImage src="../images/guide/number/3.png" /></figure>
          <p>国道295号合流交差点を右折</p>
          <StaticImage src="../images/guide/shiro_narita.png" alt="国道295号合流交差点を右折" />
          <p className={styles.flowFooter}>右折後、約1.5キロ直進です。</p>
        </div>
      </div>

      <div className={styles.accessFlow}>
        <div className="flex-col-2--md">
          <StaticImage src="../images/guide/img_enter.jpg" alt="" />
        </div>
        <div className={styles.flowGrid_3}>
          <figure className={styles.number}>
            <StaticImage src="../images/guide/number/4.png" />
          </figure>
          <p>堀之内交差点の左手に入り口が 見えてきます</p>
          <StaticImage src="../images/guide/shiro_hori.png" alt="堀之内入り口" />
          <p className={styles.flowFooter}>おつかれさまでした。<br />いらっしゃいませ。</p>
        </div>
      </div>

    </Wrap>

    <Wrap>
      <h3 id="flow" className="sec__ttl link__inner">ご利用の流れ</h3>
      <div className="flex__wrap mb--md">
        <div className="flex-col-2--md">
          <div className="label bg--green text-lg text-medium text-left ls01 bdr-xs">&#10102;予約する</div>
          <p className="text-light text-normal mb--sm">通常は当日でも受付可能ですが、ピーク時には満車という日もありますので、ご予約をおすすめします。<br />当Webサイトの予約フォーム、予約センターへの電話予約、FAXでお申し込みいただけます。</p>
        </div>
        <div className="flex-col-2--md">
          <StaticImage src="../images/guide/flow01.jpg" />
        </div>
      </div>

      <div className="inner--white mb--lg">
        <dl className={styles.reserve}>
          <dt className="text-deep-gr">ご予約時確認項目</dt>
          <dd className="text-deep-gr">例</dd>
          <dt>■ ご利用の駐車場名</dt>
          <dd>サンパーキング成田店</dd>
          <dt>■ お名前</dt>
          <dd>サン 太郎</dd>
          <dt>■ 電話番号</dt>
          <dd>090-0000-0000</dd>
          <dt>■ ご利用人数</dt>
          <dd>4名</dd>
          <dt>■ お車の車種・色・ナンバー（下4桁）</dt>
          <dd>プリウス シルバー 0000</dd>
          <dt>■ 出発日・来店時間</dt>
          <dd>1月1日 午前6時</dd>
          <dt>■ 到着日・到着便名</dt>
          <dd>1月3日 JL3便</dd>
        </dl>
      </div>

      <ButtonReserve />
      <p className={styles.note}>サンパーキングのオンライン予約は、SSLを使用しておりますので、安心してご利用できます。クレジットによる事前決済システムも導入しております。</p>
      
      <div className="mb--xl">
        <ButtonTel />
      </div>

      <div className="inner--white">
        <div className="flex__wrap--md mb--md">
          <div className={styles.flexBoxLeft}>WEB予約時のお支払い</div>
          <div className={styles.flexBoxRight}>
            <p className="text-xs mb--md text-light">WEB予約時のお支払はクレジットVISA・MasterCard・JCB・AMEX・Dinersが可能です。（ご来店時のお支払いも可能です。詳しくは下記「お支払い」をご確認ください。カード決済のタイミングはWEBで予約された時点で決済されます。</p>
            <ul className={styles.card}>
              <li>
                <StaticImage src="../images/price/logo/visa.png" />
              </li>
              <li>
                <StaticImage src="../images/price/logo/master.png" />
              </li>
              <li>
                <StaticImage src="../images/price/logo/american.png" />
              </li>
              <li>
                <StaticImage src="../images/price/logo/jcb.png" />
              </li>
              <li>
                <StaticImage src="../images/price/logo/diners.png" />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex__wrap--md">
         <div className={styles.flexBoxLeft}>ご予約内容の確認について</div>
         <div className={styles.flexBoxRight}>
            <p className="text-xs mb--md text-light">インターネットからご予約頂きますと、「予約確認メール」を送信しております。予約の確認は、メール下部に記載されている「ご予約の確認・変更・キャンセルはこちらから」のリンクからご確認いただけます。WEB予約以外のご予約の確認は、お電話にてご確認ください。 サン予約センター TEL. 0476-33-1123 〈受付時間9：00〜18：00・年中無休〉</p>
          </div>
        </div>
      </div>
      {/* inner white */}

      <div style={flow} className="text-center text-deep-gr" >
        <Link to="/rsv-faq" className="text-xs text-medium">ご予約でお困りの方はこちら</Link>
      </div>

      

      <div className="flex__wrap mb--md">
        <div className="flex-col-2--md">
        <div className="label bg--green text-lg text-medium text-left ls01 bdr-xs">&#10103;ご来店・受付</div>
        <p className="text-light text-normal mb--sm">ご来店時はフライト時間を確認させていただきますので、便名のわかるチケット等をご用意ください。受付を済ませ、空港到着までおよそ30分前後です。 年末年始、お盆、ゴールデン・ウィークなど空港が混雑するトップシーズンはもちろん、通常の季節でもなるべく余裕をもってご来店ください。</p>
        </div>

        <div className="flex-col-2--md">
          <StaticImage src="../images/guide/flow02.jpg" />
        </div>
      </div>
        <ul className={styles.visit}>
          <li>
            <p className="text-deep-gr">お時間に<br className="br_maxmd" />余裕を持って<br />ご来店ください。</p>
          </li>
          <li>
            <p className="text-deep-gr">受付には<br className="br_maxmd" />便名のわかる<br />チケット<br className="br_maxmd" />等をご用意ください。</p>
          </li>
          <li>
            <p className="text-deep-gr">お車お預かり券を<br className="br_maxmd" />お渡しします。<br />お帰りの際に<br className="br_maxmd" />必要になります。</p>
          </li>
        </ul>

      <div style={flow} className="inner__white">
        <div className="flex__wrap--md">
        <div className={styles.flexBoxLeft}>受付時のお支払いについて</div>
          <div className={styles.flexBoxRight}>
          <p className="text-xs text-light">ご来店時のお支払いには現金のほかにカードや電子マネーが使えます。JCB・VISA・ダイナース・DC・UFJ・ニコス・MASTER・AMEX・UC・Orico・CF・セゾン・イオン・JAL・TS CUBIC・OMC・楽天カード・銀聯カード等。提携マイル・ポイントをためるには、料金ご精算時にマイル積算希望の旨をお申し出ください。 ※通常料金でのご利用のみマイル対象となります。</p>
          </div>
        </div>
      </div>

      <div className="flex__wrap mb--md">
        <div className="flex-col-2--md">
        <div className="label bg--green text-lg text-medium text-left ls01 bdr-xs">&#10104;送迎バスで成田空港へ</div>
          <p className="text-light text-normal mb--sm">第3ターミナルは民間駐車場送迎車両の乗り入れが禁止されています。隣の第2ターミナルへの送迎となります。第2⇔第3ターミナル間は徒歩で10分程度、空港ターミナル間無料循環バスも待ち時間を含めて同程度の時間を要します。余裕を持ってご来場ください。</p>
        </div>
        <div className="flex-col-2--md">
          <StaticImage src="../images/guide/flow03.jpg" />
        </div>
      </div>

      <p className="text-center pg--deepGreen-sm-medium mb--lg">ドライバーにご利用の航空会社またはご出発のターミナルをご確認の上、ご乗車ください。</p>

      <div className="flex__wrap">
        <div className="inner--white flex-col-2--md">
        <p style={border} className="text-center text-deep-gr text-sm text-medium">第1・第2ターミナルご利用のお客様</p>
        <p className="pg--md --mb0 text-xs">バスは、第2ターミナル出発階・第1ターミナル出発階の順でまいります。お間違いのないようご乗車の際バスのドライバーに航空会社をお伝え下さい。</p>
        </div>
        <div className="inner--white flex-col-2--md">
          <p style={border} className="text-center text-deep-gr text-sm text-medium">第3ターミナルご利用のお客様</p>
            <p className="pg--md --mb0 text-xs">第3ターミナルのLCCをご利用のお客様は、第2ターミナルから徒歩、若しくは空港ターミナル間無料シャトルバスになります。第2ターミナルで下車してください。</p>
        </div>
      </div>

      <p className="sec__ttl text-medium">おつかれさまでした。<span className="nowrap">いってらっしゃいませ！</span></p>
    </Wrap>

    {/* お帰りになったら */}
    <Wrap>
      <h3 id="last" className="sec__ttl link__inner">お帰りになったら</h3>
      <div className="flex__wrap mb--md">
        <div className="flex-col-2--md">
          <div>
            <div className="label bg--green text-md text-medium text-left ls01 bdr-xs">&#10102;各お迎え場所に移動</div>
          </div>
          <div>
            <p className="text-light text-normal mb--sm">成田空港へお戻りになったら、お荷物を受け取り、税関通過後に、出発の際にお渡ししましたお預かり券の「到着専用電話番号」へご連絡の上、裏面にある「お迎え場所」まで移動をお願いします。 到着ターミナルやお迎え方法によって場所が違いますので、お電話の際に今一度ご確認ください。</p>
            <div className={styles.lastFlowTitle}>
              <button onClick={() => scrollTo('#terminal1')} className="is-block">第1ターミナルの方はこちら&nbsp;&#x25B6;&#x25B6;</button>
            </div>
            <div className={styles.lastFlowTitle}>
              <button onClick={() => scrollTo('#terminal2')} className="is-block">第2・第3ターミナルの方はこちら&nbsp;&#x25B6;&#x25B6;</button>
            </div>
          </div>


        </div>
        <div className="flex-col-2--md">
          <StaticImage src="../images/guide/closing01.jpg" alt="成田空港イメージ" />
        </div>
      </div>
      <div className={styles.lastFlowLink} id="terminal1">
        <p className="label bg--gray --pd-xd text-smd">成田空港第1ターミナル お迎え場所</p>
        <StaticImage src="../images/guide/closingMap01.jpg" alt="成田空港第1ターミナル お迎え場所"/>
        <p className={styles.lastFlowMapLink}><a href="https://goo.gl/maps/CX6DEnautBfy4wWi7" target="_blank" rel="noreferrer noopener"><span>Google Mapで表示</span></a></p>
        <p className={styles.lastFlowTelLink}><a href="tel:0476331199 "><span>送迎バスを呼ぶ</span></a></p>
      </div>
      <div style={flow} className={styles.lastFlowLink} id="terminal2">
        <p className="label bg--gray --pd-xd text-smd">成田空港第2ターミナル お迎え場所</p>
        <StaticImage src="../images/guide/closingMap02.jpg" alt="成田空港第2ターミナルお迎え場所" />
        <p className={styles.lastFlowMapLink}><a href="https://goo.gl/maps/nb2a5uoj6GnMGFZF9" target="_blank" rel="noreferrer noopener"><span>Google Mapで表示</span></a></p>
        <p className={styles.lastFlowTelLink}><a href="tel:0476331199 "><span>送迎バスを呼ぶ</span></a></p>
      </div>

      <div style={flow} className="flex__wrap mb--md">
        <div className="flex-col-2--md">
        <div className="label bg--green text-md text-medium text-left ls01 bdr-xs">&#10103;送迎バスがお迎えします</div>
          <p className="text-light text-normal mb--sm">当社の白いシャトルバスがお迎えに上がります。お越しの際にお渡ししましたお預かり券をバスのドライバーにお渡しください。</p>
        </div>
        <div className="flex-col-2--md">
          <StaticImage src="../images/guide/closing02.jpg" />
        </div>
      </div>

      <div className="flex__wrap mb--md">
        <div className="flex-col-2--md">
        <div className="label bg--green text-md text-medium text-left ls01 bdr-xs">&#10104;到着専用ターミナルに到着</div>
          <p className="text-light text-normal mb--sm">お荷物を受け取り、 屋根付プラットフォームにご用意したお車にすぐにご乗車いただけます。</p>
        </div>
        <div className="flex-col-2--md">
          <StaticImage src="../images/guide/closing03.jpg" />
        </div>
      </div>

      <p className="sec__ttl text-medium">おつかれさまでした。<br className="br_maxmd" />またのご利用を<br className="br_maxsm" />お待ちしております！</p>

    </Wrap>

    </div>
    {/* content__wrap */}
  </Layout>
)

export default GuidePage