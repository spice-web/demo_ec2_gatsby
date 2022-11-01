import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/_button.module.scss"

const ButtonReserve = () => (
  <>
    <div className={styles.button__reserve__wrap}>
      <div className={styles.button__reserve}>
        <Link to="../images/pdf/reservation_form.pdf" className={styles.button__footer} target="_blank">FAXで予約</Link>
      </div>
      <div className={styles.button__reserve}>
        <Link to="/rsv-faq" className={styles.button__footer}>予約でお困りの方</Link>
      </div>

    </div>  
  </>

)

export default ButtonReserve