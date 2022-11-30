import * as React from "react"
import { Link } from "gatsby"
import { useState, useContext } from 'react'
import {slide as Menu} from 'react-burger-menu'
import { StaticImage } from "gatsby-plugin-image"
import "../styles/_menu.scss"


// make a new context
const MyContext = React.createContext();

// create the provider
const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)
  
  return (
    <MyContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

// create a button that calls a context function to set a new open state when clicked
const Button = () => {
  const ctx = useContext(MyContext)
  return (
    <button onClick={ctx.toggleMenu} className="drawer__btn" aria-label="ナビゲーションの切替">
      <span></span><span></span><span></span>
    </button>
  )
}

// create a navigation component that wraps the burger menu
const Navigation = () => {
  const ctx = useContext(MyContext)

  return (
    <Menu
      right
      pageWrapId={ "page-wrap" }
      outerContainerId={ "outer-container" }
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
    >
    
    <div class="bm-item">
      <div className="drawer__inner">
        <Link to="/">
          <StaticImage src="../images/logo_w.svg"
            alt="サンパーキング"
            width={188}
            className="drawer__logo" />
        </Link>
        <div className="navigation__wrap">
          <ul class="navigation__def">
            <li className="navigation__dttl"><button onClick={ctx.toggleMenu}><Link to="/price">料金について</Link></button></li>
          </ul>

          <ul class="navigation__def">
            <li className=""><Link to="/option" className="navigation__dttl" onClick={ctx.toggleMenu}>オプション</Link></li>
            <li className="navigation__desc">
              <ul class="navigation__list option">
                <li class="navigation__item"><Link to="/option" onClick={ctx.toggleMenu}>洗車・カーメンテナンス</Link></li>
                <li class="navigation__item"><Link to="/option#insurance" onClick={ctx.toggleMenu}>海外・国内旅行保険</Link></li>
                <li class="navigation__item"><Link to="/option#electrification" onClick={ctx.toggleMenu}>電気自動車充電サービス</Link></li>
                <li class="navigation__item"><Link to="/option#delivery" onClick={ctx.toggleMenu}>空港お届けサービス</Link></li>
                <li class="navigation__item"><Link to="/option#rental" onClick={ctx.toggleMenu}>レンタルモバイル</Link></li>
                <li class="navigation__item"><Link to="/option#takuhai" onClick={ctx.toggleMenu}>空港宅配サービス</Link></li>
                <li class="navigation__item"><Link to="/option#jaf" onClick={ctx.toggleMenu}>JAF</Link></li>
              </ul>
            </li>
          </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/advantage" onClick={ctx.toggleMenu}>選ばれる理由</Link></li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/more-information" onClick={ctx.toggleMenu}>関連情報</Link></li>
      <li className="navigation__desc">
        <ul className="navigation__list">
          <li><Link to="/more-information#point" onClick={ctx.toggleMenu}>・マイル・ポイント</Link></li>
          <li><Link to="/more-information#members_card" onClick={ctx.toggleMenu}>・メンバーズカード</Link></li>
          <li><Link to="/more-information#voice" onClick={ctx.toggleMenu}>・お客さまの声</Link></li>
          <li><Link to="/more-information#travel" onClick={ctx.toggleMenu}>・旅のリンク集</Link></li>
        </ul>
      </li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/guide" onClick={ctx.toggleMenu}>ご利用案内</Link></li>
      <li className="navigation__desc">
        <ul className="navigation__list">
          <li><Link to="/guide#access" onClick={ctx.toggleMenu}>・アクセスについて</Link></li>
          <li><Link to="/guide#flow" onClick={ctx.toggleMenu}>・ご利用の流れ</Link></li>
          <li><Link to="/guide#last" onClick={ctx.toggleMenu}>・お帰りになったら</Link></li>
        </ul>
      </li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/form" onClick={ctx.toggleMenu}>お問い合わせ</Link></li>
      <li className="navigation__desc none-footer">
        <ul className="navigation__list">
          <li><Link to="/faq" onClick={ctx.toggleMenu}>・よくあるお問い合わせ</Link></li>
        </ul>
      </li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/about" onClick={ctx.toggleMenu}>会社情報</Link></li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/information" onClick={ctx.toggleMenu}>新着情報</Link></li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/recruit" onClick={ctx.toggleMenu}>求人情報</Link></li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl">
        <button onClick={ctx.toggleMenu}><Link to="/policy"><span className="none">サイトポリシー・<br className="none-drawer"/>プライバシー</span>ポリシー</Link></button>
      </li>
    </ul>
  </div>
  <ul className="flex__wrap navigation__sns">
    <li><a href="https://page.line.me/165idnoa?openQrModal=true" rel="noreferrer noopener" target="_blank"><StaticImage src="../images/icon/line_w.svg" alt="サンパーキング公式LINE" width={24.29} /></a></li>
    <li><a href="https://twitter.com/sunparking" rel="noreferrer noopener" target="_blank"><StaticImage src="../images/icon/tw_w.svg" alt="サンパーキング公式twitter" width={25.37} /></a></li>
    <li><a href="https://www.facebook.com/Sunport389" rel="noreferrer noopener" target="_blank"><StaticImage src="../images/icon/fb_w.svg" alt="サンパーキング公式facebook" width={14.16} /></a></li>
    <li><Link to="/form" onClick={ctx.toggleMenu}>
      <StaticImage src="../images/icon/mail_w.svg"
      alt="お問い合わせ"
      width={24.02}
      style={{verticalAlign:'middle'}}
      /></Link></li>
  </ul>

  </div>


  </div>
    </Menu>
  )
}

// default export here
const App = () => {
  return (
    <MyProvider>
      <div className="drawer__wrap">
        <Button />
        <Navigation />
      </div>
    </MyProvider>
  )
}

export default App;