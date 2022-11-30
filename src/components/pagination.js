import * as React from "react"
import { Link } from "gatsby"

// ページネーション
import * as styles from "../styles/_information.module.scss"

export const Pagination = ({ totalCount }) => {

  // 1ページに表示する件数
  const PER_PAGE = 8;

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul className={styles.pagination__list}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li className={styles.pagination__item} key={index}>
          <Link to={`/information/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  )
}