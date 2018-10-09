import React from 'react'
import Hero from 'components/Hero'
import { Container, Section } from 'webhart-base'
import { rhythm } from '../webhart-base/utils/typography'
import styled, { css } from 'react-emotion'
import TypedText from 'components/TypedText'
import Link from 'gatsby-link'

import { colors, gradients } from 'webhart-base/utils/style'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import GatsbyLink from 'gatsby-link'

import { IoMdRocket as SpeedIcon } from 'react-icons/io'
import { IoMdPhonePortrait as ResponsiveIcon } from 'react-icons/io'
import { IoMdLock as SecureIcon } from 'react-icons/io'
import { IoMdSearch as SeoIcon } from 'react-icons/io'

import twitterIcon from '../../static/images/icons/twitter.svg'
import instagramIcon from '../../static/images/icons/instagram.svg'
import stravaIcon from '../../static/images/icons/strava.svg'
import RienHoofd from '../../static/images/RienHoofd.jpg'
import Card from '../components/Card'

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex: 1 1 400px;
  }
`
const CardStyle = css`
  flex: 1 1 210px;
  ${'' /* height: 200px; */}
  padding: ${rhythm(1 / 2)};
  ${'' /* margin: ${rhythm(1 / 4)}; */}
  border-radius: 10px;
  color: ${colors.orange};
  text-shadow: 1px 1px 0 black;
`

const CardBackground = css`
  box-shadow: inset 0 0 10px black;
  background: ${gradients.darkBlue};
`

const FeatureCardIconProps = {
  size: 60,
  className: css`
    box-shadow: 0 0 10px black, inset 0 0 2px black;
    margin: 10px;
    border-radius: 50%;
    padding: 10px;
    background: ${gradients.orange};
    color: ${colors.darkBlue};
  `,
}

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
        <p>💻 - 🚴🏻‍ - 🛠</p>
        <p>
          I'm a{' '}
          <TypedText
            items={[
              'web developer 💻',
              'cyclist 🚴🏻‍',
              // 'cat person 😻',
              'bicycle mechanic 🛠',
            ]}
          />{' '}
          from <code>Belgium</code> based in <code>Girona, Spain</code>.<br />I
          like to create top shelve websites tailored to your needs.
          <br />
          <Link to="/about">more about me</Link>
        </p>
      </Container>
    </Section>
    {/* features */}
    <Section>
      {/* 
        
        SecureIcon
        SeoIcon */}
      <Container>
        <h2>How to spot a killer website in the wild?</h2>
        <code>click cards for extra info</code>
        <Cards>
          <div>
            <Card
              className={CardStyle}
              background={CardBackground}
              title="rocket speed"
              icon={<SpeedIcon {...FeatureCardIconProps} />}
              backside="We live in a world of distraction. There’s nothing like the rush of a new notification. You want to grab your target’s attention before the next notification gets it."
            >
              two seconds to get to stay
            </Card>
            <Card
              className={CardStyle}
              background={CardBackground}
              title="responsive"
              icon={<ResponsiveIcon {...FeatureCardIconProps} />}
              backside="Responsive development goes beyond looks. With more than half of the population on the internet on a mobile websites need to adapt to all sorts of devices. "
            >
              the world lives in our pockets.
            </Card>
          </div>
          <div>
            <Card
              className={CardStyle}
              background={CardBackground}
              title="secure"
              icon={<SecureIcon {...FeatureCardIconProps} />}
              backside="Protect your audience, yourself, and your content. Webhart websites are created and deployed with security in mind. Reliable fallbacks are available in worst case scenario’s."
            >
              guarantee your integrety
            </Card>
            <Card
              className={CardStyle}
              background={CardBackground}
              title="SEO"
              icon={<SeoIcon {...FeatureCardIconProps} />}
              backside="Speed, responsivenes, and security are key in search engine optimisation. Getting your website ends up at the top of the stack ensures is the first step in getting across that first impression."
            >
              get to the front to of the line
            </Card>
          </div>
        </Cards>
        <p>
          <GatsbyLink to="/how">why & how?</GatsbyLink>{' '}
          <GatsbyLink to="/packages">get started</GatsbyLink>
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
