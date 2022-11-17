import * as React from "react"
import { Link } from "gatsby"

import "../styles/_menu.scss"
// smoothscroll
import scrollTo from 'gatsby-plugin-smoothscroll';

const MenuMoreInformation = () => (

  <div className="navigation__wrap">
    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/price">料金について</Link></li>
    </ul>

    <ul class="navigation__def">
      <li className=""><Link to="/option" className="navigation__dttl">オプション</Link></li>
      <li className="navigation__desc">
        <ul class="navigation__list option">
          <li class="navigation__item"><Link to="/option#delivery">空港お届けサービス</Link></li>
          <li class="navigation__item"><Link to="/option#maintenance">洗車・カーメンテナンス</Link></li>
          <li class="navigation__item"><Link to="/option#insurance">海外・国内旅行保険</Link></li>
          <li class="navigation__item"><Link to="/option#electrification">電気自動車充電サービス</Link></li>
          <li class="navigation__item"><Link to="/option#rental">レンタルモバイル</Link></li>
          <li class="navigation__item"><Link to="/option#takuhai">空港宅配サービス</Link></li>
          <li class="navigation__item"><Link to="/option#jaf">JAF</Link></li>
        </ul>
      </li>
    </ul>


    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/advantage">選ばれる理由</Link></li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><button onClick={() => scrollTo('#top')}>関連情報</button></li>
      <li className="navigation__desc">
        <ul className="navigation__list">
          <li><button onClick={() => scrollTo('#point')}>・マイル・ポイント</button></li>
          <li><button onClick={() => scrollTo('#members_card')}>・メンバーズカード</button></li>
          <li><button onClick={() => scrollTo('#voice')}>・お客さまの声</button></li>
          <li><button onClick={() => scrollTo('#travel')}>・旅のリンク集</button></li>
        </ul>
      </li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/guide">ご利用案内</Link></li>
      <li className="navigation__desc">
        <ul className="navigation__list">
          <li><Link to="/guide#access">・アクセスについて</Link></li>
          <li><Link to="/guide#flow">・ご利用の流れ</Link></li>
          <li><Link to="/guide#last">・お帰りになったら</Link></li>
        </ul>
      </li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/form">お問い合わせ</Link></li>
      <li className="navigation__desc none-footer">
        <ul className="navigation__list">
          <li><Link to="/faq">・よくあるお問い合わせ</Link></li>
        </ul>
      </li>
    </ul>

    <ul class="navigation__def none-drawer faq">
      <li className="navigation__dttl"><Link to="/faq">よくあるお問い合わせ</Link></li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/about">会社情報</Link></li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/information">新着情報</Link></li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/recruit">求人情報</Link></li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/policy"><span className="none">サイトポリシー・<br className="none-drawer"/>プライバシー</span>ポリシー</Link></li>
    </ul>
  </div>

)

export default MenuMoreInformation