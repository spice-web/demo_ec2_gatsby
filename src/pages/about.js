import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";

import Wrap from "../components/grayContainer"

// GoogleMap
import GoogleMap from "../components/GoogleMap"

// CSS
import * as Styles from "../styles/_about.module.scss"

const AboutPage = () => (
  <Layout>
    <Seo title="サンパーキンについて" />
    <h2 class="headline--title">COMPANY PROFILE<span>会社情報</span></h2>
    <div className="content__wrap content__pd">
      <div className="content__inner --sm">
        <p className="pg--md">株式会社サン･ポートは1985年に成田空港利用者用駐車場「サンパーキング」を開業し、 地域とともに事業を展開・発展させてまいりました。 創設より、私たちは駐車場を出発地と目的地をつなぐ「心安らぐアクセスポイント」と考え、 駐車システムとサービスの充実に力を注ぎ、地域ナンバーワンのサービス産業を目指してまいりました。 今後も成熟した車社会の中で、お客様をあたたかくお迎えする「港」となるために、 未来のモビリティ･ライフを見つめながら、新たなチャレンジを続けてまいります。</p>
      </div>

      <Wrap>
        <div className="content__inner--xs">
          <h2 class="headline--title mb--md underLine">Philosophy<span>私たちの理念</span></h2>
          <p className="pg--md">私たちは、お客様への最高のサービスを提供することを使命と考え行動し、仕事を通じて自己研鑽に努め、能力の向上と共に人生の目標を達成し、事業のグローバルな展開によって社会の発展に貢献します。<br />
          <br />
          ●お客様の笑顔は最高の褒め言葉です 。私たちは、お客様が笑顔で出発し笑顔でお帰りいただくためにどうしたらよいのかを常に考えています。 私たちの笑顔にお客様が笑顔で応えてくれたとき、それは最高の褒め言葉となり私たちは笑顔になれるのです。</p>
        </div>
      </Wrap>
    </div>

    <div className="content__wrap content__pd bg--gray text-white">
      <h2 class="headline--title text-white">COMPANY PROFILE<span>会社情報</span></h2>

      {/*  */}
      <div className="content__inner --sm">
        <dl className={Styles.gridCompany}>
          <dt>会社名</dt>
          <dd>株式会社サン･ポート</dd>
          <dt>本　社</dt>
          <dd>千葉県成田市駒井野 134</dd>
          <dt>創　業</dt>
          <dd>1985年 2月</dd>
          <dt>資本金</dt>
          <dd>1,000 万円</dd>
          <dt>代表者</dt>
          <dd>代表取締役　清宮 正博</dd>
          <dt>従業員</dt>
          <dd>150名</dd>
          <dt>事　業</dt>
          <dd>空港利用者用駐車場</dd>
        </dl>


      <h3 className="text-white text-center bdr-white bg--pale-gray label mb--md">事　業　所</h3>

      <div className={Styles.office}>
        <dl>
          <dt>本社</dt>
          <dd>
            <ul>
              <li>千葉県成田市駒井野 134</li>
              <li>TEL : 0476-33-1155</li>
              <li>FAX : 0476-33-1198</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>サンパーキング成田店</dt>
          <dd>
            <ul>
              <li>千葉県成田市駒井野 134</li>
              <li>TEL : 0476-33-1166</li>
              <li>FAX : 0476-33-1167</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>サン予約センター</dt>
          <dd>
            <ul>
              <li>千葉県成田市駒井野134</li>
              <li>TEL : 0476-33-1123</li>
              <li>FAX : 0476-33-1331</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>プレミアパーキング</dt>
          <dd>
            <ul>
              <li> 千葉県成田市駒井野 134</li>
              <li>TEL : 0476-33-5800</li>
              <li>FAX : 0476-33-1167</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>レンタルスペース事業部</dt>
          <dd>
            <ul>
              <li>千葉県成田市駒井野134</li>
              <li>TEL : 0476-33-1155</li>
              <li>FAX : 0476-33-1198</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>人材派遣事業部</dt>
          <dd>
            <ul>
              <li>千葉県成田市駒井野 134</li>
              <li>TEL : 0476-33-1155</li>
              <li>FAX : 0476-33-1198</li>
            </ul>
          </dd>
        </dl>
      </div>
      {/* 事業内容 */}

      {/* 沿革 */}
        <h3 className="text-white text-center bdr-white bg--pale-gray label mb--md">沿&nbsp;&nbsp;&nbsp;革</h3>

      <div className={Styles.history}>
        <ul className="flex-col-2--md text-sm">
          <li>1990年4月 / 予約センター開設</li>
          <li>1995年4月 / 中長期計画とCIを導入</li>
          <li>1995年12月 / サンパーキング成田新社屋完成</li>
          <li>1998年12月 / サンレッドガレージ店設立</li>
          <li>1999年2月 / POSシステムの導入</li>
          <li>1999年12月 / 到着専用ターミナル設置</li>
          <li>2001年3月 / サンパーキング羽田浮島店設立</li>
          <li>2002年12月 / エース損害保険（現:Chubb損害保険）<br />代理店登録（旅行傷害保険取扱い開始）</li>
          <li>2003年3月 / 本社・予約センター公津の杜駅ビルへ移転</li>
          <li>2003年7月 / サンパーキング羽田大井店設立</li>
          <li>2004年4月 / プレミアパーキング設立</li>
          <li>2006年3月 / 浮島店拡張（大井店統合）</li>
          <li>2007年11月 / ホームページリニューアル</li>
          <li>2009年3月 / POSシステムリニューアル</li>
          <li>2010年9月 / 本社成田市駒井野へ移転</li>
          <li>2010年12月 / サンレッドガレージリニューアル</li>
        </ul>

        <ul className="flex-col-2--md text-sm">
          <li>2011年5月 / ホームページリニューアル</li>
          <li>2012年9月 / 旅行傷害保険 比較サイト開始</li>
          <li>2012年10月 / 新SUNメンバーズカード開始</li>
          <li>2012年10月 / 成田店、プレミアパーキング<br />早朝4:30オープン開始</li>
          <li>2014年4月 / プレミアパーキング 駒井野へ移転</li>
          <li>2014年6月 / 公式サイトスマホ版スタート</li>
          <li>2014年8月 / 成田駐車場サービス営業権継承</li>
          <li>2014年10月 / 成田－羽田 マイカー車載陸送サービス開始</li>
          <li>2015年2月 / 成田－羽田 マイカー自走回送サービス開始</li>
          <li>2015年4月 / 空港勤務者向け月極駐車サービス開始（成田店）</li>
          <li>2015年7月 / キーパーコーティングプロショップ登録</li>
          <li>2016年2月 / 成田LCCコース発売（サンレッドガレージ）</li>
          <li>2017年5月 / 成田羽田空港間回送サービス1000台達成</li>
          <li>2019年2月 / 成田店拡張(成田駐車場サービス統合)</li>
          <li>2019年3月 / 浮島店移転</li>
          <li>2020年1月 / 浮島店休業</li></ul>          
      </div>
      {/* 沿革  */}

      </div>
      {/* inner  */}

    </div>
    {/* content__wrap */}
    

    <GoogleMap />
    
  </Layout>
)

export default AboutPage