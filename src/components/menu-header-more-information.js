import * as React from "react"
import { Link } from "gatsby"
import { useState, useContext } from 'react'
import {slide as Menu} from 'react-burger-menu'
import { StaticImage } from "gatsby-plugin-image"
import "../styles/_menu.scss"

// smoothscroll
import scrollTo from 'gatsby-plugin-smoothscroll';

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
    <button onClick={ctx.toggleMenu} className="drawer__btn">
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
      onStateChange={(state) => ctx.stateChangeHandler(state)}>
    
    <div class="drawer__menu">
          <div className="drawer__inner">
    <StaticImage src="../images/logo_w.svg"
      alt="サンパーキング"
      width={188}
      className="drawer__logo" />
  <div className="navigation__wrap">
    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/price">料金について</Link></li>
    </ul>

    <ul class="navigation__def">
      <li className=""><Link to="/option" className="navigation__dttl" onClick={ctx.toggleMenu}>オプション</Link></li>
      <li className="navigation__desc">
        <ul class="navigation__list option">
          <li class="navigation__item"><Link to="/option#delivery" onClick={ctx.toggleMenu}>空港お届けサービス</Link></li>
          <li class="navigation__item"><Link to="/option#maintenance" onClick={ctx.toggleMenu}>洗車・カーメンテナンス</Link></li>
          <li class="navigation__item"><Link to="/option#insurance" onClick={ctx.toggleMenu}>海外・国内旅行保険</Link></li>
          <li class="navigation__item"><Link to="/option#electrification" onClick={ctx.toggleMenu}>電気自動車充電サービス</Link></li>
          <li class="navigation__item"><Link to="/option#rental" onClick={ctx.toggleMenu}>レンタルモバイル</Link></li>
          <li class="navigation__item"><Link to="/option#takuhai" onClick={ctx.toggleMenu}>空港宅配サービス</Link></li>
          <li class="navigation__item"><Link to="/option#jaf" onClick={ctx.toggleMenu}>JAF</Link></li>
        </ul>
      </li>
    </ul>


    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/advantage">選ばれる理由</Link></li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl" onClick={() => scrollTo('#top')}><button onClick={ctx.toggleMenu }>関連情報</button></li>
      <li className="navigation__desc">
        <ul className="navigation__list">
          <li onClick={() => scrollTo('#point')}><button onClick={ctx.toggleMenu } >・マイル・ポイント</button></li>
          <li onClick={() => scrollTo('#members_card')}><button onClick={ctx.toggleMenu } >・メンバーズカード</button></li>
          <li onClick={() => scrollTo('#voice')}><button onClick={ctx.toggleMenu } >・お客さまの声</button></li>
          <li onClick={() => scrollTo('#travel')}><button onClick={ctx.toggleMenu } >・旅のリンク集</button></li>
        </ul>
      </li>
    </ul>

    <ul class="navigation__def">
      <li className="navigation__dttl"><Link to="/guide">ご利用案内</Link></li>
      <li className="navigation__desc">
        <ul className="navigation__list">
          <li><Link to="/guide#access" onClick={ctx.toggleMenu}>・アクセスについて</Link></li>
          <li><Link to="/guide#flow" onClick={ctx.toggleMenu}>・ご利用の流れ</Link></li>
          <li><Link to="/guide#last" onClick={ctx.toggleMenu}>・お帰りになったら</Link></li>
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
      <li className="navigation__dttl">
        <Link to="/policy"><span className="none">サイトポリシー・<br className="none-drawer"/>プライバシー</span>ポリシー</Link>
      </li>
    </ul>
  </div>
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