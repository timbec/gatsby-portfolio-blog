import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Image from "../components/image"

console.log(Image)


const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

        <section id="intro" className="intro">
          <article className="intro__text">
            <h2>Welcome</h2>

            <p>
              I am a Full-Stack Developer specializing in Javascript, PHP and
              Python. I have used Wordpress, Laravel, Django and, most recently, Gatsby.js.
              This portfolio site (with attached blog) is my first site built in Gatsby.
            </p>

            <p>
              I have been lucky to have some great clients from diverse fields,
              including the NYTimes, EPIX TV, Weil Gotshal and Manges, Carnegie,
              and Lazard Asset Management among others. For a full (er) list,
              see below or visit my [LinkedIn profile][https://linkedin.com/in/timbeckett1]
            </p>

            <p>
              As well as web development, I have become interested in the so-called Web 3.0 - Data Science, Machine Learning, AR/VR, the Blockchain. To that end I have been studying the basics of data science - Data Analysis, Machine Learning, Data Visualization, and the Solidity language used for smart contracts in the Blockchain, as well as learning about the blockchain generally. 
            </p>

            <p>
              I came to software development from a background in media. With this site, I intend to start writing about Web 3.0, and various obstacles and developments I've encountered as a web developer. 
            </p>

            <p>This site remains under construction . . . </p>
          </article>
          <article className="intro__collage">
            <ul className="intro__collage--list">
              <li className="intro__collage--photo">
                <Image src={`collage-images/Writing.jpg`} />
              </li>
              <li className="intro__collage--photo">
                <Image src={`collage-images/opera-slider.jpg`} />
              </li>
              <li className="intro__collage--photo">
                <Image src={`collage-images/Unbearables_2.jpg`} />
              </li>
            </ul>
          </article>
        </section>
        <section id="portfolio" className="portfolio">
          <h2 className="portfolio__heading">Portfolio</h2>
          <ul className="portfolio__images">
            <li className="portfolio__images--image one">
              <Image src={`client-logos/new-epix-logo.png`} />
            </li>
            <li className="portfolio__images--image large-logo two">
              <Image src={`client-logos/nytimes_logo.jpg`} />
            </li>
            <li className="portfolio__images--image large-logo three">
              <Image src={`client-logos/millenium-full.jpg`} />
            </li>
            <li className="portfolio__images--image square-logo four">
              <Image src={`client-logos/sullivan.jpg`} />
            </li>

            <li className="portfolio__images--image small-logo five">
              <Image src={`client-logos/greatimmigrants.jpg`} />
            </li>
            <li className="portfolio__images--image square-logo six">
              <Image src={`client-logos/opera-rect.png`} />
            </li>
            <li className="portfolio__images--image med-logo seven">
              <Image src={`client-logos/lazard_asset_management_logo.jpg`} />
            </li>
            <li className="portfolio__images--image thin-logo eight">
              <Image src={`client-logos/weil.png`} />
            </li>
            <li className="portfolio__images--image small-logo nine">
              <Image src={`client-logos/wsj.jpg`} />
            </li>
            <li className="portfolio__images--image small-logo ten">
              <Image src={`client-logos/nyu-law.png`} />
            </li>
            <li className="portfolio__images--image small-logo eleven">
              <Image src={`client-logos/Digitas_Health_Logo.jpg`} />
            </li>
          </ul>
        </section>
    </Layout>
  )
}

export default IndexPage
