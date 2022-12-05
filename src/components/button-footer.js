import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"


import * as styles from "../styles/_button.module.scss"

const ButtonReserve = () => {
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
    <div className={styles.button__reserve__wrap}>
      <div id="fax" className="LinkMargin"></div>
      <div className={styles.button__reserve}>
      {data.allFile.edges.map((file, index) => {
        return (
        <a href={file.node.publicURL} target="_blank" rel="noreferrer noopener" className={styles.button__footer}>FAXで予約</a>
        )
      })}
      </div>
      <div className={styles.button__reserve}>
        <Link to="/rsv-faq" className={styles.button__footer}>予約でお困りの方</Link>
      </div>

    </div>  
  </>
)
}

export default ButtonReserve