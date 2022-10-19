import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/_menu.scss"

const Menu = () => (
  <div className="navigation__wrap">
    <dl class="navigation__def">
      <dt className="navigation__dttl"><Link to="/">料金について</Link></dt>
    </dl>

    <dl class="navigation__def">
      <dt className="navigation__dttl"><Link to="/">オプション</Link></dt>
      <dd className="navigation__desc">
        <ul className="navigation__list option">
          <li><Link to="/">・空港お届けサービス</Link></li>
          <li><Link to="/">・洗車・カーメンテナンス</Link></li>
          <li><Link to="/">・海外・国内旅行保険</Link></li>
          <li><Link to="/">・電気自動車充電サービス</Link></li>
          <li><Link to="/">・レンタルモバイル</Link></li>
          <li><Link to="/">・空港宅配サービス</Link></li>
          <li><Link to="/">・JAF</Link></li>
        </ul>
      </dd>
    </dl>


    <dl class="navigation__def">
      <dt className="navigation__dttl"><Link to="/">選ばれる理由</Link></dt>
    </dl>

    <dl class="navigation__def">
      <dt className="navigation__dttl"><Link to="/">関連情報</Link></dt>
      <dd className="navigation__desc">
        <ul className="navigation__list">
          <li><Link to="/">・マイル・ポイント</Link></li>
          <li><Link to="/">・メンバーズカード</Link></li>
          <li><Link to="/">・お客さまの声</Link></li>
          <li><Link to="/">・旅のリンク集</Link></li>
        </ul>
      </dd>
    </dl>

    <dl class="navigation__def">
      <dt className="navigation__dttl"><Link to="/">ご利用案内</Link></dt>
      <dd className="navigation__desc">
        <ul className="navigation__list">
          <li><Link to="/">・アクセスについて</Link></li>
          <li><Link to="/">・ご利用の流れ</Link></li>
          <li><Link to="/">・お帰りになったら</Link></li>
        </ul>
      </dd>
    </dl>



    <dl class="navigation__def">
      <dt className="navigation__dttl"><Link to="/">お問い合わせ</Link></dt>
      <dd className="navigation__desc none-footer">
        <ul className="navigation__list">
          <li><Link to="/">・よくあるお問い合わせ</Link></li>
        </ul>
      </dd>
    </dl>

    <dl class="navigation__def none-drawer faq">
      <dt className="navigation__dttl"><Link to="/">よくあるお問い合わせ</Link></dt>
    </dl>

    <dl class="navigation__def">
      <dt className="navigation__dttl"><Link to="/about">会社情報</Link></dt>
    </dl>

    <dl class="navigation__def">
      <dt className="navigation__dttl"><Link to="/">新着情報</Link></dt>
    </dl>

    <dl class="navigation__def">
      <dt className="navigation__dttl"><Link to="/recruit">求人情報</Link></dt>
    </dl>

    <dl class="navigation__def">
      <dt className="navigation__dttl"><Link to="/policy"><span className="none">サイトポリシー・<br className="none-drawer"/>プライバシー</span>ポリシー</Link></dt>
    </dl>
  </div>

)

export default Menu