import React from 'react'
import Layout from '../components/Layout'
import Link from 'gatsby-link'
import Hero from '../components/Hero'

class AboutPage extends React.Component {
  render() {
    const { location } = this.props

    return (
      <Layout key="about-page-layout" location={location}>
        <Hero gradient="orange">
          <h1>about</h1>
          <h2>about</h2>
          <h3>about</h3>
          <h4>about</h4>
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
        </Hero>
      </Layout>
    )
  }
}

export default AboutPage
