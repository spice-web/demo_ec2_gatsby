import React from "react"
import * as styles from "../styles/_grayContainer.module.scss" 


export default ({ children }) => (
  <div className={styles.wrap_sm}>
    <div className={styles.inner}>
      {children}
    </div>
  </div>
)