import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Link } from "gatsby"
import * as Styles from "../styles/_side.module.scss"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      post: allMicrocmsInformation(sort: { date: DESC }, limit: 5) {
        edges {
          node {
            category {
              category
              id
            }
            date(formatString: "YYYY年MM月DD日")
            informationId
            title
          }
        }
      }
      category: allMicrocmsCategory {
        edges {
          node {
            category
            categoryId
          }
        }
      }
    }
  `)

  const posts = data.post.edges
  const categories = data.category.edges

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
      <h3 className={Styles.headline}>カテゴリー</h3>
      <div className={Styles.section}>
        {categories.map(({ node }) => {
          return (
            <div className={Styles.title}>
              <Link to={`/category/${node.categoryId}`}>{node.category}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
