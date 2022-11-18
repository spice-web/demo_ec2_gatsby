import { graphql, useStaticQuery } from "gatsby"
import React from 'react'
import { Link } from "gatsby";
import * as Styles from "../styles/_side.module.scss"


const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      resent:allMicrocmsInformation(sort: { fields: [date], order: DESC }, limit: 5) {
        edges {
          node {
            category {
              category
            }
            date(formatString: "YYYY年MM月DD日")
            informationId
            title
          }
        }
      }
      categories:allMicrocmsInformation {
        group(field: category___id) {
          totalCount
          distinct(field: category___id)
        }
      }
    }
  `)

  const posts = data.resent.edges
  const categories = data.categories

  return (
    <div className={Styles.side}>
      <h3 className={Styles.headline}>最近の投稿</h3>
      <div className={Styles.section}>
        {posts.map(({ node }) => {
            return (
              <div className={Styles.title}>
                <Link to={`/information/${node.informationId}`}>
                  {node.title}
                </Link>
              </div>
            )
          })}
      </div>
      <h3 className={Styles.headline}>カテゴリー一覧</h3>
      <ul>
      {categories.group.map(cate => (
        <li key={cate.distinct}>
          <Link to={`/information/${cate.distinct}`}>{cate.distinct}</Link>
        </li>
      ))}
    </ul>
    </div>

  )
}

export default Sidebar