import React from "react"

import "./footer.styles.css"

const Footer = () => {
  return (
    <footer class="site-footer">
      © {new Date().getFullYear()}| Made by Hugonin, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer
