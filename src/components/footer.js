import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import ButtonReserve from "./button-reserve"

import Menu from "./menu"

const Footer = () => (
  <>
  <div className="content__wrap bg--gray footer-gray">
      <div className="content__inner  text-white">
        <p className="text-center text-lg text-bold">ご利用前日23:00までは<span className="nowrap"><span className="text-y">おトクなWEB予約</span>が可能！</span></p>

        {/* 予約ボタン */}
        <ButtonReserve bg="white" />
        {/* 予約ボタン */}

        <p className="text-center">当日はお電話でお問い合せください</p>
        <div className="flex__wrap--md text-center">
          <p>サン予約センター</p>
          <h3 className="text-lg">TEL.0476-33-1123</h3>
          <p>［受付時間］9：00〜18：00</p>
        </div>

    </div>
  </div>
  {/* background gray */}


    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__head">
          <h2 className="footer__logo"><StaticImage src="../images/logo.svg" /></h2>
          <h3>株式会社サン・ポート&nbsp;&nbsp;<br className="br_maxmd" />〒286-0121 千葉県成田市駒井野 134</h3>
          <p>［営業時間］5：00～22：30&nbsp;&nbsp;<br className="br_maxmd" />成田空港最終便到着まで営業</p>
        </div>

        {/* メニュー */}
        <div className="footer__center">
          <Menu /> 
        </div>       

        <div className="footer__foot">
          <ul className="footer__sns">
            <li><a href="" rel="noreferrer noopener" target="_blank"><StaticImage src="../images/icon/line_k.svg" alt="サンパーキング公式LINE" /></a></li>
            <li><a href="" rel="noreferrer noopener" target="_blank"><StaticImage src="../images/icon/tw_k.svg" alt="サンパーキング公式twitter" /></a></li>
            <li><a href="" rel="noreferrer noopener" target="_blank"><StaticImage src="../images/icon/fb_k.svg" alt="サンパーキング公式facebook" /></a></li>
            <li><Link to="/contact"><StaticImage src="../images/icon/mail_k.svg" alt="お問い合わせ" /></Link></li>
          </ul>
        </div>
      </div>{/* footer-inner */}

      <p className="copyright">© 2007 © Sunport Co., Ltd.</p>


    </footer>
    {/* フッター固定ボタン */}
    <ul className="footer-fixed-btn__wrap">
      <li className="footer-fixed-btn__item"><Link to="" className="is-block">料金確認</Link></li>
      <li className="footer-fixed-btn__item"><Link to="" className="is-block">WEB予約</Link></li>
      <li className="footer-fixed-btn__item"><Link to="access" className="is-block">アクセス</Link></li>
    </ul>
    {/* フッター固定ボタン */}
    <ul className="side-fixed-btn__wrap">
      <li className="side-fixed-btn__item">
        <Link to="" className="is-block">
          <div className="side-fixed-btn__item--head fee">料金確認</div>
          <div className="side-fixed-btn__item--right fee">
            <dl>
              <dt className="side-fixed-btn__dttl fee">安心料金設定</dt>
              <dd className="side-fixed-btn__desc">基本料金<br />深夜早朝<br />割増なし</dd>
            </dl>
          </div>
        </Link>
      </li>
      <li className="side-fixed-btn__item">
        <Link to="" className="is-block">
          <div className="side-fixed-btn__item--head reserve">WEB予約</div>
          <div className="side-fixed-btn__item--right reserve">
            <dl>
              <dt className="side-fixed-btn__dttl">安心料金設定</dt>
              <dd className="side-fixed-btn__desc">おトクで<br />カンタン<br />WEB予約</dd>
            </dl>
          </div>
        </Link>
      </li>
      <li className="side-fixed-btn__item">
        <Link to="access" className="is-block">
          <div className="side-fixed-btn__item--head access">アクセス</div>
          <div className="side-fixed-btn__item--right access">
            <dl>
              <dt className="side-fixed-btn__dttl">空港スグそこ</dt>
              <dd className="side-fixed-btn__desc">成田空港<br />通り<br />交差点前</dd>
            </dl>
          </div>
        </Link>
        </li>
    </ul>
  </>

)

export default Footer
