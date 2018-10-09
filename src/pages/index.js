import React from 'react'
import Hero from 'components/Hero'
import { Container, Section, LinkButton } from 'webhart-base'
import { colors, gradients } from 'webhart-base/utils/style'
import { rhythm } from '../webhart-base/utils/typography'
import styled, { css } from 'react-emotion'
import TypedText from 'components/TypedText'
import Link from 'gatsby-link'

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import GatsbyLink from 'gatsby-link'
import Image from 'gatsby-image'

import { IoMdRocket as SpeedIcon } from 'react-icons/io'
import { IoMdPhonePortrait as ResponsiveIcon } from 'react-icons/io'
import { IoMdLock as SecureIcon } from 'react-icons/io'
import { IoMdSearch as SeoIcon } from 'react-icons/io'

import twitterIcon from '../../static/images/icons/twitter.svg'
import instagramIcon from '../../static/images/icons/instagram.svg'
import stravaIcon from '../../static/images/icons/strava.svg'
import Card from '../components/Card'
import { StaticQuery, graphql } from 'gatsby'

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
  padding: ${rhythm(1 / 2)};
  border-radius: 10px;
  color: ${colors.orange};
  text-shadow: 1px 1px 0 black;
`

const CardBackground = css`
  ${'' /* box-shadow: inset 0 0 10px black; */}
  background: ${gradients.darkBlue};
`

const FeatureCardIconProps = {
  size: 60,
  className: css`
    box-shadow: inset 0 0 2px black;
    margin: ${rhythm()};
    border-radius: 50%;
    padding: 10px;
    background: ${gradients.orange};
    color: ${colors.darkBlue};
  `,
}

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        RienHoofd: file(base: { eq: "RienHoofd.jpg" }) {
          childImageSharp {
            fixed(height: 150, width: 150, cropFocus: CENTER, quality: 75) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Hero gradient="darkBlue">
          <div>
            <h1>State of the art websites made by a human</h1>
            <span>
              (in plek van een groot bedrijf, snaptge? ma daar moet ik nog wa
              over nadenken)
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
            <Image
              style={{ display: 'block' }}
              fixed={data.RienHoofd.childImageSharp.fixed}
              className={css`
                border-radius: 50%;
                width: 150px;
                height: 150px;
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
              from <code>Belgium</code> based in <code>Girona, Spain</code>.
              <br />I like to create top shelve websites tailored to your needs.
              <br />
              <LinkButton to="/about" orange="true">
                more about me
              </LinkButton>
              <LinkButton to="/contact" dark="true">
                work with me
              </LinkButton>
            </p>
          </Container>
        </Section>
        {/* features */}
        <Section>
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
                  two seconds to get people to stay
                </Card>
                <Card
                  className={CardStyle}
                  background={CardBackground}
                  title="responsive"
                  icon={<ResponsiveIcon {...FeatureCardIconProps} />}
                  backside="Responsive development goes beyond looks. With more than half of the online population using a mobile, websites need to adapt to all sorts of devices. "
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
                  backside="Speed, responsivenes, and security are key in search engine optimisation. Getting your website to the top of the stack is the step one in getting across that a good impression."
                >
                  get to the front to of the line
                </Card>
              </div>
            </Cards>
            <p>
              <LinkButton to="/features" orange="true">
                learn more
              </LinkButton>
              <LinkButton to="/packages" blue="true">
                get started
              </LinkButton>
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
    )}
  />
)
