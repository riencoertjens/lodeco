import React from 'react'
import { css } from 'react-emotion'
import { gradients } from '../webhart-base/utils/style'
import Logo from '../../static/images/logo.svg'
import { Container } from '../webhart-base'
import GatsbyImage from 'gatsby-image'
import { rhythm } from '../webhart-base/utils/typography'
const Hero = props => {
  const gradient = gradients[props.gradient] || gradients.lightBlue
  const { children, logoStyle, className } = props
  return (
    <section
      key="page-hero"
      className={css`
        text-shadow: 1px 1px 0 black;

        width: 100vw;
        height: 80vh;
        background: ${gradient};
        background-size: cover;
        background-position: center top;
        background-blend-mode: multiply;
        background-attachment: fixed;
        color: white;
        position: relative;
        padding: ${rhythm(2)} 0;
        h1,
        h2 {
          font-size: 45px;
        }
        ${className};
      `}
    >
      {props.image && (
        <GatsbyImage
          fluid={props.image}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            zIndex: 1,
            opacity: 1,
            mixBlendMode: 'multiply',
          }}
        />
      )}
      <Container
        width="wide"
        className={css`
          z-index: 10;
          display: flex;
          flex-flow: column;
          justify-content: space-around;
          align-items: flex-start;
          height: 100%;
          position: relative;
        `}
      >
        <img
          src={Logo}
          className={css`
            max-width: 450px;
            flex: 0 1 300px;
            align-self: flex-end;
            ${logoStyle && logoStyle};
          `}
        />
        {children}
      </Container>
    </section>
  )
}

export default Hero
