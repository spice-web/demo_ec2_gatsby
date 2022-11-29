import React from "react"
import * as styles from "../styles/_grayContainer.module.scss" 


const GrayContainer = ({ children }) => (
  <div className={styles.wrap}>
    <div className={styles.inner}>
      {children}
    </div>
  </div>
)

export default GrayContainer