import React from 'react'
import Hero from 'components/Hero'
import Link from 'gatsby-link'
import { Container, Section } from '../webhart-base'
import Tabs, { Tab } from '../webhart-base/Tabs'
import { css } from 'emotion'
import { colors } from '../webhart-base/utils/style'

const AboutPage = props => (
  <React.Fragment>
    <Hero gradient="darkBlue">
      <h2>first impressions last the longest</h2>
    </Hero>
    <Section>
      <Container>
        <h1>packages/services/options</h1>
        <p>
          <i>no better way to impress than with a tailor made suit</i>
        </p>
        <p
          className={css`
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            i {
              color: ${colors.orange};
            }
          `}
        >
          Every project is started with the same clear goals in mind:{' '}
          <i>speed</i>, <i>security</i>, <i>SEO</i>, and <i>usability</i> across{' '}
          <i>all devices</i>. <Link to="about">learn more</Link>
        </p>
        <p>
          Depending on your requirements and needs there are different options
          available.
        </p>
      </Container>

      <Tabs
        className={css`
          text-align: center;
        `}
      >
        <Tab name="made to measure">
          <h3>Made to measure</h3>
          <p>
            A made to measure suit is cut and sewn using standard base size
            patterns
          </p>
          <p>- € -</p>
          <p>includes:</p>
          <ul
            className={css`
              text-align: left;
              margin: 0 auto;
              display: inline-block;
            `}
          >
            <li>bla</li>
            <li>bla</li>
            <li>bla</li>
            <li>bla</li>
          </ul>
        </Tab>
        <Tab name="made to order">
          <h3>Made to order</h3>
          <p>
            A made to order suit is created from standard patterns that are
            sized based on specific requirements and measurements.
          </p>
          <p>- €€ -</p>
          <p>includes:</p>
          <ul
            className={css`
              text-align: left;
              margin: 0 auto;
              display: inline-block;
            `}
          >
            <li>bla</li>
            <li>bla</li>
            <li>bla</li>
            <li>bla</li>
          </ul>
        </Tab>
        <Tab name="bespoke">
          <h3>Fully bespoke</h3>
          <p>
            A bespoke suit is made from scratch. Patterns are created based on
            requirements and special requests, fitted, measured and refitted
            until perfect
          </p>
          <p>- €€€ -</p>
          <p>includes:</p>
          <ul
            className={css`
              text-align: left;
              margin: 0 auto;
              display: inline-block;
            `}
          >
            <li>bla</li>
            <li>bla</li>
            <li>bla</li>
            <li>bla</li>
          </ul>
        </Tab>
      </Tabs>
    </Section>
  </React.Fragment>
)

export default AboutPage
