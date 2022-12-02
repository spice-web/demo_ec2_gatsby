import * as React from "react"
// import scrollTo from 'gatsby-plugin-smoothscroll';
import Layout from "../components/layout"
import Seo from "../components/seo";
import PageTitle from "../components/PageTitle"
// import Wrap from "../components/grayContainer"
import Menu from "../components/menu"

const SiteMapPage = () => (
  <Layout>
    <Seo
      title="サイトマップ"
      description="サンパーキングサイトマップ"
    />
    <PageTitle>Sitemap<span>サイトマップ</span></PageTitle>

    <div className="content__wrap content__pd">
      <div className="content__inner --sm">

        <Menu />


      </div>
      {/* inner */}
    </div>
    {/* wrap */}

    
  </Layout>
)

export default SiteMapPage