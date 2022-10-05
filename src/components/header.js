import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header class="header__wrap">
    <div className="header__left">
      <Link to="/" >
        <StaticImage
          src="../images/dummy.png"
          alt="成田空港駐車場サンパーキング | 安心・信頼の顧客満足No.1"
          width={190}
        />
      </Link>
      <div>
        <h1 className="header__headline">成田空港駐車場 サンパーキング成田店</h1>
        <p>成田空港駐車場 サンパーキング成田店</p>
      </div>
    </div>
    <ul className="header__right header__menu">
      <li><Link to="">アクセス</Link></li>
      <li><Link to="">Q&A</Link></li>
      <li><Link to="">お客様の声</Link></li>
      <li><Link to="">新着情報</Link></li>
      <li><Link to="">企業情報</Link></li>
    </ul>

    {/* ドロワーメニュー */}
    {/* ハンバーガーアイコン */}
    <div class="drawer__btn">
      <span></span>
      <span></span>
      <span></span>
    </div>
    {/* オーバーレイ背景 */}
    <div class="drawer__bg"></div>

    {/* ドロワーメニュー */}
    <div class="drawer__menu">
      <div className="drawer__inner">
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
      </div>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
