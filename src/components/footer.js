import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Menu from "./menu"

const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer__inner">
        {/* メニュー */}
        <Menu />

        <ul className="footer__sns">
          <li><a href="" rel="noreferrer noopener" target="_blank"><img src="" alt="サンパーキング公式twitter" /></a></li>
          <li><a href="" rel="noreferrer noopener" target="_blank"><img src="" alt="サンパーキング公式インスタグラム" /></a></li>
          <li><a href="" rel="noreferrer noopener" target="_blank"><img src="" alt="サンパーキング公式LINE" /></a></li>
          <li><a href="" rel="noreferrer noopener" target="_blank"><img src="" alt="サンパーキング公式Facebook" /></a></li>
        </ul>

        <p className="copyright text-center">© 2007 © Sunport Co., Ltd.</p>
      </div>


    </footer>
    {/* フッター固定ボタン */}
    <ul className="footer-fixed-btn__wrap">
      <li className="footer-fixed-btn__item"><Link to="" className="is-block is-center">料金確認</Link></li>
      <li className="footer-fixed-btn__item"><Link to="" className="is-block is-center">WEB予約</Link></li>
      <li className="footer-fixed-btn__item"><Link to="" className="is-block is-center">アクセス</Link></li>
    </ul>
  </>

)

export default Footer
