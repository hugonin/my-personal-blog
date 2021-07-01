import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./header.styles.css"
import Navbar from "../navbar/navbar.component"

const Header = ({ siteTitle }) => (
  <header className="page-header">
    <div className="container">
      <div className="page-header__content">
        <div>
        <Link to="/">{siteTitle}</Link>
        </div>
        <Navbar />
      </div>
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
