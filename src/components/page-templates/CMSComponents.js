import Link from 'gatsby-link'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import React from 'react'

const ContentComponent = ({ content, children, CMSPreview }) =>
  CMSPreview ? (
    <div>{content ? content : children}</div>
  ) : (
    <div dangerouslySetInnerHTML={{ __html: content ? content : children }} />
  )

ContentComponent.defaultProps = {
  CMSPreview: false,
}
ContentComponent.propTypes = {
  content: PropTypes.string,
  children: PropTypes.func,
  CMSPreview: PropTypes.bool,
}

const ImageComponent = ({ image, alt, CMSPreview }) =>
  CMSPreview ? (
    <img src={image} alt={alt} style={{ width: '100%' }} />
  ) : (
    <GatsbyImage fluid={image.childImageSharp.fluid} alt={alt} />
  )

ImageComponent.defaultProps = {
  CMSPreview: false,
}
ImageComponent.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.object,
  CMSPreview: PropTypes.bool,
}

const LinkComponent = ({ to, children, alt, CMSPreview }) =>
  CMSPreview ? (
    <a href={to} alt={alt}>
      {children}
    </a>
  ) : (
    <Link to={to} alt={alt}>
      {children}
    </Link>
  )

LinkComponent.defaultProps = {
  CMSPreview: false,
}
LinkComponent.propTypes = {
  alt: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.func,
  CMSPreview: PropTypes.bool,
}

export { ContentComponent, ImageComponent, LinkComponent }
