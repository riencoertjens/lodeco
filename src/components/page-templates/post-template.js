import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from 'webhart-base/SEO'
import { ContentComponent, ImageComponent } from './CMSComponents'

export const PostTemplate = ({ title, image, date, children, CMSPreview }) => {
  return (
    <article>
      <h1>{title}</h1>
      <ImageComponent {...image} />
      <span>{date}</span>
      <ContentComponent>{children}</ContentComponent>
    </article>
  )
}

PostTemplate.defaultPropTypes = { CMSPreview: false }

PostTemplate.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  html: PropTypes.string,
  image: PropTypes.object,
  CMSPreview: PropTypes.bool,
}

const PostPage = ({ data }) => {
  const post = data.post
  return (
    <>
      <SEO />
      <PostTemplate
        image={{
          alt: post.frontmatter.title,
          image: post.frontmatter.image,
        }}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
      >
        {post.html}
      </PostTemplate>
    </>
  )
}

PostPage.propTypes = {
  data: PropTypes.object,
}

export default PostPage

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
