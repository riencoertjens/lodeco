import React from 'react'
import Hero from 'components/Hero'
import Link from 'gatsby-link'
import { Container, Section } from '../webhart-base'
import Tabs, { Tab } from '../webhart-base/Tabs'
import { css } from 'emotion'
import { StaticQuery, graphql } from 'gatsby'
import { rhythm } from '../webhart-base/utils/typography'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export default () => (
  <StaticQuery
    query={graphql`
      query PackagesPageQuery {
        sweatshop: file(base: { eq: "sweatshop.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1800, quality: 75) {
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
          image={data.sweatshop.childImageSharp.fluid}
        >
          <h2>No better way to impress than with a tailor made suit</h2>
        </Hero>
        <Section>
          <Container>
            <h1>choose your service</h1>
            <p
              className={css`
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
              `}
            >
              In every project we keep the same clear goals in mind:{' '}
              <i>speed</i>, <i>security</i>, <i>SEO</i>, and <i>usability</i>{' '}
              across <i>all devices</i>. Quality hosting and domain management
              are provided for all sites. <Link to="about">learn more</Link>
            </p>
            <p>
              Depending on your requirements and needs there are different
              options available.
            </p>
          </Container>

          <Tabs
            className={css`
              text-align: center;
              ul {
                margin: 0 auto ${rhythm()};
                display: inline-block;
                li {
                  text-align: left;
                }
              }
              h4 {
                font-weight: 600;
              }
            `}
          >
            <Tab name="made to measure">
              <h3>Made to measure</h3>
              <p>
                A <i>made to measure</i> suit is cut and sewn using standard
                sized patterns
              </p>
              <p>- € -</p>
              <h4>includes:</h4>
              <ul>
                <li>
                  standard pages (home, about, ...)
                  <br />
                  built by combining standard page-sections
                  <br />(<i>patterns</i>) as building blocks.
                </li>
                <li>
                  <i>blog</i> and post pages
                </li>
                <li>
                  blog <i>CMS</i>
                </li>
                <li>
                  basic <i>forms</i>
                </li>
                <li>
                  website <i>analytics</i>
                </li>
              </ul>
              <h4>example sites:</h4>
              <OutboundLink
                href="https://www.ecologisch-isoleren.be"
                target="_blank"
                rel="noopener"
              >
                eco-dé (v1)
              </OutboundLink>{' '}
              |{' '}
              <OutboundLink
                href="https://www.oase-massage.be"
                target="_blank"
                rel="noopener"
              >
                oase massage
              </OutboundLink>
            </Tab>
            <Tab name="made to order">
              <h3>Made to order</h3>
              <p>
                A <i>made to order</i> suit is created from standard patterns
                that are sized based on specific requirements and measurements.
              </p>
              <p>- €€ -</p>
              <h4>includes:</h4>
              <ul>
                <span>
                  <i>made to measure</i>
                  <br />+<br />
                </span>
                <li>
                  <i>custom</i> post items and pages
                  <br />
                  like. portfolio, gallery, ...
                  <br />
                  with <i>CMS</i>
                </li>
                <li>
                  custom <i>page designs</i>
                </li>
              </ul>
              <h4>example sites:</h4>
              <OutboundLink
                href="https://www.lebuindhaese.be"
                target="_blank"
                rel="noopener"
              >
                Lebuin D'Haese
              </OutboundLink>{' '}
              |{' '}
              <OutboundLink
                href="https://www.lebuindhaese.be"
                target="_blank"
                rel="noopener"
              >
                Iefke Molenstra
              </OutboundLink>
            </Tab>
            <Tab name="bespoke">
              <h3>Fully bespoke</h3>
              <p>
                A <i>bespoke</i> suit is made from scratch. Patterns are created
                based on requirements and special requests, fitted, measured and
                refitted until perfect
              </p>
              <span>
                <i>made to measure</i>
                <br />+<br />
                <i>made to order</i>
                <br />+<br />
              </span>
              <ul>
                <li>
                  special <i>features</i>
                  <br />
                  like: webshop, event registration, ...
                  <br /> with corresponding <i>CMS</i>
                  -features
                </li>
                <li>
                  <i>unique</i> designs
                </li>
                <li>
                  <i>advanced</i> CMS for easy page-content editing
                </li>
              </ul>
              <h4>example sites:</h4>
              <OutboundLink
                href="https://www.thebroomwagongirona.com"
                target="_blank"
                rel="noopener"
              >
                The Broomwagon
              </OutboundLink>
              {' | '}
              <OutboundLink
                href="https://www.web-hart.com"
                target="_blank"
                rel="noopener"
              >
                web hart
              </OutboundLink>
              {' | '}
              <span>east</span> | <span>eco-dé (v3)</span>
            </Tab>
          </Tabs>
        </Section>
      </React.Fragment>
    )}
  />
)
