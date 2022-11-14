import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import Seo from "../components/seo";
import PageTitle from "../components/PageTitle"
import Wrap from "../components/grayContainer"
import ButtonOp from "../components/button-option"

import * as styles from "../styles/_option.module.scss"

const link = 'https://www.sunparking.co.jp/form/rsv1.php?office_id=1';

const reservation = {
  position: 'relative',
  paddingBottom: '2rem'
}

const reservationButton = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  height: 'auto',
  // padding: '1rem 0',
  display: 'flex',
  justifyContent: 'space-between',
}

const taR = {
  textAlign: 'right',
  width: '100%',
}

const arrow = {
  fontSize: '0.5rem',
  marginLeft: '0.25rem'
}

const OptionPage = () => (
  <Layout>
    <Seo title="サンパーキンについて" />

    <PageTitle>OPTION<span>オプション</span></PageTitle>


{/* 空港お届けサービス */}
   <div className="content__wrap content__pd">
    <Wrap>
      <h2 className="sec__ttl link__inner" id="delivery">空港お届けサービス</h2>
      <div className={ styles.flexTop }>
        <p className={ styles.leftBox }>お車を成田空港へお届けするサービスをご用意しています。<br />「出発時駐車場経由空港引取り」は出発時駐車場受付で成田空港までスタッフが同乗してお届けするサービスです。<br />「お帰り時空港お車お届け」は駐車場をご利用いただき、お帰りに成田空港までお届けします。<br />※第３ターミナルでの引取り・お届けはできません。</p>
        <figure>
          <StaticImage
            src="../images/option/b2_001.jpg"
            alt="空港お届けサービス"
            quality="100"
            style={{ width:'100%' }}
          />
        </figure>
      </div>

      <dl className={styles.fee}>
        <dt>出発時 駐車場経由空港引取り</dt>
        <dd>駐車料金 + <span className="text-pk"><span className="text-bold text-lg">3,300円</span><span>（税込）</span></span></dd>
        <dt>お帰り時 空港お車お届け</dt>
        <dd>駐車料金 + <span className="text-pk"><span className="text-bold text-lg">3,300円</span><span>（税込）</span></span></dd>
        <dt>駐車場経由空港引取り＋空港お車お届け</dt>
        <dd>駐車料金 + <span className="text-pk"><span className="text-bold text-lg">5,500円</span><span>（税込）</span></span></dd>
      </dl>

      {/* 今すぐ予約 */}
      <ButtonOp />
    </Wrap>




{/* 洗車・カーメンテナンス */}
    <Wrap>
      <h3 id="maintenance" className="sec__ttl link__inner">洗車・カーメンテナンス</h3>
      <div className={styles.flexTop}>
      <p className={styles.leftBox}>サンパーキング全店では、お預かりしたお車をメンテナンスするメニューをご用意しております。 お出かけ中の時間を利用できるため、煩わしい待ち時間もありません。社内訓練された専属のスタッフがお客様のお車をきれいにし、メンテナンスなどを行なっております。 洗車やWAXだけでなくタイヤ交換・バッテリー液補充や充電・タイヤ空気圧補充・修理・車検など、どんなことでもご相談に応じさせて頂きますのでご遠慮なくお申し付け下さい。（実費ご負担いただきます）</p>
        <figure>
          <StaticImage
            src="../images/option/b2_002.jpg"
            style={{width:'100%'}}
            alt="洗車・カーメンテナンス"
          />
        </figure>
      </div>

      <div className="flex__wrap--md">
        <div className="flex-col-2--md mb--md">
          <h4 className={styles.headline}>洗車受注率98%</h4>
          <p className="pg--sm-light">当社をご利用になられたほとんどのお客様から洗車のご依頼を頂いております。 洗車はお客様のお帰りに合わせて行いますので、きれいな愛車で気持ち良くお帰り頂けます。</p>
        </div>

        <div className="flex-col-2--md mb--md">
          <h4 className={styles.headline}>検査員制度導入</h4>
          <p className="pg--sm--light">社内で定められた基準をクリアした者が（社内資格制度）お客様へのお引渡しまでをチェック。洗車の仕上がりなど万全の状態でお引渡し致しております。</p>
        </div>
      </div>


      <p className="text-lg text-deep-gr text-bold mb--sm">■ 有料洗車メニュー</p>
      <div className="scroll mb--lg">
        <StaticImage
          src="../images/option/graphWash.jpg"
          alt="有料洗車メニュー表"
          width={880}
          layout="fixed"
        />
      </div>
      
      <div className={styles.menu}>
        <dl>
          <dt>撥水コート（FK-2）</dt>
          <dd>今流行のコーティングWAX洗車。手洗い+シリコン系コーティング+ホイール洗浄+灰皿清掃でも¥3,000（税込3,300円）と驚きの価格でご提供!雨の日の驚きの撥水をご体験下さい!当社一押しのメニューです!もちろんホイールも隅々まで綺麗にしてタイヤWAXを塗ってからお引渡しとなります。</dd>
        </dl>
        <dl>
          <dt>手掛けWAX</dt>
          <dd>お車のサイズは問いません。（※バス、トラック、キャンピングカー以外、中型車以下のサイズになります）屋根まできれいに手掛けWAXを行ないます。しかも室内清掃込み!ホイールも隅々まできれいにしてタイヤWAXを塗ってからお引渡しとなります。</dd>
        </dl>
        <dl>
          <dt>室内清掃</dt>
          <dd>車内の清掃はお任せ下さい。プロ用のバキュームで隅々まできれいに致します。内窓やダッシュボードまで拭き取りいたします。</dd>
        </dl>
      </div>

      <p className="text-lg text-deep-gr text-bold mb--sm">■ KeePerコーティング</p>

      <div className={styles.coating}>
        <p className="text-light text-normal mb--md">KeePerのガラスコーティング「ダイヤモンドキーパー」と「クリスタルキーパー」は、従来のガラスコーティングとは異なり、よほど塗装の劣化が進行していない限り、研磨不要で驚きのツヤを出すことができます。サンパーキングならお出かけ中に施工しますので、超寿命のガラスコーティングを待ち時間なしで実現します!</p>
        <div className={styles.keeper}>
          <p to="/" className="text-center text-medium">KeePer<br />詳細はこちら→</p>
          <figure>
            <a href="https://www.keepercoating.jp/proshop/chiba/city625/05287/" target="_blank" rel="noreferrer noopener"><StaticImage src="../images/option/logo/keeper.jpg" /></a></figure>
        </div>
      </div>
          
      <div className="scroll">
          <StaticImage
          src="../images/option/Coating.jpg"
          alt="有料洗車メニュー表"
          width={880}
          layout="fixed"/>
      </div>

      {/* 今すぐ予約 */}
      <ButtonOp />
    </Wrap>


{/* 海外・国内旅行保険 */}
    <Wrap>
      <h3 id="insurance" className="sec__ttl link__inner">海外・国内旅行保険</h3>
      <div className={styles.flexTop}>
        <p className={styles.leftBox}>海外旅行中は、予期せぬトラブルが起こる可能性があります。旅先はもちろん、出発から帰宅まで万全サポートできる保険を取り扱っております。 旅行中の様々なトラブルに対応しており、またクレジットカード付帯の海外旅行保険を補う合理的なプランもご用意しています。インターネットから簡単に契約ができ、旅行の当日までお申込みが可能です。</p>
        <figure><StaticImage src="../images/option/hoken.jpg" /></figure>
      </div>


        <div className={styles.hoken}>
          <dl>
            <dt>
              <StaticImage
                src="../images/option/logo/hs.jpg"
                width={252}
                style={{mixBlendMode: 'multiply'}}
                alt="エイチ・エス保険"
              />
            </dt>
            <dd>”リーズナブルな保険料”で"充実な補償"がたびともの魅力!ご家族・ご友人もご一緒に!LINE電話で海外サポートセンターへ24時間365日日本語で無料通話OK!</dd>

          </dl>
          <dl>
            <dt>
              <StaticImage src="../images/option/logo/tabiho.jpg"
                alt="たびほ"
                width={150}
              />
            </dt>
            <dd>”リーズナブルな保険料”で"充実な補償"がたびともの魅力!ご家族・ご友人もご一緒に!LINE電話で海外サポートセンターへ24時間365日日本語で無料通話OK!</dd>
          </dl>
          <dl>
            <dt>
              <StaticImage src="../images/option/logo/chubb.jpg"
                width={180}
                alt="チャブ保険"
                style={{mixBlendMode: 'multiply'}}
               />
            </dt>
            <dd>日本語サービスセンターは24時間対応。キャッシュレス医療サービスで、お客様による治療費立替えは不要。チャブが直接、病院に治療費をお支払いするので安心。</dd>
          </dl>
        </div>
        
        <div className={styles.compare}>
          <a href="http://www.sunhoken.jp/" target="_blank" rel="noreferrer noopener">日数と行き先で保険料がスグわかる<br />海外旅行保険かんたん比較はこちら</a>
        </div>
 
        {/* 今すぐ予約 */}
        <ButtonOp />
      </Wrap>

      <Wrap>
          <h3 id="electrification" className="sec__ttl link__inner">電気自動車充電サービス</h3>
          <div className={styles.flexTop}>
            <div className={styles.leftBox} >
              <h4 className={styles.headline}><span className="br_sm">電気自動車、</span>プラグインハイブリッド車充電器設置</h4>
              <p className="pg--normal-lgt lh2 mb--lg">サンパーキング成田店では、電気自動車充電用の200V（普通充電器）と、テスラ充電用のデスティネーションチャージングが設置されています。旅行からの帰路で、バッテリー残量が足りなくなるといった不安を解消いたします。<br /><span className="note">※必ず充電用コードをお持ちください。※テスラ・ロードスターは充電できません。</span></p>
              
            </div>
            <figure>
              <StaticImage src="../images/option/b2_008.jpg" />
            </figure>
          </div>

      {/* 今すぐ予約 */}
      <ButtonOp />
    </Wrap>

{/* Flex ブロック */}
<div className={styles.service_wrap}>
  {/* レンタルモバイル */}
  <Wrap>
    <h3 className="sec__ttl link__inner" id="rental">レンタルモバイル</h3>
    <div className={styles.service}>
      <div className="text-sm text-light mb--md">国内も海外も!旅先で使える携帯電話をプラス!</div>
      <div className="img"><StaticImage src="../images/option/mobile.jpg" /></div>
    </div>

    {/* inner */}
    <div style={reservationButton} className={styles.reservationButton}>
      <a style={taR} href="https://www.site.jalabc.com/agency/7639/mobile/" target="_blank" rel="noreferrer noopener">今すぐ予約<span style={arrow}>&#9654;&#9654;&#9654;</span></a>
    </div>
    </Wrap>
  {/* レンタルモバイル */}

{/* 宅配サービス */}
<Wrap>
  <h3 id="takuhai" className="sec__ttl link__inner">空港宅配サービス</h3>
  <div className={styles.service}>
    <div className="text-sm text-light mb--md">カラダ一つで楽々旅行!行きも帰りも空港で荷物を配送します。</div>
    <div className="img"><StaticImage src="../images/option/takuhai.jpg" /></div>
  </div>
  {/* inner */}
  <div style={reservationButton} className={styles.reservationButton}>
    <a style={taR} href="https://www.site.jalabc.com/agency/5213/takuhai/" target="_blank" rel="noreferrer noopener">今すぐ予約<span style={arrow}>&#9654;&#9654;&#9654;</span></a>
  </div>
</Wrap>
{/* 宅配サービス */}

{/* JAF */}
<Wrap>
  <h3 className="sec__ttl link__inner" id="jaf">JAF</h3>
  <div className={styles.service}>
    <div className="text-sm text-light mb--md">もしもの時の頼れる味方。会員優待施設も充実しています。</div>
    <div className="img"><StaticImage src="../images/option/jaf.jpg" /></div>
  </div>

  {/* inner */}
  <div style={reservationButton} className={styles.reservationButton}>
    <a style={taR} href="https://jafnavi.jp/jyyk/pa/" target="_blank" rel="noreferrer noopener">今すぐ予約<span style={arrow}>&#9654;&#9654;&#9654;</span></a>
  </div>
</Wrap>
{/* JAF */}
</div>
{/* Flex ブロック */}


   </div>
   {/* content__wrap */}
  </Layout>
)

export default OptionPage