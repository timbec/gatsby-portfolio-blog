import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <section className="blog">
      <section className="blog__list">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          let featuredImage =
              post.frontmatter.featuredImage.childImageSharp.fluid || ""

          return (
            <li key={post.fields.slug}>
              <article
                className="blog__article"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header className="blog__article--header">
                <Link to={post.fields.slug}>
                    <Img fluid={featuredImage} />
                  </Link>
                  <h2 className="blog__article--header__title">
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small className="blog__article--header__date">
                    {post.frontmatter.date}
                    </small>
                </header>
                <section className="blog__article--body">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                    className="blog__article--body__excerpt"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </section>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
