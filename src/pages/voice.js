import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";


const VoicePage = ({ data }) => (
  <Layout>

    {/* カードブロック */}
    {data.allMicrocmsVoice.edges.map(({ node }) => (
      <div className="">
        <h3>お客様の声#{node.number}</h3>
          <p>{node.user_voice}</p>
        <h3>サンパーキングより</h3>
          <p>{node.reply}</p>
      </div>
    ))}
  </Layout>
)

export default VoicePage

export const query = graphql`
query {
  allMicrocmsVoice(sort:{fields:[number], order:DESC}) {
    edges {
      node {
        user_voice
        reply
        number
      }
    }
  }
}
`