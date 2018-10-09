import React from 'react'
import Hero from 'components/Hero'
import { StaticQuery, graphql } from 'gatsby'

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
      }
    `}
    render={data => (
      <React.Fragment>
        <Hero gradient="lightBlue" image={data.buro.childImageSharp.fluid}>
          <h1>My work</h1>
        </Hero>
        <section>
          <p>
            Eiusmod qui quis cillum magna officia sunt mollit ipsum cillum
            commodo excepteur eiusmod duis adipisicing. Sit aute culpa aliqua
            quis consectetur nisi Lorem amet proident dolore deserunt laborum
            excepteur deserunt. Elit aliquip fugiat voluptate ad sit non ex
            cupidatat culpa voluptate dolore aliquip aliquip pariatur. Magna
            sint exercitation incididunt cupidatat adipisicing consectetur do
            enim id aute occaecat.
          </p>
          <p>
            Eiusmod qui quis cillum magna officia sunt mollit ipsum cillum
            commodo excepteur eiusmod duis adipisicing. Sit aute culpa aliqua
            quis consectetur nisi Lorem amet proident dolore deserunt laborum
            excepteur deserunt. Elit aliquip fugiat voluptate ad sit non ex
            cupidatat culpa voluptate dolore aliquip aliquip pariatur. Magna
            sint exercitation incididunt cupidatat adipisicing consectetur do
            enim id aute occaecat.
          </p>
          <p>
            Eiusmod qui quis cillum magna officia sunt mollit ipsum cillum
            commodo excepteur eiusmod duis adipisicing. Sit aute culpa aliqua
            quis consectetur nisi Lorem amet proident dolore deserunt laborum
            excepteur deserunt. Elit aliquip fugiat voluptate ad sit non ex
            cupidatat culpa voluptate dolore aliquip aliquip pariatur. Magna
            sint exercitation incididunt cupidatat adipisicing consectetur do
            enim id aute occaecat.
          </p>
        </section>
      </React.Fragment>
    )}
  />
)
