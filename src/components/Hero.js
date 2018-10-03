import React from 'react'
import { css } from 'react-emotion'
import { gradients } from '../webhart-base/utils/style'
import Logo from '../../static/images/logo.svg'
import { Container } from '../webhart-base'

const Hero = props => {
  const gradient = gradients[props.gradient] || gradients.darkBlue
  const { children, logoStyle, className } = props
  return (
    <section
      key="page-hero"
      className={css`
        width: 100vw;
        height: calc(100vh - 50px);
        background: ${gradient};
        background-attachment: fixed;
        color: white;
        position: relative;
        padding-top: 20px;
        padding-bottom: 130px;
        ${className};
      `}
    >
      <Container
        width="wide"
        className={css`
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
