import React from 'react'
import Hero from 'components/Hero'
import GatsbyLink from 'gatsby-link'
import { Container } from '../webhart-base'

const AboutPage = props => (
  <React.Fragment>
    <Hero gradient="orange">
      <h1>Packages & services</h1>
    </Hero>
    <section>
      <Container>
        <div>
          <h2>packages</h2>
          <p>
            all websites are based on the same basics. Depending on your needs
            there are different packages availeble.
          </p>
          <h3>pick your style</h3>
          <p>
            we use a basic site template is used and customised to match the
            style of your existing brand. No nonsonse, no frills.
          </p>
          <h3>made to measure</h3>
          <p>
            a more advanced aproach, for those who need a specific design or
            custom features like an advanced CMS, webshop, or registration
            system.
          </p>
          <h3>tailor made</h3>
          <p>fully custom</p>

          <h2>services</h2>
          <h3>analytics + improvement</h3>
          <h3>market research*</h3>
          <h3>brand building*</h3>
          <span>*created by or together with other proffessionals</span>
        </div>
      </Container>
    </section>
  </React.Fragment>
)

export default AboutPage
