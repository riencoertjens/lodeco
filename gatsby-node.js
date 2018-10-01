/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require('babel-polyfill')

const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node, actions, getNode }) => {
  // https://github.com/danielmahon/gatsby-remark-relative-images#to-convert-frontmatter-images
  fmImagesToRelative(node)

  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value =
      node.frontmatter.templateKey + createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                templateKey
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(
            `./src/components/page-templates/${
              node.frontmatter.templateKey
            }-template.js`
          ),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })

      resolve()
    })
  })
}
