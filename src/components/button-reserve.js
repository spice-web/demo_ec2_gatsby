import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/_button.module.scss"

const ButtonReserve = ({ bg }) => (
  <div className={styles.button__reserve__wrap}  data-bg={bg}>
    <div className={styles.button__reserve} data-type="web" >
      <p className={styles.button__reserve__title}>▼ 通常料金から38%OFF! ▼</p>
      <Link to="/" className={styles.button__reserve__link}>今すぐ予約</Link>
    </div>
    <div className={styles.button__reserve} data-type="line" >
      <p className={styles.button__reserve__title}>▼ 洗⾞無料クーポン配布中 ▼</p>
      <Link to="/" className={styles.button__reserve__link}>LINE予約</Link>
    </div>
  </div>
)

export default ButtonReserve

ButtonReserve.defaultProps = {
  bg: `color`,
}