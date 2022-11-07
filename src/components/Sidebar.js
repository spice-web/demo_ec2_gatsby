import { graphql, useStaticQuery } from "gatsby"
import React from 'react'
import { Link } from "gatsby";
import * as Styles from "../styles/_side.module.scss"


const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsInformation(sort: { fields: [date], order: DESC }, limit: 5) {
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
    }
  `)

  const posts = data.allMicrocmsInformation.edges
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
    </div>

  )
}

export default Sidebar