import React from 'react'
import Hero from 'components/Hero'
import { StaticQuery, graphql } from 'gatsby'
import styled, { css } from 'react-emotion'
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
          <div
            className={css`
              transform: scale(0.5);
              perspective: 2500px;
              display: flex;
              align-items: center;
              justify-content: center;
              & > * {
                flex-grow: 0;
                flex-shrink: 0;
                margin: 0 30px;
              }
            `}
          >
            <Tablet
              site="https://www.lebuindhaese.be/"
              className={css`
                transform: rotateX(0deg) rotateY(45deg) rotateZ(0deg);
              `}
            />
            <Desktop
              site="https://www.lebuindhaese.be/"
              className={css`
                /* transform: rotateX(0deg) rotateY(0) rotateZ(0deg); */
              `}
            />
            <Phone
              site="https://www.lebuindhaese.be/"
              className={css`
                transform: rotateX(0deg) rotateY(-45deg) rotateZ(0deg);
              `}
            />
          </div>
        </section>
      </React.Fragment>
    )}
  />
)
