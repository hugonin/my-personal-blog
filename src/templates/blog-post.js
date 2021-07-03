import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Header from "../components/header/header.component"
import Footer from "../components/footer/footer.component"

// import '../css/blog-post.css';
import "../components/layout.css"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  
  return (
      <>
    <Header siteTitle={ `My Dev Blog`}/>
    <article className="main-article">
      <div className="container container--narrow flow">
        <Helmet title={`My Dev Blog - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1 className="article-title">{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </article>
    <Footer />
    </>
  )
}

export const pageQuery = graphql 
`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date(formatString: "MMMM DD, YYYY")
        tags
        image
        imageAlt
        description
      }
    }
  }
`
