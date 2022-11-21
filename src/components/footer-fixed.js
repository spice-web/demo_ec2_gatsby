import * as React from "react"
import { Link } from "gatsby"

// 予約リンク
const reserve = "https://www.sunparking.co.jp/form/rsv1.php"

const FooterFixed = () => (
<>
  {/* フッター固定ボタン */}
  <ul className="footer-fixed-btn__wrap">
    <li className="footer-fixed-btn__item"><Link to="/price" className="is-block">料金確認</Link></li>
    <li className="footer-fixed-btn__item"><Link to={reserve} className="is-block" target="_blank">WEB予約</Link></li>
    <li className="footer-fixed-btn__item"><Link to="/guide" className="is-block">アクセス</Link></li>
  </ul>
  {/* フッター固定ボタン */}
  <ul className="side-fixed-btn__wrap">
  <li className="side-fixed-btn__item">
    <Link to="/price" className="is-block">
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
    <Link to={reserve} className="is-block" target="_blank">
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
    <Link to="/guide" className="is-block">
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

export default FooterFixed