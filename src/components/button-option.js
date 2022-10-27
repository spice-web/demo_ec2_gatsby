import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/_option.module.scss"

const link = 'https://www.sunparking.co.jp/form/rsv1.php?office_id=1';

const reservation = {
  position: 'relative',
  paddingBottom: '2rem'
}

const reservationButton = {
  position: 'absolute',
  bottom: '-2rem',
  left: '0',
  width: '100%',
  height: 'auto',
  // padding: '1rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: '10px solid #F2F2F2'
}

const ButtonOption = () => (
  <div style={reservationButton} className={styles.reservationButton}>
    <p className={styles.reservationText}>■ 駐車ご予約時に<br className="br_sm"/>一緒にお申込いただけます。</p>
    <Link to={link} className={styles.reservationLink}>今すぐ予約<br className="br_sm" />&#9654;&#9654;&#9654;</Link>
  </div>
)

export default ButtonOption