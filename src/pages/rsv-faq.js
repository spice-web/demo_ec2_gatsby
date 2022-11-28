import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo";

//components
import PageTitle from "../components/PageTitle"
import Wrap from "../components/grayContainer"
import * as styles from "../styles/_rsv-faq.module.scss"

const TitleStyles = {
  padding: "10px 30px 10px 20px",
  borderRadius: "3px",
}

const MoreInfoPage = ( {data} ) => (
  <Layout>
    <Seo 
      title="ご予約でお困りの場合"
      description="ご予約でお困りの場合はこちらをご確認ください"
    />
    <PageTitle>ご予約でお困りの場合</PageTitle>

  <div className="content__wrap content__pd">
    <Wrap>
      <div className={styles.rsvFaq}>
    {/* 開閉パーツ */}
    <dl class="faq">
       <dt style={TitleStyles} className="headline--greenLabel faq__title">
       予約お申し込みのお知らせメールが届かない<button class="question-button"><span></span><span></span></button>
       </dt>
       <dd class="text-sm faq__answer">
        <p className="mb--md">当サイトでは、お客様からの予約申込みに迅速に対応するよう努力をしております。「予約フォームご案内メール」は通常、メール発行ボタンをクリック後、すぐに送信する仕組みとなっております。 クリック後、10分以上経っても「予約フォームご案内メール」の受信が確認できない場合は、下記をご確認ください。</p>
        <dl>
          <dt className={styles.hl_lv1}>スマートフォンから予約申込をする場合</dt>
          <dd>
            <ul>
              <li>
                <dl>
                  <dt>迷惑メール対策によりメールがブロックもしくは受信制限をされている場合</dt>
                  <dd>「henshin＠sunparking.co.jp」からのメールを受信できるように設定をお願いいたします。また、URL付のメールを受信拒否している場合は受信できるよう設定をお願いいたします。docomo、au、softbank、その他のスマートフォンをお使いのお客様の設定方法についてはご契約の各携帯電話会社にお問合せください。</dd>
                </dl>
              </li>
              <li>
              <dl>
                  <dt>メールが迷惑メールフォルダに入っている場合</dt>
                  <dd>「迷惑メールフォルダ」「ごみ箱」の中のメールフォルダをご確認ください。</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>メールアドレスの入力間違い</dt>
                  <dd>再度ご入力いただいたアドレスをご確認下さいますようお願い申し上げます。</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>メールボックスの容量がオーバーしている</dt>
                  <dd>メールボックスの容量がいっぱいになり、新しいメールが受信できていない可能性がございます。<br />メールを削除し、受信フォルダの整理をお願いいたします。</dd>
                </dl>
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt className={styles.hl_lv1}>パソコンから予約申込をする場合</dt>
          <dd>
            <ul>
              <li>
                <dl>
                  <dt>フリーメール（hotmail、Gmail、AOLメールなど）をご利用の場合</dt>
                  <dd>フリーメールをご利用の場合、URL付のメールは自動的に迷惑メールフォルダに入ってしまうことがあります。必ず迷惑メールフォルダをご確認ください。<br />また、フリーメールの有料オプションなどでフリーメール専用のセキュリティを設定している場合、URL付のメールは受信しないように設定されていることがありますので、お客様ご自身の責任でURL付のメールが受信できるように設定していただかなければなりません。<br />
                  ご利用のフリーメールサービスによっては、送受信に不具合が発生する場合がございますので、仮に10分以上経っても「予約フォームご案内メール」の受信が確認できない場合、別のメールアドレスで再度、新規に予約申込をしてください。</dd>
                </dl>
              </li>
              <li>
              <dl>
                  <dt>セキュリティソフト（ウイルスバスターなど）を導入している場合</dt>
                  <dd>お客様のセキュリティ設定によっては、スパムメールとして認識され、「迷惑メールフォルダ」等に振り分けられてしまうことがございます。その場合、「迷惑メールフォルダ」もご確認いただくか、お客様ご自身の責任で設定の変更をしていただく必要がございます。</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>メールサーバーの容量がいっぱいになっている場合</dt>
                  <dd>メールサーバーにコピーを残してメールを受信している場合や、容量の制限があるフリーメールなどをご利用の場合、メールサーバー容量がいっぱいになってしまうことがございます。その場合は、弊社からメールを送信させていただいてもメールサーバー側で受信を拒否してしまいます。<br />メールソフトの設定を見直していただき、それでも解決しない場合は、お客様ご自身でご利用のプロバイダなどにお問合せをしていただく必要がございます。</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>メールソフトを開いたまま『 予約フォームご案内メール 』を送信した場合</dt>
                  <dd>お客様が設定をされている（もしくは初期設定されている）間隔でしかメールソフトは送受信を開始いたしませんので、メールソフトをご利用のお客様は、弊社からのメールが受信されない場合、メールソフト内にある受信（または送受信）ボタンをクリックしていただき、メールサーバーに新規メール問合せをしていただく必要がございます。<br /><span className="note">※メールソフト = outlookやthunderbirdなど</span></dd>
                </dl>
              </li>
            </ul>
          </dd>
        </dl>
       </dd>
     </dl>
    {/* 開閉パーツ */}

    {/* 開閉パーツ */}
     {/* <dl class="faq">
       <dt style={TitleStyles} className="headline--greenLabel faq__title">
       ネット予約申込時に『この接続ではプライバシーが保護されていません』と表示される場合<br />（Androidをご利用のお客様）<button class="question-button"><span></span><span></span></button>
       </dt>
       <dd class="text-sm faq__answer">
        <p className="mb--md">Googleの「Android8.0」「Android7.0」「Android6.0」「Android5.0」を搭載したタブレットを搭載したAndroidスマートフォン・タブレット（Nexus、Xperia、ARROWS、GALAXY、Zenfone、MotoRoLA、Huwawei、HTCなど）を利用している際に「『Chrome』弊社Webサイトにアクセス時に『この接続ではプライバシーが保護されていません』と表示される」ことがございます。<br />これは、お使いのAndroidのエラーで以下の処理を行っていただくことで正常にお使いいただくことが出来ます。お使いのブラウザが不明な方は、以下インターネットをご利用の際、クリックするアイコンの画像で当てはまるものをご確認ください。<br /></p>
        <dl>
          <dt className={styles.hl_lv1}>解消方法A</dt>
          <dd>
            <ul>
              <li>「ホーム画面」→「Chrome」を開く→「三」を選択する→「設定」を選択</li>
              <li>「設定」画面で「詳細設定」を選択→「基本」タブの「閲覧履歴データを消去する」を選択</li>
              <li>「閲覧履歴データを消去する」画面で「閲覧履歴」、「Cookieと他のサイトデータ」、「キャッシュされた画像とファイル」を選択し。「データ消去」を選択しAndroid本体を再起動してください。</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt className={styles.hl_lv1}>上記の処理を行っても解消出来ない場合の解消方法B</dt>
          <dd>
            <ul>
              <li>「ホーム画面」→「Google Playストア」の「アップデート」から全てアプリを最新バージョンにアップデートしてください。</li>
              <li>「ホーム画面」→「設定」→｢端末情報｣→「システム・アップデート」から最新バージョンにアップデートしてください。</li>
              <li>「ホーム画面」→「設定」→｢端末情報｣からお使いのAndroidのバージョンが不具合の発生しているアプリに対応しているかを確認してください。</li>
              <li>「ホーム画面」→「設定」→「アプリ」→「Chrome」アプリの「キャッシュを消去」を選択します</li>
              <li>「ホーム画面」→「設定」→「アプリ」→「Chrome」アプリの「強制終了」もしくは「停止する」を選択します。</li>
              <li>「ホーム画面」→「設定」「アプリ」→「アプリ情報」から直近にインストールしたアプリをアンインストールしてください。</li>
              <li>「ホーム画面」→「設定」→「ストレージ」→「キャッシュ」から不要なキャッシュファイルを削除してください。</li>
              <li>「ホーム画面」→「設定」→「アプリ」からバックグラウンド上にて起動しているアプリのプロセスを停止してください。</li>
              <li>「ホーム画面」の「戻る（画面右下）」を選択→バックグラウンドが面から全てのアプリを横にスワイプします。</li>
              <li>「電源ボタン」を長押し→「再起動」または「シャットダウン」から「Android」スマートフォン・タブレットを再起動してください。</li>
              <li>「ホームボタン」と「電源（音量）ボタン」を同時押し、「Android」スマートフォン・タブレットを強制的に再起動してください。</li>
            </ul>
          </dd>
        </dl>
       </dd>
     </dl> */}
    {/* 開閉パーツ */}

    {/* 開閉パーツ */}
      <dl class="faq">
        <dt style={TitleStyles} className="headline--greenLabel faq__title">
        パソコンでの不具合について<button class="question-button"><span></span><span></span></button>
        </dt>
        <dd class="text-sm faq__answer">
          <p className="mb--md">パソコンのブラウザIE9以前のものをご利用の方で正常に動作しない場合については、ブラウザのバージョンアップや他のブラウザへの切り替え、ご利用の端末のソフトウェアのバージョンアップを行うことでの改善を確認しております。最新のものへアップデートしてご利用ください。</p>
          <dl>
            <dt className={styles.hl_lv1}>お使いの「Internet Explorerブラウザのバージョン」確認方法</dt>
            <dd className="mb--md">
              <p className="mb--sm">「ヘルプ」メニューで「バージョン情報」を選択します。</p>
              <StaticImage src="../images/other/rsv_qa_check_version.jpg" alt="バージョン情報" className="mb--sm" />
              <p className="mb--sm">→「バージョン」というところの数字を確認してください。<br />→「OK」をクリックし、ウィンドウを閉じます。</p>
              <StaticImage src="../images/other/rsv_qa_result_version.jpg" alt="Internet Explorerのbaジョン方法" className="mb--sm" />
              <p>9より以前のバージョン（6・7・8・9など）をご利用の場合は、大変お手数ではございますが「最新バージョンへの更新」または「他のブラウザをご利用いただく」ようにお願い致します。<br />尚、WindowsXPなど最新のバージョンへの更新ができない端末もございます。ご利用の方におかれましては、他のブラウザをご利用いただけますようお願い致します。</p>
              <p className="mb--sm">Internet Explorer 11 のサポートは、2022 年 6 月 15 日に終了しました。 Internet Explorer 11 は、2023 年 2 月 14 日以降はアクセスできなくなります。</p>
              <p className="text-deep-gr">Microsoft Edge 最新バージョンのダウンロードはこちら（無料）<br />
              <a href="" target="_blank" rel="noreferrer noopener">https://www.microsoft.com/ja-jp/edge</a></p>
            </dd>
          </dl>

          <dl>
            <dt className={styles.hl_lv1}>●「他のブラウザ」について</dt>
            <dd>
              <p className="text-deep-gr">◎Google Chrome</p>
              <p className="text-deep-gr mb--sm">Google Chrome ブラウザをダウンロード（無料）<br />
              Google Chromeパソコン用<br />
              <a href="https://www.google.com/intl/ja/chrome/" target="_blank" rel="noreferrer noopener">https://www.google.com/intl/ja/chrome/</a></p>
              <p className="text-deep-gr mb--sm">Google Chromeスマートフォン用<br />
              <a href="https://play.google.com/store/apps/details?id=com.android.chrome&hl=ja" target="_blank" rel="noreferrer noopener">https://play.google.com/store/apps/details?id=com.android.chrome&hl=ja</a></p>

              <p>デスクトップ上に、「Google Chrome」のアイコンが出ますのでそちらを立ち上げます<br />
              ↓<br />
              Google検索の窓が表示されますので「サンパーキング」を検索してホームページにアクセスしてください<br />
              ↓<br />
              ログインしてお試しください</p>
            </dd>
          </dl>





        </dd>
      </dl>
    {/* 開閉パーツ */}

    {/* 開閉パーツ */}
      <dl class="faq">
        <dt style={TitleStyles} className="headline--greenLabel faq__title">
        スマートフォンで予約申込をしている途中でボタンが押せなくなった<button class="question-button"><span></span><span></span></button>
        </dt>
        <dd class="text-sm faq__answer">予約申込の途中でボタンが押せなくなることがございます。これはスマートフォンの不具合等によるものなので、開いている画面を全て閉じるか再起動をして再度お申し込みをしてください。</dd>
      </dl>
    {/* 開閉パーツ */}
      </div>


    </Wrap>

    </div>
    {/* content__wrap */}
  </Layout>
)

export default MoreInfoPage