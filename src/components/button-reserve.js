import * as React from "react"
import { Link } from "gatsby"

import * as styles from "../styles/_button.module.scss"

const reserveLink = "https://www.sunparking.co.jp/form/rsv1.php"

const ButtonReserve = ({ bg }) => (
  <div className={styles.button__reserve__wrap}  data-bg={bg}>
    <div className={styles.button__reserve} data-type="web" >
      <p className={styles.button__reserve__title}>▼ 通常料金から38%OFF! ▼</p>
      <Link to={reserveLink} className={styles.button__reserve__link} target="_blank" rel="noreferrer noopener">今すぐ予約</Link>
    </div>
    <div className={styles.button__reserve} data-type="line" >
      <p className={styles.button__reserve__title}>▼ 洗⾞無料クーポン配布中 ▼</p>
      <Link to="https://page.line.me/165idnoa" className={styles.button__reserve__link} target="_blank" rel="noreferrer noopener">LINE予約</Link>
    </div>
  </div>
)

export default ButtonReserve

ButtonReserve.defaultProps = {
  bg: `color`,
}