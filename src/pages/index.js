import React from 'react'
import Hero from 'components/Hero'
import { Container, Section, LinkButton } from 'webhart-base'
import { colors } from 'webhart-base/utils/style'
import { rhythm } from '../webhart-base/utils/style'
import styled, { css } from 'react-emotion'

import Link from 'gatsby-link'
import Image from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Hero>
          <div>
            <h1>vleus</h1>
          </div>
        </Hero>
        {/* intro */}
        <Section>
          <Container>test</Container>
        </Section>
      </React.Fragment>
    )}
  />
)
