import React from "react"

import "./hero.styles.css"

const Hero = () => (
  <section className="hero">
    <div className="container flow">
      <div className="hero__content flow">
        <h1 className="section-title">Welcome to my blog!</h1>
        <p>
          I use this space to document my adventures in front-end development,
          sharing how I’ve overcome issues I’ve run into, useful resources, and
          more.
        </p>
        <p>
          Below are some of my favourite articles, or you can go to the blog
          page to see my most recent posts.
        </p>
        <div className="flex-group">
          <a href="#featured-articles" className="btn btn--primary">
            Featured articles
          </a>
          <a href="./blog.html" className="btn btn--neutral">
            Most recent articles
          </a>
        </div>
      </div>
      <div>
        <img src="//unsplash.it/510" alt="" className="hero__image" />
      </div>
    </div>
  </section>
)

export default Hero
