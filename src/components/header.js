import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header class="header__wrap">
    <div className="header__right">
      <Link to="/" >
        <StaticImage
          src="../images/dummy.png"
          alt="成田空港駐車場サンパーキング | 安心・信頼の顧客満足No.1"
          width={190}
        />
      </Link>
      <h1 className="header__headline">成田空港駐車場 サンパーキング成田店</h1>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
