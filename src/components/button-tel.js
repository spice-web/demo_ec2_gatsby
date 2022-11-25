import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"


import * as styles from "../styles/_button.module.scss"

const ButtonReserve = ({ bg }) => {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {name: {eq: "reservation_form"}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`)
return (
  <>
  <p className="text-center text-medium text-md mb--lg">当日はお電話でお問い合せください</p>
  <div className={styles.button__reserve__wrap}  data-bg={bg}>
    <div className={styles.button__reserve} data-type="tel" >
      <Link to="tel:0476331123" className={styles.button__tel}>お電話で予約</Link>
      <p className={styles.number}>TEL.0476-33-1123</p>
      <p className="note text-center">受付は9:00～18:00<br />年中無休で承っております</p>
    </div>
    <div className={styles.button__reserve} data-type="fax" >
        {data.allFile.edges.map((file, index) => {
          return (
              <a href={file.node.publicURL} target="_blank" className={styles.button__fax} rel="noreferrer noopener" >
                FAXで予約
              </a>
          )
        })}
      <p className={styles.number}>FAX.0476-33-1331</p>
      <p className="note text-center">申込み用紙がダウンロードできます<br />必要事項をご記入の上お送りください</p>
    </div>

    <ul>

      </ul>


  </div>  
</>
)

}

export default ButtonReserve

ButtonReserve.defaultProps = {
  bg: `color`,
}