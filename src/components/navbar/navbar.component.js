import React from "react"
import { Link } from "gatsby"

import "./navbar.styles.css"

const Navbar = () => (
  <nav>
    <ul className="nav-list flex-group">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
