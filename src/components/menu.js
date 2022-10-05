import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/_menu.scss"

const Menu = () => (
  <>
    <dl class="drawer__def">
      <dt className="drawer__dttl">料金について</dt>
    </dl>
    <dl class="drawer__def">
      <dt className="drawer__dttl">オプション</dt>
      <dd classNmae="drawer__desc">
        <ul className="drawer__list">
          <li className="drawer__item">空港お届けサービス</li>
          <li className="drawer__item">空港お届けサービス</li>
          <li className="drawer__item">空港お届けサービス</li>
        </ul>
      </dd>
    </dl>
    <dl class="drawer__def">
      <dt className="drawer__dttl">オプション</dt>
      <dd classNmae="drawer__desc">
        <ul className="drawer__list">
          <li className="drawer__item">空港お届けサービス</li>
          <li className="drawer__item">空港お届けサービス</li>
          <li className="drawer__item">空港お届けサービス</li>
        </ul>
      </dd>
    </dl>
    <dl class="drawer__def">
      <dt className="drawer__dttl"><Link to="form">お問い合わせ</Link></dt>
    </dl>
  </>

)

export default Menu