import React from "react"

const Hero = () => (
  <section class="hero">
    <div class="container flow">
      <div class="hero__content flow">
        <h1 class="section-title">Welcome to my blog!</h1>
        <p>
          I use this space to document my adventures in front-end development,
          sharing how I’ve overcome issues I’ve run into, useful resources, and
          more.
        </p>
        <p>
          Below are some of my favourite articles, or you can go to the blog
          page to see my most recent posts.
        </p>
        <div class="flex-group">
          <a href="#featured-articles" class="btn btn--primary">
            Featured articles
          </a>
          <a href="./blog.html" class="btn btn--neutral">
            Most recent articles
          </a>
        </div>
      </div>
      <div>
        <img src="//unsplash.it/510" alt="" class="hero__image" />
      </div>
    </div>
  </section>
)

export default Hero
