import React from 'react'
import Layout from 'components/Layout'
import Link from 'gatsby-link'
import Hero from 'components/Hero'

import { Fade } from 'webhart-base/utils/poses'

class AboutPage extends React.Component {
  render() {
    const { location } = this.props

    return (
      <>
        <Hero gradient="lightBlue">
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
      </>
    )
  }
}

AboutPage.defaultProps = {
  transitionComponent: Fade,
}

export default AboutPage
