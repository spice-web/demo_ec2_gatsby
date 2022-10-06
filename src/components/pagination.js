import React from "react"
import { Link } from "gatsby"

export const Pagination = ({ totalCount }) => {

  // 1ページに表示する件数
  const PER_PAGE = 2;

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link to={`/information/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  )
}