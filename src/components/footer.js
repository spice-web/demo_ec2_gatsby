import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import ButtonReserve from "./button-reserve"
import ButtonFoot from "./button-footer"

// フッターナビ
import Menu from "./menu"
// スクロール
import Scroll from './scroll'

const Footer = () => (
  <>
  <div className="content__wrap bg--gray footer-gray">
      <div className="text-white footer-gray__inner">
        <div className="mb--md">
          <p className="text-center text-lg text-bold mb--md">ご利用前日23:00までは<span className="nowrap"><span className="text-y">おトクなWEB予約</span>が可能！</span></p>

          {/* 予約ボタン */}
            <ButtonReserve bg="white" />
          {/* 予約ボタン */}
        </div>

        <p className="text-center">当日はお電話でお問い合せください</p>
        <div className="flex__wrap--md text-center mb--sm">
          <p className="text-center">サン予約センター</p>
          <h3 className="text-lg">TEL.0476-33-1123</h3>
          <p className="text-center">［受付時間］9:00〜18:00</p>
        </div>

        {/* 予約ボタン */}
          <ButtonFoot />
        {/* 予約ボタン */}

    </div>
  </div>
  {/* background gray */}


    <footer className="footer">
      <Scroll showBelow={250} />
      <div className="footer__inner">
        <div className="footer__head">
          <h2 className="footer__logo"><StaticImage src="../images/logo.svg" /></h2>
          <h3>株式会社サン・ポート&nbsp;&nbsp;<br className="br_maxmd" />〒286-0121 千葉県成田市駒井野 134</h3>
          <p>［営業時間］5:00～22:30&nbsp;&nbsp;<br className="br_maxmd" />成田空港最終便到着まで営業</p>
        </div>

        {/* メニュー */}
        <div className="footer__center">
          <Menu /> 
        </div>       

        <div className="footer__foot">
          <ul className="footer__sns">
            <li><a href="https://page.line.me/165idnoa?openQrModal=true" rel="noreferrer noopener" target="_blank"><StaticImage src="../images/icon/line_k.svg" alt="サンパーキング公式LINE" /></a></li>
            <li><a href="https://twitter.com/sunparking" rel="noreferrer noopener" target="_blank"><StaticImage src="../images/icon/tw_k.svg" alt="サンパーキング公式twitter" /></a></li>
            <li><a href="https://www.facebook.com/Sunport389" rel="noreferrer noopener" target="_blank"><StaticImage src="../images/icon/fb_k.svg" alt="サンパーキング公式facebook" /></a></li>
            <li><Link to="/form"><StaticImage src="../images/icon/mail_k.svg" alt="お問い合わせ" /></Link></li>
          </ul>
        </div>
      </div>{/* footer-inner */}

      <p className="copyright">© 2007 © Sunport Co., Ltd.</p>


    </footer>


  </>

)

export default Footer
