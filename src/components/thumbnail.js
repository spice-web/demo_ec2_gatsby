import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Thumbnail = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "option001" } }) {
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
      {data.allFile.edges.map((file, index) => {
        return (
          <>
            <meta name="thumbnail" content={file.node.publicURL}></meta>
          </>
        )
      })}
    </>
  )
}

export default Thumbnail
