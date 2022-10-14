import * as React from "react"
import { Link } from 'gatsby';

import * as styles from "../styles/_button.module.scss"

function ButtonMore({ title, url }) {
  return (
    <>
      <Link to={url} className={styles.button__more}>{title}</Link>
    </>
  )
};


export default ButtonMore;
