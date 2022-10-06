import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/_menu.scss"

const Menu = () => (
  <div className="navigation__wrap">
    <dl class="navigation__def">
      <dt className="navigation__dttl">料金について</dt>
    </dl>
    <dl class="navigation__def">
      <dt className="navigation__dttl">オプション</dt>
      <dd classNmae="navigation__desc">
        <ul className="navigation__list">
          <li className="navigation__item">空港お届けサービス</li>
          <li className="navigation__item">空港お届けサービス</li>
          <li className="navigation__item">空港お届けサービス</li>
        </ul>
      </dd>
    </dl>
    <dl class="navigation__def">
      <dt className="navigation__dttl">オプション</dt>
      <dd classNmae="navigation__desc">
        <ul className="navigation__list">
          <li className="navigation__item">空港お届けサービス</li>
          <li className="navigation__item">空港お届けサービス</li>
          <li className="navigation__item">空港お届けサービス</li>
        </ul>
      </dd>
    </dl>
    <dl class="navigation__def">
      <dt className="navigation__dttl"><Link to="form">お問い合わせ</Link></dt>
    </dl>
  </div>

)

export default Menu