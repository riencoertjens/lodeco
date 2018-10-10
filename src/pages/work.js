import React from 'react'
import Hero from 'components/Hero'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'
import { Phone, Tablet, Desktop } from 'components/SiteMockup'

export default () => (
  <StaticQuery
    query={graphql`
      query WorkPageQuery {
        buro: file(base: { eq: "buro.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1800, cropFocus: CENTER, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        portfolio: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "site" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                date
                url
                package
                tags
              }
              html
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Hero gradient="lightBlue" image={data.buro.childImageSharp.fluid}>
          <h1>My work</h1>
        </Hero>
        <section>
          <Phone site="https://www.lebuindhaese.be/" />
          <Tablet site="https://www.lebuindhaese.be/" />
          <Desktop site="https://www.lebuindhaese.be/" />
        </section>
      </React.Fragment>
    )}
  />
)
