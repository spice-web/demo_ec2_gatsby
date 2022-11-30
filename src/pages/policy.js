import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";

import PageTitle from "../components/PageTitle"
// CSS
import * as Styles from "../styles/_policy.module.scss"

const PolicyPage = () => (
  <Layout>
    <Seo title="サイトポリシー・プライバシーポリシー" description="サンパーキングのサイトポリシー・プライバシーポリシーページになります"/>
    <PageTitle>POLICY<span>サイトポリシー・プライバシーポリシー</span></PageTitle>

    <div className="content__wrap content__pd">
      <div className="content__inner --sm text-light text-sm">
        <h3 className="label --pd-sm bg--green bdr-xs text-medium mb--md">サイトポリシー・プライバシーポリシー</h3>
        <p className="mb--sm">このウェブサイトは株式会社サン・ポート（以下当社といいます）が運営しています。 お客様が当サイトをご利用になる際に、前もってご了解いただきたいことや参考になることを説明します。</p>

        <dl className={Styles.def}>
          <dt>著作権について</dt>
          <dd>当サイト上の文書・写真・イラスト等（以下コンテンツといいます）は、当社ならびに第三者が有する著作権により保護されており、当サイトご利用の皆様は閲覧のみご利用いただけます。また、当サイトの利用者は、当サイトの利用をもってサイトポリシーの全てに同意したものとさせていだたきます。</dd>
          <dt>クッキー（Cookies）の使用について</dt>
          <dd>クッキー(Cookies)とは、ウェブサイトがお客様のコンピュータに送信してくるデータファイルで、お客様が再度訪れたときに、ウェブサイトがお客様のコンピュータから読み取ることができます。当サイトでは、一部のページでクッキー(Cookies)の仕組みを利用して、お客様が毎回入力する手間をはぶいたり、お客様が訪れたページの履歴情報などを収集することがあります。クッキー(Cookies)によってお客様の個人情報を得ることはありません。またお客様はクッキー(Cookies)の受取を拒否することができます。この場合、当サイトが提供するサービスを一部ご利用できない場合があります。</dd>
          <dt>コンテンツの改訂について</dt>
          <dd>当サイトまたは当サイト上のコンテンツは、予告なく変更、修正、削除、中断することがあります。当社は、当サイトに掲載された情報を更新する義務を負うものではなく、その約束をするものでもありません。当サイトのいかなる情報についても、常に最新情報に反映されるものではないことをご了承ください。</dd>
          <dt>リンクについて</dt>
          <dd>当サイトへリンクされる場合は、リンク元のサイトの運営主体、リンクの目的およびリンク元のページのURLなどを、事前に当社へご連絡ください。リンク先は原則として当サイトのトップページにお願いいたします。場合によってはリンクをお断りすることがあります。また、当サイトは、当社以外の第三者のサイトにリンクしている場合があります。当社は、このようなリンクはあくまで便宜上の目的で提供しており、リンク先サイトのコンテンツについて何ら責任を負うものではありませんのでご了承ください。なお、リンク先サイトを利用する場合には、その利用上のルールを遵守してご利用ください。</dd>
          <dt>JavaScriptおよびスタイルシートについて</dt>
          <dd>当サイト上では、JavaScriptおよびスタイルシートを使用しています。ご覧になる際にはブラウザ設定でJavaScript を有効にしてください。</dd>
          <dt>ブラウザについて</dt>
          <dd>当サイトを快適に閲覧・ご利用いただくためには以下のブラウザを推奨いたします。 Microsoft Internet Explorer 9以上 Google Chrome 最新版 お使いのブラウザがMicrosoft Edgeの場合はInternet Explorerで対応していた機能の一部が搭載されていないため画面を正しく表示できない場合があります。 Internet Explorerに切り替えてご覧ください。</dd>
        </dl>

        <h3 className="label --pd-sm bg--green bdr-xs text-medium mb--md">プライバシーポリシー</h3>
        <p className="text-right text-medium mb--sm">制定　2005年4月1日<br />株式会社サン・ポート</p>
        <p className="mb--md">株式会社サン･ポート（以下、弊社といいます）は、常にお客様へのサービス向上に取り組んでおります。お客様から弊社へ提供される情報は弊社がお客様によりよい商品・サービスを提供させていただくためにのみ使用されます。また、下記の通り情報保護方針を定め、個人情報の保護に努めます。</p>

        <dl className={Styles.def}>
          <dt>個人情報保護について</dt>
          <dd>弊社における個人情報は、利用目的に応じ業務上必要な範囲において、正確かつ適切に取り扱うことを基本といたします。
            <ul>
              <li>(1) 弊社における個人情報は、利用目的に応じ業務上必要な範囲において、正確かつ適切に取り扱うことを基本といたします。</li>
              <li>(2) 個人情報は、原則として目的以外の利用はいたしません。</li>
              <li>(3) 弊社は社員教育等により厳重な個人情報の管理、保管を行います。</li>
              <li>(4) お客様がご自身の個人情報の照会、修正等希望される場合には、お客様ご自身であることを確認した上で合理的な範囲で対応させていただきます。</li>
              <li>(5) なお弊社は、お客様の個人情報に関して適用される法令、規範を遵守するとともに上記の取り組みを実施し、適宜見直し、改善してまいります。</li>
              <li>(6) 個人情報保護方針の内容に変更があった場合は、弊社内、弊社ホームページ内にその旨を公表いたします。</li>
            </ul>
          </dd>

          <dt>個人情報の収集について</dt>
          <dd>収集した個人情報は、お客様へより良い商品・サービスを提供させていただくことを目的に、必要な情報として収集させていただきます。 個人情報の利用目的 お客様からいただいた個人情報は、下記の場合に限り利用し、お客様が個人情報を提供された目的以外に利用することはありません。
            <ul>
              <li>(1) 駐車場業務（付帯サービスを含む）を運用するため。</li>
              <li>(2) サービス・商品の改善、向上のため。</li>
              <li>(3) 電子メールまたは郵便による、弊社および提携先企業における新商品・サービスの弊社からのご案内のため。</li>
            </ul>
          </dd>

          <dt>個人情報の管理</dt>
          <dd>
            <ul>
              <li>(1) お客様の個人情報は、お申し込みいただいたサービス提供の記録として一定期間保存することがあります。
                <ul>
                  <li>① システムの維持・管理に関して守秘義務を課した業務委託先での使用。</li>
                  <li>② お客様に同意をいただいたとき。</li>
                  <li>③ 法令等により開示を求められた場合。</li>
                </ul></li>
              <li>(2) お客様の個人情報は、慎重に取り扱い、以下の場合を除き、第三者に提供または開示をすることはありません。</li>
              <li>(3) 弊社では、社員にお客様の個人情報の管理を徹底させ、外部への漏えい、不正アクセス、改ざん、紛失、破壊などが発生しないようセキュリティの強化に努めています。</li>
            </ul>
          </dd>

          <dt>個人情報のセキュリティについて</dt>
          <dd>
            <ul>
              <li>(1) 当社ホームページにてお客様とインターネットを通じて行われる個人情報はすべて暗号化（SSL対応）して送受信されています。 収集したすべての情報は外部に持ち出されることはありません。</li>
              <li>(2) 当社ホームページではクッキー（Cookie）を管理目的に使用しています。お客様が本ページに再度訪問された際に、より便利に閲覧していただくためのものであり、お客様のプライバシーを侵害したり、コンピューターへ悪影響を及ぼしたりするものではありません。</li>
            </ul>
          </dd>

          <dt>個人情報のお問い合わせまたは修正窓口</dt>
          <dd>お客様がお客様の個人情報の照会・修正ならびに削除をご希望される場合は、以下のお問い合わせ先までお申し出ください。可能な限りすみやかに対応いたします。</dd>
        </dl>

        <p>株式会社サン・ポート<br />
          〒286-0121千葉県成田市駒井野 134<br />
          受付時間&nbsp;&nbsp;9:00～17:00（土日祝、年末年始を除く）<br />
          TEL&nbsp;:&nbsp;0476-33-1155&nbsp;&nbsp;FAX : 0476-33-1198<br />
          e-mailによるお問い合わせは<Link to="/form" className="color text-deep-gr text-medium">こちら</Link>から</p>
      </div>
    </div>

    

  </Layout>
)

export default PolicyPage