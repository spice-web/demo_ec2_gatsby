import * as React from "react"
import { Link } from "gatsby"

import "../styles/_menu.scss"

const Menu = () => (

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
      <li className="navigation__dttl"><Link to="/more-information">関連情報</Link></li>
      <li className="navigation__desc">
        <ul className="navigation__list">
          <li><Link to="/more-information#point">・マイル・ポイント</Link></li>
          <li><Link to="/more-information#members_card">・メンバーズカード</Link></li>
          <li><Link to="/more-information#voice">・お客さまの声</Link></li>
          <li><Link to="/more-information#travel">・旅のリンク集</Link></li>
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

export default Menu