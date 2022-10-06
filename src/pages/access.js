import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image"

// GoogleMap
import GoogleMap from "../components/GoogleMap"

const AccessPage = () => (
  <Layout>
    <GoogleMap />
  </Layout>

)

export default AccessPage