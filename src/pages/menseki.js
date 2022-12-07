import * as React from "react"
// import scrollTo from 'gatsby-plugin-smoothscroll';
import Layout from "../components/layout"
import Seo from "../components/seo";
import PageTitle from "../components/PageTitle"
// import Wrap from "../components/grayContainer"

const defList  = {
  marginBottom: "1.5rem",
}

const defTitle = {
  fontWeight: "bold",
  marginBottom: "0.25rem",
}

const MensekiPage = () => (
  <Layout>
    <Seo
      title="免責事項"
      description="サンパーキング免責事項について"
    />
    <PageTitle>Disclaimer<span>免責約款</span></PageTitle>

    <div className="content__wrap content__pd">
      <div className="content__inner --sm">
      <p style={{marginBottom: "1rem"}}>お預りした車輌に関する下記諸条項は，免責とさせて頂きます。</p>
      <dl style={defList}>
        <dt style={defTitle}>車輌引き渡し後の責任</dt>
        <dd>空港若しくは，当社の駐車場においてお客様へ車輌をお引き渡した後は原則として車輌に関する一切の責任を負いかねます。</dd>
      </dl>
      <dl style={defList}>
        <dt style={defTitle}>車輌の損傷</dt>
        <dd>お預り時およびお引き渡し時の相互未確認の車輌の傷につきましては免責とさせて頂きます。 尚，お預り期間中の洗車後に当社によって発見された相互未確認の傷につきましても同様です。</dd>
      </dl>
      <dl style={defList}>
        <dt style={defTitle}>内燃機関に関するもの</dt>
        <dd>車輌の新旧に関わらずお預かりしている間に内燃機関などに支障が起きる場合が有ります。 お預り期間中の内燃機関及び補助機器（ミッションやアクセル）の支障に関しましては一切を免責とさせて頂きます。</dd>
      </dl>
      <dl style={defList}>
        <dt style={defTitle}>タイヤに関するもの</dt>
        <dd>駐車場にお預かりしている間にタイヤがパンクしている場合が有ります。 その場合，走行不能の為，止むを得ずお客様の了解なしに修理いたしますが，修理代金に関しましてはお客様のご負担となります。</dd>
      </dl>
      <dl style={defList}>
        <dt style={defTitle}>お預り車輌内の遺留物に関するもの</dt>
        <dd>車輌内の金品につきましては事前のお申し出の無いものに関しては，全て免責とさせて頂きます。</dd>
      </dl>
      <dl style={defList}>
        <dt style={defTitle}>お預り途中の車輌の引き渡しに関するもの</dt>
        <dd>預けられたご本人以外の方がお引取にこられた場合は，ご本人の委任状または， 信憑性のある正当な書類を所持している方，若しくは事前にご連絡の有った方のみにしかお車をお渡しいたしませんが， それらの第三者のお引き渡しした後の事は全て免責とさせて頂きます。</dd>
      </dl>
      <dl style={defList}>
        <dt style={defTitle}>走行距離に関するもの</dt>
        <dd>お預りした車輌は，必ずしも当社所在地に置けない場合が多く， 当社の所有または契約する第二・第三駐車場へ移動させて頂くケースがあります。従いまして， 走行距離はお預りした時点よりは幾らかキロ数が伸びる場合がありますので，ご了承ください。</dd>
      </dl>
      <dl style={defList}>
        <dt style={defTitle}>窓ガラスに関するもの</dt>
        <dd>走行中飛び石によりフロントガラスやサイドガラスに傷がつく場合がありますが，不可効力による損傷の為，免責とさせて頂きます。</dd>
      </dl>
      <dl style={defList}>
        <dt style={defTitle}>お荷物に関するもの</dt>
        <dd>お荷物の管理・取り扱いにつきましては、お客様ご自身の責任にて御願い致します。万一、取り違い、紛失、内容物の破損が生じましても一切の責任を負いかねます。尚、お荷物の積み下ろしの際、過積載及び消耗等が原因でスーツケースの持ち手やタイヤが壊れる事がございますが、当社では責任を負いかねますのでご了承下さい。</dd>
      </dl>
      <dl style={defList}>
        <dt style={defTitle}>盗難に関して</dt>
        <dd>お預りした車輌が盗難に合った場合，当社契約保険会社の定めによる範囲内とし，余剰の金額が発生した時は，お客様の負担とさせて頂きます。</dd>
      </dl>
      <dl style={defList}>
        <dt style={defTitle}>天災地変その他に関するもの</dt>
        <dd>お預りした車輌が天災地変，台風，地震，洪水，雪，雹，落雷，その他暴動，反乱等当社以外の責めによって生じた損害は全て免責とさせて頂きます。</dd>
      </dl>
      {/* <dl style={defList}>
        <dt style={defTitle}>航空機乗り遅れ等の旅程トラブルに関するもの</dt>
        <dd>予定のフライトに乗り遅れる等の旅程トラブルによる損害は一切を免責とさせて頂きます。 時間には余裕ももってご来場下さい。</dd>
      </dl> */}

      </div>
      {/* inner */}
    </div>
    {/* wrap */}

    
  </Layout>
)

export default MensekiPage