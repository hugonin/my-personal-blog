import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header class="page-header">
    <div class="container">
      <div class="page-header__content">
        <div>
        <Link to="/">{siteTitle}</Link>
        </div>
        <nav>
          <ul role="list" class="nav-list flex-group">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog/">Blog</Link></li>
          </ul>
        </nav>
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
