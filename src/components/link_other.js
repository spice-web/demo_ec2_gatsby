import * as React from "react"
import * as styles from "../styles/_faq.module.scss";

const TitleStyles = {
  padding: "10px 30px 10px 20px",
  borderRadius: "3px",
}

const LinkPage = () => {

  return (
    <div className={styles.linkOther}>
      <dl class="faq">
        <dt style={TitleStyles} className="headline--greenLabel faq__title">
          空　港<button class="question-button"><span></span><span></span></button>
        </dt>
        <dd class="text-sm faq__answer">
          <div><a href="http://www.narita-airport.jp/jp/index.html" target="_blank" rel="noreferrer noopener">成田国際空港</a></div>
          <div><a href="http://www.tokyo-airport-bldg.co.jp/" target="_blank" rel="noreferrer noopener">羽田空港</a></div>
        </dd>
      </dl>
     {/* 開閉パーツ */}



      <h3>航空会社（成田空港乗入）</h3>
    {/* 開閉パーツ */}
    <dl class="faq">
      <dt style={TitleStyles} className="headline--greenLabel faq__title">
        日本の航空会社<button class="question-button"><span></span><span></span></button>
      </dt>
      <dd class="text-sm faq__answer">
        <div><a href="http://www.ibexair.co.jp/" target="_blank" rel="noreferrer noopener">IBEXエアラインズ</a></div>
        <div><a href="http://www.air-japan.co.jp/" target="_blank" rel="noreferrer noopener">エアージャパン</a></div>        
        <div><a href="https://www.jetstar.com/" target="_blank" rel="noreferrer noopener">ジェットスター・ジャパン</a></div>
        <div><a href="https://www.skymark.co.jp/" target="_blank" rel="noreferrer noopener">スカイマーク</a></div>
        <div><a href="https://jp.ch.com/" target="_blank" rel="noreferrer noopener">SPRING JAPAN</a></div>
        <div><a href="https://ana.co.jp/" target="_blank" rel="noreferrer noopener">全日本空輸</a></div>
        <div><a href="http://www.jal.co.jp/" target="_blank" rel="noreferrer noopener">日本航空</a></div>
        <div><a href="http://www.flypeach.com/" target="_blank" rel="noreferrer noopener">Peach</a></div>
      </dd>
    </dl>

    <dl class="faq">
      <dt style={TitleStyles} className="headline--greenLabel faq__title">
        第1ターミナル(国際線/南)<button class="question-button"><span></span><span></span></button>
      </dt>
      <dd class="text-sm faq__answer">
        <div><a href="http://jp.flyasiana.com/Global/JP/ja/main" target="_blank" rel="noreferrer noopener">アシアナ航空</a></div>
        <div><a href="https://www.uzairways.com/" target="_blank" rel="noreferrer noopener">ウズベキスタン航空</a></div>
        <div><a href="http://www.aircanada.com/jp/" target="_blank" rel="noreferrer noopener">エア・カナダ</a></div>
        <div><a href="https://flyairseoul.com/CW/ja/main.do" target="_blank" rel="noreferrer noopener">エアソウル</a></div>
        <div><a href="https://airbusan.com/" target="_blank" rel="noreferrer noopener">エアプサン</a></div>
        <div><a href="https://egyptair.com/" target="_blank" rel="noreferrer noopener">エジプト航空（英語）</a></div>
        <div><a href="https://www.ethiopianairlines.com/" target="_blank" rel="noreferrer noopener">エチオピア航空</a></div>
        <div><a href="https://www.evaair.com/" target="_blank" rel="noreferrer noopener">エバー航空</a></div>
        <div><a href="https://www.austrian.com/" target="_blank" rel="noreferrer noopener">オーストリア航空</a></div>
        <div><a href="http://www.sda.cn/" target="_blank" rel="noreferrer noopener">山東航空</a></div>
        <div><a href="https://www.singaporeair.com/" target="_blank" rel="noreferrer noopener">シンガポール航空</a></div>
        <div><a href="http://www.shenzhenair.com/" target="_blank" rel="noreferrer noopener">深圳航空</a></div>
        <div><a href="https://www.swiss.com/" target="_blank" rel="noreferrer noopener">スイス インターナショナル エアラインズ</a></div>
        <div><a href="http://www.flysas.co.jp/" target="_blank" rel="noreferrer noopener">スカンジナビア航空</a></div>
        <div><a href="https://www.flyscoot.com/" target="_blank" rel="noreferrer noopener">スクート</a></div>
        <div><a href="https://www.thaiairways.com/" target="_blank" rel="noreferrer noopener">タイ国際航空</a></div>
        <div><a href="http://www.airchina.jp/" target="_blank" rel="noreferrer noopener">中国国際航空</a></div>
        <div><a href="http://www.airnewzealand.jp/" target="_blank" rel="noreferrer noopener">ニュージーランド航空</a></div>
        <div><a href="https://www.united.com/" target="_blank" rel="noreferrer noopener">ユナイテッド航空</a></div>
        <div><a href="https://www.lufthansa.com/" target="_blank" rel="noreferrer noopener">ルフトハンザドイツ航空</a></div>
        <div><a href="https://www.lot.com/jp/ja/" target="_blank" rel="noreferrer noopener">LOTポーランド航空</a></div>
      </dd>
    </dl>

    <dl class="faq">
      <dt style={TitleStyles} className="headline--greenLabel faq__title">
        第1ターミナル(国際線/北)<button class="question-button"><span></span><span></span></button>
      </dt>
      <dd class="text-sm faq__answer">
      <div><a href="https://aeroflot.ru/" target="_blank" rel="noreferrer noopener">アエロフロート・ロシア航空</a></div>
        <div><a href="https://aeromexico.jp/" target="_blank" rel="noreferrer noopener">アエロメヒコ航空</a></div>
        <div><a href="http://www.xiamenair.com.cn/" target="_blank" rel="noreferrer noopener">厦門航空（本国）</a></div>
        <div><a href="http://www.aircalin.jp/" target="_blank" rel="noreferrer noopener">エア・カラン</a></div>
        <div><a href="http://www.airfrance.co.jp/" target="_blank" rel="noreferrer noopener">エールフランス航空</a></div>
        <div><a href="https://www.etihad.com/" target="_blank" rel="noreferrer noopener">エティハド航空</a></div>
        <div><a href="https://uts-air.com/aurora/" target="_blank" rel="noreferrer noopener">オーロラ航空</a></div>
        <div><a href="https://www.garuda-indonesia.com/" target="_blank" rel="noreferrer noopener">ガルーダ・インドネシア</a></div>
        <div><a href="http://flights.sichuanair.com/" target="_blank" rel="noreferrer noopener">四川航空</a></div>
        <div><a href="https://www.jinair.com/" target="_blank" rel="noreferrer noopener">ジンエアー</a></div>
        <div><a href="https://www.koreanair.com/" target="_blank" rel="noreferrer noopener">大韓航空</a></div>
        <div><a href="https://global.csair.com/" target="_blank" rel="noreferrer noopener">中国南方航空</a></div>
        <div><a href="https://delta.com/" target="_blank" rel="noreferrer noopener">デルタ航空（本国）</a></div>
        <div><a href="http://www.vietnamairlines.com/wps/portal/vn/welcome/" target="_blank" rel="noreferrer noopener">ベトナム航空</a></div>
        <div><a href="https://www.hongkongairlines.com/ja_JP/homepage" target="_blank" rel="noreferrer noopener">香港航空</a></div>
        <div><a href="https://www.flyroyalbrunei.com/japan/ja/" target="_blank" rel="noreferrer noopener">ロイヤルブルネイ航空</a></div>
      </dd>
    </dl>

    <dl class="faq">
      <dt style={TitleStyles} className="headline--greenLabel faq__title">
        第2ターミナル(国際線)<button class="question-button"><span></span><span></span></button>
      </dt>
      <dd class="text-sm faq__answer">
        <div><a href="http://www.americanairlines.jp/" target="_blank" rel="noreferrer noopener">アメリカン航空</a></div>
        <div><a href="https://www.eastarjet.com/" target="_blank" rel="noreferrer noopener">イースター航空</a></div>
        <div><a href="http://www.iberia.com/" target="_blank" rel="noreferrer noopener">イベリア・スペイン航空（本国）</a></div>
        <div><a href="https://www.airasia.com/" target="_blank" rel="noreferrer noopener">エアアジアX</a></div>
        <div><a href="http://airindia.in/" target="_blank" rel="noreferrer noopener">エア・インディア</a></div>
        <div><a href="http://www.airtahitinui.co.jp/" target="_blank" rel="noreferrer noopener">エア タヒチ ヌイ</a></div>
        <div><a href="https://www.s7.ru/" target="_blank" rel="noreferrer noopener">S7航空</a></div>
        <div><a href="https://www.emirates.com/" target="_blank" rel="noreferrer noopener">エミレーツ航空</a></div>
        <div><a href="https://www.hainanairlines.com/" target="_blank" rel="noreferrer noopener">海南航空</a></div>
        <div><a href="https://www.qatarairways.com/" target="_blank" rel="noreferrer noopener">カタール航空</a></div>
        <div><a href="https://www.qantas.com/" target="_blank" rel="noreferrer noopener">カンタス航空</a></div>
        <div><a href="https://global.juneyaoair.com/" target="_blank" rel="noreferrer noopener">吉祥航空</a></div>
        <div><a href="https://www.cathaypacific.com/" target="_blank" rel="noreferrer noopener">キャセイパシフィック航空</a></div>
        <div><a href="http://www.scat.kz/" target="_blank" rel="noreferrer noopener">SCAT航空</a></div>
        <div><a href="https://www.srilankan.com/" target="_blank" rel="noreferrer noopener">スリランカ航空</a></div>
        <div><a href="https://www.cebupacificair.com/" target="_blank" rel="noreferrer noopener">セブパシフィック航空</a></div>
        <div><a href="https://www.turkishairlines.com/" target="_blank" rel="noreferrer noopener">ターキッシュ エアラインズ</a></div>
        <div><a href="https://www.tigerairtw.com/" target="_blank" rel="noreferrer noopener">タイガーエア台湾</a></div>
        <div><a href="https://www.china-airlines.com/" target="_blank" rel="noreferrer noopener">チャイナエアライン</a></div>
        <div><a href="http://www.chinaeastern-air.co.jp/" target="_blank" rel="noreferrer noopener">中国東方航空</a></div>
        <div><a href="https://www.twayair.com/" target="_blank" rel="noreferrer noopener">ティーウェイ航空</a></div>
        <div><a href="https://www.hawaiianairlines.co.jp/" target="_blank" rel="noreferrer noopener">ハワイアン航空</a></div>
        <div><a href="https://www.bangkokair.com/" target="_blank" rel="noreferrer noopener">バンコクエアウェイズ</a></div>
        <div><a href="https://www.fireflyz.com.my/" target="_blank" rel="noreferrer noopener">ファイアーフライ</a></div>
        <div><a href="https://www.fijiairways.com/ja-jp/" target="_blank" rel="noreferrer noopener">フィジーエアウェイズ</a></div>
        <div><a href="https://www.philippineairlines.com/" target="_blank" rel="noreferrer noopener">フィリピン航空</a></div>
        <div><a href="https://www.finnair.com/" target="_blank" rel="noreferrer noopener">フィンランド航空</a></div>
        <div><a href="https://www.vietjetair.com/" target="_blank" rel="noreferrer noopener">ベトジェットエア</a></div>
        <div><a href="https://www.hkexpress.com/" target="_blank" rel="noreferrer noopener">香港エクスプレス</a></div>
        <div><a href="https://www.airmacau.jp/" target="_blank" rel="noreferrer noopener">マカオ航空</a></div>
        <div><a href="https://www.malaysiaairlines.com/" target="_blank" rel="noreferrer noopener">マレーシア航空</a></div>
        <div><a href="http://www.miat.com/" target="_blank" rel="noreferrer noopener">ミアットモンゴル航空（英語）</a></div>
        <div><a href="https://www.latam.com/" target="_blank" rel="noreferrer noopener">ラタム航空</a></div>
      </dd>
    </dl>

    <dl class="faq">
      <dt style={TitleStyles} className="headline--greenLabel faq__title">
        第3ターミナル(国際線)<button class="question-button"><span></span><span></span></button>
      </dt>
      <dd class="text-sm faq__answer">
        <div><a href="https://www.jetstar.com/" target="_blank" rel="noreferrer noopener">ジェットスター航空</a></div>
        <div><a href="https://jp.ch.com/" target="_blank" rel="noreferrer noopener">春秋航空</a></div>
        <div><a href="https://www.jejuair.net//" target="_blank" rel="noreferrer noopener">チェジュ航空</a></div>
      </dd>
    </dl>

    {/* 開閉パーツ */}
    <dl class="faq">
      <dt style={TitleStyles} className="headline--greenLabel faq__title">
        その他航空会社<button class="question-button"><span></span><span></span></button>
      </dt>
      <dd class="text-sm faq__answer">        
        <div><a href="https://www.klm.com/" target="_blank" rel="noreferrer noopener">KLMオランダ航空</a></div>
        <div><a href="https://www.saudia.com/" target="_blank" rel="noreferrer noopener">サウディア</a></div>
        <div><a href="https://www.piac.com.pk/" target="_blank" rel="noreferrer noopener">パキスタン国際航空（英語）</a></div>        
      </dd>
    </dl>



     {/* 開閉パーツ */}
     <dl class="faq">
       <dt style={TitleStyles} className="headline--greenLabel faq__title">
          交通情報<button class="question-button"><span></span><span></span></button>
       </dt>
       <dd class="text-sm faq__answer">
        <div><a href="http://www.jartic.or.jp/" target="_blank" rel="noreferrer noopener">日本道路交通情報センター</a></div>
        <div><a href="http://www.driveplaza.com/" target="_blank" rel="noreferrer noopener">ドラぷら</a></div>
       </dd>
     </dl>






     {/* 開閉パーツ */}
     <dl class="faq">
       <dt style={TitleStyles} className="headline--greenLabel faq__title">
          旅行代理店<button class="question-button"><span></span><span></span></button>
       </dt>
       <dd class="text-sm faq__answer">
        <div><a href="http://www.jtb.co.jp/" target="_blank" rel="noreferrer noopener">JTB</a></div>
        <div><a href="http://www.his-j.com/" target="_blank" rel="noreferrer noopener">HIS</a></div>
        <div><a href="http://www.jal.co.jp/intltour/" target="_blank" rel="noreferrer noopener">JALPAK(海外)</a></div>
        <div><a href="http://www.jal.co.jp/domtour/" target="_blank" rel="noreferrer noopener">JALPAK(国内)</a></div>
        <div><a href="http://www.knt.co.jp/" target="_blank" rel="noreferrer noopener">近畿日本ツーリスト</a></div>
        <div><a href="http://www.nta.co.jp/" target="_blank" rel="noreferrer noopener">日本旅行</a></div>
        <div><a href="https://www.hankyu-travel.com/" target="_blank" rel="noreferrer noopener">阪急交通社</a></div>
       </dd>
     </dl>




     {/* 開閉パーツ */}
     <dl class="faq">
       <dt style={TitleStyles} className="headline--greenLabel faq__title">
          輸入・輸出・規制品情報<button class="question-button"><span></span><span></span></button>
       </dt>
       <dd class="text-sm faq__answer">
        <div><a href="http://www.customs.go.jp/" target="_blank" rel="noreferrer noopener">税関</a></div>
        <div><a href="http://www.maff.go.jp/aqs/" target="_blank" rel="noreferrer noopener">動物検閲所</a></div>
        <div><a href="http://www.maff.go.jp/pps/" target="_blank" rel="noreferrer noopener">植物防疫所</a></div>
        <div><a href="http://www.env.go.jp/nature/intro/" target="_blank" rel="noreferrer noopener">環境省　外来生物法ホームページ</a></div>
       </dd>
     </dl>





     {/* 開閉パーツ */}
     <dl class="faq">
       <dt style={TitleStyles} className="headline--greenLabel faq__title">外務省海外安全ＨＰ・海外旅行に関する情報<button class="question-button"><span></span><span></span></button>
       </dt>
       <dd class="text-sm faq__answer">
        <div><a href="http://www.anzen.mofa.go.jp/" target="_blank" rel="noreferrer noopener">外務省　海外安全ホームページ</a></div>
        <div><a href="http://www.forth.go.jp/" target="_blank" rel="noreferrer noopener">FORTH | 厚生労働省検疫所</a></div>
       </dd>
     </dl>








     {/* 開閉パーツ */}
    <dl class="faq">
      <dt style={TitleStyles} className="headline--greenLabel faq__title">
        国内・世界の天気<button class="question-button"><span></span><span></span></button>
      </dt>
      <dd class="text-sm faq__answer">
        <div><a href="http://www.jma.go.jp/jp/yoho/" target="_blank" rel="noreferrer noopener">気象庁</a></div>
        <div><a href="http://www.tenki.jp/index.html" target="_blank" rel="noreferrer noopener">【tenki.jp】日本最大級の天気・気象情報サイト</a></div>
        <div><a href="http://weathernews.jp/" target="_blank" rel="noreferrer noopener">ウェザーニュース（世界の天気）</a></div>
      </dd>
    </dl>





     {/* 開閉パーツ */}
    <dl class="faq">
      <dt style={TitleStyles} className="headline--greenLabel faq__title">
        外貨・為替情報<button class="question-button"><span></span><span></span></button>
      </dt>
      <dd class="text-sm faq__answer">
        <div><a href="http://www.chibabank.co.jp/cgi-bin/rate-update/de.cgi/rate_r.html" target="_blank" rel="noreferrer noopener">ちばぎん為替レート</a></div>
      </dd>
    </dl>









     {/* 開閉パーツ */}
    <dl class="faq">
      <dt style={TitleStyles} className="headline--greenLabel faq__title">
        観光情報<button class="question-button"><span></span><span></span></button>
      </dt>
      <dd class="text-sm faq__answer">
        <div><a href="http://www.nrtk.jp/" target="_blank" rel="noreferrer noopener">成田市観光協会</a></div>
      </dd>
    </dl>




     {/* 開閉パーツ */}
    <dl class="faq">
      <dt style={TitleStyles} className="headline--greenLabel faq__title">
        サンパーキング関連ページ<button class="question-button"><span></span><span></span></button>
      </dt>
      <dd class="text-sm faq__answer">
        <div><a href="http://www.sunnarita.com/" target="_blank" rel="noreferrer noopener">サンパーキング成田店公式特設ページ</a></div>
      </dd>
    </dl>

    </div>
  )
}

export default LinkPage