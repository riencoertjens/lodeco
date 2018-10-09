import React from 'react'
import Hero from 'components/Hero'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query AboutPageQuery {
        RienHoofd: file(base: { eq: "RienHoofd.jpg" }) {
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
        <Hero
          logoAlign="flex-start"
          titleAlign="right"
          gradient="orange"
          image={data.RienHoofd.childImageSharp.fluid}
        >
          <h1>Coding artisan</h1>
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
