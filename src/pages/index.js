import React from 'react'
import Layout from '../components/Layout'
import Link from 'gatsby-link'
import { css } from 'react-emotion'

import Hero from '../components/Hero'
import HolyCard from '../components/HolyCard'
import { Container } from '../webhart-base'
import { color } from '../webhart-base/utils/style'

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
    margin: 0 10px;
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
    const { location } = this.props
    const activeCard = this.state.activeCard
    return (
      <Layout key={`IndexPage-layout`} location={location}>
        <Hero gradient="ligthBlue">
          <h1>No better way to impress than with a tailor made suit!</h1>
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
              /* flex-wrap: wrap; */
              justify-content: space-between;
              text-align: center;
              p {
                color: ${color.greyText};
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
                Nowadays everything is designed to grab your attention. Speed is
                key to get an impression across in the first place, no one likes
                to wait.
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
      </Layout>
    )
  }
}
export default IndexPage
