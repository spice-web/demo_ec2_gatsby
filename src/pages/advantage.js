import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import PageTitle from "../components/PageTitle"
import Wrap from "../components/grayContainer"

// css
import * as styles from "../styles/_advantage.module.scss"


const AdvantagePage = () => (
  <Layout>
    <Seo title="サンパーキンについて" />
    <PageTitle>ADVANTAGE<span>選ばれる理由</span></PageTitle>

    <Wrap>
      <h3>成田空港公式駐車場と比較しても 断然サンパーキング成田店が 便利でおトク！</h3>
      <p className="pg--md">
      公式の駐車場は、「高いぶん利便性が高い」と思っていませんか？サンパーキング成田店が選ばれるのには理由があります。実は、料金だけでなく、駐車場に到着してからの手間やサービスにおいても優位性がある事に気づいているお客さまが多くいらっしゃいます。
      </p>

      <h4 className="headline--greenLabel">サービスの比較</h4>

      <h4 className="headline--greenLabel">料金の比較</h4>
      <p className="pg--md">
      家族4人（大人2人、子供2人）4泊5日で成田空港をご利用になる場合を比較するとサンパーキング成田店が安い！
      </p>
    </Wrap>

    <Wrap>
      <h3>追加料金なしの明朗会計！ 長期利用は1日わずか220円。 ※10日目以降</h3>
      <p>基本料金、夜間早朝の出発＆到着、予定より早い帰着などによる追加料金はありません。また、高級車、特殊な車、大型SUV、キャンピングカーなど、車種によっての追加料金もありません。帰国日が決まっていなくても長期の場合は10日目以降は1日220円なので、1ヶ月単位で出張や旅行に行かれるお客様に好評です。</p>

      <h4 className="headline--greenLabel">
      駐車場を使うと他の交通機関に比べて 「高い」と考えていませんか？
      </h4>
      <p className="pg--md">
      サンパーキング成田店の料金は、他の交通機関と比べてもお安いんです。ご自宅からサンパーキングまで車で移動すれば重い荷物をご自分で運ぶ距離もわずかです。小さなお子様やお年寄りがご一緒の場合ならなおのこと快適です。
      </p>
    </Wrap>
    
    <Wrap>
      <h3>創業30年以上の 最古参人気駐車場。 航空会社との連携も充実</h3>
      <div className="flex__wrap--md">
        <p className="pg--md flex-col-2--md">
        空港管理会社のNAAや、ANA、JAL、Peach、ZIPAIR、Jetstarなどの航空会社や、JTB、HIS、近畿日本ツーリストなどの大手旅行会社とも連携がとれていて安心。駐車料金でマイルが貯められるのも嬉しいポイント！空港勤務者も多数利用している信頼と安心の駐車場です！ ※通常料金でのご利用のみマイル対象となります。
        </p>

      
        <figure className="flex-col-2--md">
          <StaticImage
            src="../images/advantage/logo_pc.jpg"
            className="br_md"
            width={410}
          />
          <StaticImage src="../images/advantage/logo_sp.jpg" className="br_maxmd"
          width={702}/>
        </figure>
      </div>
    </Wrap>

    <Wrap>
      <h3>安心安全な車両管理設備。 鍵は専用金庫で保管で リレーアタック対策も万全。</h3>

      <div className="flex__wrap">
        <p className="pg--md flex-col-2--md">24時間警備会社が警備をしています。また預かった鍵は全て専用の金庫で保管するのでリレーアタック対策も万全です。また夜間に関しては、駐車場の出入り口に施錠する、マイクロバス等を配置して侵入を防ぐ対策がされています。</p>
        <div className="flex-col-2--md">
          <StaticImage src="../images/advantage/key.jpg" />
        </div>
      </div>
    </Wrap>

    <Wrap>
      <h3>駐車場でありながら 洗車は専門店並み。 手洗い洗車受注率98％。</h3>

      <div className="flex__wrap">
        <p className="pg--md flex-col-2--md">Keeperコーティングの代理店で、有資格者が在籍しているので、駐車場でありながら洗車は専門店レベル。お出かけ中の時間を利用して洗車するので待ち時間もありません。 また、公式LINEのお友だち登録で洗車無料クーポンや、定期的な割引クーポンもありおトクに利用できます。</p>
        <div className="flex-col-2--md">
          <StaticImage src="../images/advantage/wash.jpg" />
        </div>
      </div>

      <StaticImage src="../images/advantage/logo_keeper.jpg" className="br_maxmd"/>
      <StaticImage src="../images/advantage/logo_keeper_wide.jpg" className="br_md" />
    </Wrap>

    <Wrap>
      <h3>第一印象が最高に良い接客</h3>
      <div className="flex__wrap">
        <p className="flex-col-2--md pg--md">
          お客様重視のサングループでは、首都圏で唯一となる専属での予約センターの部門を設けており、オペレーターが専属でお問合せなどの電話を懇切丁寧にご案内しております。 社員、アルバイトに関わらず新人全員、全店で入社前研修を受け、当社で仕事をする心構え・社内規定・お客様の車両の取扱ルールなどを学びます。この研修を受けずしてサンパーキングのスタッフとして現場に出ることはできません。 また、お客様アンケートなどのご意見を真摯に受け止め、待合室の清掃や、スタッフの身だしなみ、接客のクオリティ向上にも力を入れております。
        </p>
        <div className="flex-col-2--md">
          <StaticImage src="../images/advantage/member.jpg" />
        </div>
      </div>
    </Wrap>

    <Wrap>
      <h3>お待たせしない、 スムーズな無料送迎！</h3>
      <div className="flex__wrap">
        <p className="flex-col-2--md pg--md">
        空港ターミナルまで直行の送迎バスで迷うことなし！マイクロバス保有台数も成田空港No.1でお待たせしません！ サングリーンのシャトルバスはお客様も驚くほどの高回転。その秘訣は、全てのバスが無線で交信し常に場所を把握しているから。重たい荷物のバスへの積み下ろしもスタッフが対応します。 当然無料送迎です！
        </p>
        <div className="flex-col-2--md">
          <StaticImage src="../images/advantage/bus.jpg" />
        </div>
      </div>
    </Wrap>

    <Wrap>
      <h3>空港アクセスに 最短な駐車場</h3>
      <div className="flex__wrap">
        <p className="flex-col-2--md pg--md">
        成田ICを降りてまっすぐ！空港通り沿いの交差点に位置しているので、建物も目立ちわかりやすい＆入りやすい。 東関東自動車道「成田I.C.」料金所の「成田市内」を出て、国道295号を「空港方面」へお進みください。 サンパーキング成田店は「成田I.C.」より約3分、サンレッドガレージは「成田I.C.」より約5分です。
        </p>
        <div className="flex-col-2--md">
          <StaticImage src="../images/advantage/building.jpg" />
        </div>
      </div>
      <StaticImage src="../images/advantage/map.jpg" alt="サンパーキング周辺マップ" />
    </Wrap>
  </Layout>
)

export default AdvantagePage