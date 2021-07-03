import * as React from "react"
import { Link, graphql } from "gatsby"
//import { GatsbyImage } from "gatsby-plugin-image"
//import { Helmet } from "react-helmet"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero.component"

export default function IndexPage ({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return(
    <Layout>
    <Seo title="Home" />
    <Hero />
    <section id="featured-articles" className="featured-articles">
    <div className="container flow">
    <h2 className="section-title text-center ">Featured articles</h2>
    <p className="text-center">Here is a sample of articles which I feel give you a good idea of what this site is all about.</p>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="articles__list flow">
            <article className="snippet" key={post.id}>
              <h3 className="snippet__title">
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h3>
              <p className="snippet__meta"> by <span>{post.frontmatter.author}</span> on <span>{post.frontmatter.date}</span></p>
              <p className="snippet__body">{post.excerpt}</p>
              <Link to={post.frontmatter.path} className="btn btn--primary">Continue Reading</Link>
            </article>
            </div>
          )
        })}
    </div>
 

    </section>

  </Layout>
  )
  
}



export const pageQuery = graphql
`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
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
    }
  }
  `
