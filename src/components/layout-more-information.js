 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import HeaderMoreInformation from "./header-more-information"
 import FooterMoreInformation from "./footer-more-information"
 
 // import "./layout.css"
 
 // font指定
 import "@fontsource/noto-sans-jp/100.css"
 import "@fontsource/noto-sans-jp/300.css"
 import "@fontsource/noto-sans-jp/400.css"
 import "@fontsource/noto-sans-jp/500.css"
 import "@fontsource/noto-sans-jp/700.css"
 
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <>
       <HeaderMoreInformation siteTitle={data.site.siteMetadata?.title || `Title`} />
       <div
         style={{
           margin: `0 auto`,
           maxWidth: `var(--size-content)`,
           padding: `var(--size-gutter)`,
         }}
       >
         <main>{children}</main>
       </div>
       <FooterMoreInformation />
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 