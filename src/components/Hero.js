import React from 'react'
import { css } from 'react-emotion'
import { gradients } from '../webhart-base/utils/style'
import Logo from '../../static/images/logo.svg'
import LogoSVG from '../../static/images/Logo'
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
        height: 100vh;
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
          margin: ${rhythm()} 0;
          font-size: 45px;
          width: 100%;
          text-align: ${props.titleAlign ? props.titleAlign : 'center'};
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
          justify-content: space-between;
          align-items: flex-start;
          height: 100%;
          position: relative;
        `}
      >
        <LogoSVG
          className={css`
            filter: drop-shadow(0 0 15px black);
            width: 450px;
            max-width: 100%;
            flex: 0 1 300px;
            align-self: ${props.logoAlign ? props.logoAlign : 'center'};
            ${logoStyle && logoStyle};
          `}
        />

        {children}
      </Container>
    </section>
  )
}

export default Hero
