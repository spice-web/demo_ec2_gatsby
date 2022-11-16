import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import Menu from "./menu"

import { Helmet } from "react-helmet"
import MenuHeaderMoreInformation   from "./menu-header-more-information"
const Header = () => (
  <>
  {/* サイト全体を noindex */}
    <Helmet>
      <meta name="robots" content="noindex, follow" />
      <meta name="googlebot" content="noindex, follow" />
    </Helmet>
    <header class="header" id="header">
      <div className="header__wrap">
        <div className="header__left">
          <div className="header__logo">
            <Link to="/" >
              <StaticImage
                src="../images/logo.png"
                alt="成田空港駐車場サンパーキング | 安心・信頼の顧客満足No.1"
                className="logoImg"
                loading='eager'
              />
            </Link>
          </div>
          <div className="header__left--text">
            <p className="header__copy">成田空港に近くて安くて便利な駐車場</p>
            <h1>成田空港駐車場 サンパーキング成田店</h1>
          </div>
        </div>
        <div className="header__right">
          <p className="header__right--time">［営業時間］5:00～22:30 成田空港最終便到着まで営業</p>
          <ul className="header-menu__wrap">
            <li className="header-menu__item access"><Link to="/guide">アクセス</Link></li>
            <li className="header-menu__item faq"><Link to="/form#faq">Q&A</Link></li>
            <li className="header-menu__item voice"><Link to="/voice">お客様の声</Link></li>
            <li className="header-menu__item info"><Link to="/information">新着情報</Link></li>
            <li className="header-menu__item about"><Link to="/about">企業情報</Link></li>
          </ul>
        </div>

        {/* ドロワーメニュー */}
        {/* ハンバーガーアイコン */}
        {/* <div class="drawer__btn" id="drawerBtn">
          <span></span>
          <span></span>
          <span></span>
          <div className="cover" id="coverOption"></div>
        </div> */}
        {/* オーバーレイ背景 */}
        {/* <div class="drawer__bg"></div> */}

        {/* ドロワーメニュー */}
        {/* <div class="drawer__menu">
          <div className="drawer__inner">
            <StaticImage src="../images/logo_w.svg"
            alt="サンパーキング"
            width={188}
            className="drawer__logo" />
            <Menu />
          </div>
        </div> */}
        <MenuHeaderMoreInformation />
      </div>


    </header>
  
    <div className="header-nav__wrap">
      <ul className="header-nav__list">
        <li className="header-nav__item">
          <Link to="/price" className="price">料金について</Link>
        </li>
        <li className="header-nav__item">
          <Link to="/option" className="option">オプション</Link>
        </li>
        <li className="header-nav__item">
          <Link to="/advantage" className="advantage">選ばれる理由</Link>
        </li>
        <li className="header-nav__item">
          <Link to="/more-information" className="more-information">関連情報</Link>
        </li>
        <li className="header-nav__item">
          <Link to="/guide" className="guide">ご利用案内</Link>
        </li>
      </ul>
    </div>
  </>
)

export default Header

