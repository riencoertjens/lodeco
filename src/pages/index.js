import React from 'react'
import Hero from 'components/Hero'
import { Container, Section } from 'webhart-base'
import styled, { css } from 'react-emotion'
import TypedText from 'components/TypedText'
import Link from 'gatsby-link'

import { colors, gradients } from 'webhart-base/utils/style'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import GatsbyLink from 'gatsby-link'

import twitterIcon from '../../static/images/icons/twitter.svg'
import instagramIcon from '../../static/images/icons/instagram.svg'
import stravaIcon from '../../static/images/icons/strava.svg'
import RienHoofd from '../../static/images/RienHoofd.jpg'

const IndexPage = props => (
  <React.Fragment>
    <Hero gradient="darkBlue">
      <div>
        <h1>State of the art websites made by a human</h1>
        <span>
          (in plek van een groot bedrijf, snaptge? ma daar moet ik nog wa over
          nadenken)
        </span>
      </div>
    </Hero>
    {/* intro */}
    <Section>
      <Container
        className={css`
          text-align: center;
          max-width: 600px;
          code {
            color: ${colors.orange};
          }
        `}
      >
        <img
          src={RienHoofd}
          className={css`
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
            display: block;
            margin: 0 auto 30px;
          `}
        />
        <h2
          className={css`
            display: inline-block;
            position: relative;
            &:hover code,
            code:hover {
              display: block;
            }
            span {
              font-size: 14px;
              display: block;
              position: absolute;
              top: -7px;
              right: -10px;
              opacity: 1;
              background: rgba(255, 255, 255, 0.75);
              color: ${colors.orange};
              border-radius: 50%;
              width: 15px;
              height: 15px;
              code {
                display: none;
                background: rgba(255, 255, 255, 0.75);
                position: absolute;
                right: 10px;
                bottom: 10px;
                padding: 0;
                line-height: 1.3;
                width: 250px;
                font-size: 12px;
              }
            }
          `}
        >
          Hi, my name is Rien
          <br />
          <span>
            ?<code>pronounced like 'Reen' in English</code>
          </span>
        </h2>
        <p>
          I'm a{' '}
          <TypedText
            items={[
              'web developer',
              'cyclist',
              'athiëst',
              'cat person',
              'bicycle mechanic',
            ]}
          />{' '}
          from <code>Belgium</code> based in <code>Girona, Spain</code>.<br />I
          like to create top shelve websites tailored to your needs.
          <br />
          <Link to="/about">read more</Link>
        </p>
      </Container>
    </Section>
    <Section>
      <Container
        className={css`
          text-align: center;
          max-width: 600px;
          code {
            color: ${colors.orange};
          }
        `}
      >
        <img
          src={RienHoofd}
          className={css`
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
            display: block;
            margin: 0 auto 30px;
          `}
        />
        <h2
          className={css`
            display: inline-block;
            position: relative;
            &:hover code,
            code:hover {
              display: block;
            }
            span {
              font-size: 14px;
              display: block;
              position: absolute;
              top: -7px;
              right: -10px;
              opacity: 1;
              background: rgba(255, 255, 255, 0.75);
              color: ${colors.orange};
              border-radius: 50%;
              width: 15px;
              height: 15px;
              code {
                display: none;
                background: rgba(255, 255, 255, 0.75);
                position: absolute;
                right: 10px;
                bottom: 10px;
                padding: 0;
                line-height: 1.3;
                width: 250px;
                font-size: 12px;
              }
            }
          `}
        >
          Hi, my name is Rien
          <br />
          <span>
            ?<code>pronounced like 'Reen' in English</code>
          </span>
        </h2>
        <p>
          I'm a <code>web developer</code> and{' '}
          <TypedText
            items={['cyclist', 'athiëst', 'cat person', 'bicycle mechanic']}
          />{' '}
          from <code>Belgium</code> based in <code>Girona, Spain</code>.<br />I
          like to create top shelve websites tailored to your needs.
          <br />
          <Link to="/about">read more</Link>
        </p>
      </Container>
    </Section>
    {/* features */}
    <Section>
      <Container>
        <h2>How to spot a killer website in the wild?</h2>
        <p>rocket speed</p>
        <p>secure</p>
        <p>responsive</p>
        <p>SEO</p>
        <p>
          <GatsbyLink to="/how">why & how?</GatsbyLink>
          <br />

          <br />
          <GatsbyLink to="/packages">your options</GatsbyLink>
        </p>
      </Container>
    </Section>
    {/* work */}
    <Section>
      <Container>
        <h2>Some of my work</h2>

        <p>work work work</p>
      </Container>
    </Section>
    {/* follow me */}
    <Section>
      <Container>
        <h2>follow me:</h2>
        <p
          className={css`
            img {
              width: 20px;
              vertical-align: middle;
            }
          `}
        >
          <OutboundLink
            href="https://www.twitter.com/rien_coertjens/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={twitterIcon} />
          </OutboundLink>{' '}
          about my work
          <br />
          <OutboundLink
            href="https://www.instagram.com/rien_coertjens/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={instagramIcon} />
          </OutboundLink>{' '}
          what I'm up to
          <br />
          <OutboundLink
            href="https://www.strava.com/athletes/432879"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={stravaIcon} />
          </OutboundLink>{' '}
          where I'm riding
          <br />
          or <Link to="#contact">send me a message</Link>
        </p>
      </Container>
    </Section>

    {/* blog */}
    <Section>
      <Container>
        <h2>Blog</h2>
      </Container>
    </Section>
    {/* contact */}
    <Section>
      <Container>
        <h2>Contact</h2>
      </Container>
    </Section>
  </React.Fragment>
)

export default IndexPage
