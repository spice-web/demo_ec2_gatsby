import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/_button.module.scss"

const ButtonReserve = ({ bg }) => (
  <>
    <p className="text-center text-medium text-md mb--lg">当日はお電話でお問い合せください</p>
    <div className={styles.button__reserve__wrap}  data-bg={bg}>
      <div className={styles.button__reserve} data-type="tel" >
        <Link to="tel:0476331123" className={styles.button__tel}>お電話で予約</Link>
        <p className={styles.number}>TEL.0476-33-1123</p>
        <p className="note text-center">受付は9:00～18:00<br />年中無休で承っております</p>
      </div>
      <div className={styles.button__reserve} data-type="fax" >
        <Link to="/pdf/fax.pdf" className={styles.button__fax} target="_blank">FAXで予約</Link>
        <p className={styles.number}>FAX.0476-33-1331</p>
        <p className="note text-center">申込み用紙がダウンロードできます<br />必要事項をご記入の上お送りください</p>
      </div>
    </div>  
  </>

)

export default ButtonReserve

ButtonReserve.defaultProps = {
  bg: `color`,
}