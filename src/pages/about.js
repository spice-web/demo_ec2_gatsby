import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo";

const AboutPage = () => (
  <Layout>
    <Seo title="サンパーキンについて" />
    <h1>aboutページです</h1>
    <p>aboutページへようこそ</p>
    <Link to="/">ホームに戻る</Link>
  </Layout>
)

export default AboutPage