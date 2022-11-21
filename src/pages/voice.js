import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";

// css
import * as styles from "../styles/_more-information.module.scss"

//components
import PageTitle from "../components/PageTitle"
import Wrap from "../components/grayContainer"


const VoicePage = ({ data }) => (
  <Layout>
    <Seo title="お客さまの声" />
    <PageTitle>VOICE<span>お客さまの声</span></PageTitle>

    <div className="content__wrap content__pd">

    <Wrap>
      <h3 className="sec__ttl">お客さまの声</h3>
      {data.allMicrocmsVoice.edges.map(({ node }) => (
        <div className={styles.voice__wrap}>
          <div className={styles.customer}>
            <h3 className={styles.voice__title}>お客様の声#{node.number}</h3>
            <p className="pg--md --mb0 text-xs">{node.user_voice}</p>
          </div>
          <div className={styles.reply}>
            <h3 className={styles.reply__title}>サンパーキングより</h3>
            <p className="pg--md --mb0 text-xs">{node.reply}</p>
          </div>
        </div>
      ))}

    </Wrap>

    </div>


  </Layout>
)

export default VoicePage

export const query = graphql`
query {
  allMicrocmsVoice(sort:{fields:[number], order:ASC}) {
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