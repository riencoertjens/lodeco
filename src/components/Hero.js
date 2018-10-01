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
        color: white;
        position: relative;
        padding: 15px 0 150px;
        ${props.className};
      `}
    >
      <Container
        width="wide"
        className={css`
          display: flex;
          flex-flow: column;
          justify-content: space-evenly;
          height: 100%;
        `}
      >
        <img
          src={Logo}
          className={css`
            max-height: calc(90vh - 150px);
            max-width: 80vw;
            object-fit: contain;
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
