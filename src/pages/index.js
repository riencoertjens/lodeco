import React from 'react'
import Layout from 'components/Layout'
import Link from 'gatsby-link'
import { css } from 'react-emotion'
import { rhythm } from 'webhart-base/utils/typography'
import Hero from 'components/Hero'
import HolyCard from 'components/HolyCard'
import { Container, ButtonStyle, Button } from 'webhart-base'
import { colors, gradients } from 'webhart-base/utils/style'

import { Fade } from 'webhart-base/utils/poses'

import SEOIcon from '../../static/images/icons/SEO'
import ResponsiveIcon from '../../static/images/icons/Mobile'
import SecureIcon from '../../static/images/icons/Secure'
import RocketIcon from '../../static/images/icons/Rocket'

const cardProps = {
  width: '270px',
  height: '350px',
  circleSize: '75px',
  circleTop: '50px',
  extraStyle: css`
    margin: 0 10px 50px;
    flex: 1 1 270px;
    position: relative;
  `,
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeCard: false }
  }

  render() {
    const activeCard = this.state.activeCard
    return (
      <>
        <Hero gradient="ligthBlue">
          <div
            className={css`
              display: inline;
              align-self: flex-end;
            `}
          >
            <Button>contact</Button>
            <Button color={colors.white} background={gradients.orange}>
              contact
            </Button>
          </div>
          <h1
            className={css`
              font-size: 40px;
              flex: 0 1 35px;
            `}
          >
            No better way to impress than with a tailor made suit!
          </h1>
        </Hero>
        <section
          className={css`
            margin-top: -125px;
          `}
        >
          <Container
            width="wide"
            className={css`
              display: flex;
              justify-content: space-between;
              text-align: center;
              p {
                color: ${colors.greyText};
              }
            `}
          >
            <HolyCard
              onClick={() => this.setState({ activeCard: 'speed' })}
              active={activeCard == 'speed'}
              {...cardProps}
              icon={<RocketIcon />}
            >
              <h2>speed</h2>
              <p>
                We live in a world of distraction. Nothing like the rush of a
                new notification. Grab your target’s attention before it’s lost
                to the cloud.
              </p>
            </HolyCard>
            <HolyCard
              onClick={() => this.setState({ activeCard: 'responsive' })}
              active={activeCard == 'responsive'}
              {...cardProps}
              icon={<ResponsiveIcon />}
            >
              <h2>responsive</h2>
              <p>
                Half the people online are mobile users on slower mobile
                networks. Creating a good browsing experience for all users is
                vital.
              </p>
            </HolyCard>
            <HolyCard
              onClick={() => this.setState({ activeCard: 'secure' })}
              active={activeCard == 'secure'}
              {...cardProps}
              icon={<SecureIcon />}
            >
              <h2>secure</h2>
              <p>
                Online security is a global issue. Protecting your audience and
                yourself from harm should be a major priority.
              </p>
            </HolyCard>
            <HolyCard
              onClick={() => this.setState({ activeCard: 'seo' })}
              active={activeCard == 'seo'}
              {...cardProps}
              icon={<SEOIcon />}
            >
              <h2>seo</h2>
              <p>
                Speed, responsiveness and security are key ingredients in search
                engine optimisation and getting your website to the top of the
                stack.
              </p>
            </HolyCard>
          </Container>
        </section>
        <section>
          <Container>
            <div
              className={css`
                border-top: 1px solid black;
                box-shadow: 0 -5px 5px -5px black;
                padding: ${rhythm(1 / 2)};
              `}
            >
              <p>
                Velit qui ad adipisicing ut. Pariatur culpa pariatur ipsum est
                fugiat eu reprehenderit Lorem aliqua occaecat. Voluptate qui
                esse quis nostrud est. Incididunt irure sunt reprehenderit duis
                irure do pariatur. Esse mollit ut deserunt nisi id proident id.
                Labore eu consectetur qui sit magna ullamco esse voluptate ea
                enim aliquip ad excepteur.
              </p>
            </div>
          </Container>
        </section>
      </>
    )
  }
}

IndexPage.defaultProps = {
  transitionComponent: Fade,
}

export default IndexPage
