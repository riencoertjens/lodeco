import React from 'react'
import { css } from 'react-emotion'
import LogoSVG from '../../static/images/Logo'
import { Container } from '../webhart-base'
import GatsbyImage from 'gatsby-image'
import { rhythm } from '../webhart-base/utils/style'
const Hero = props => {
  const { children, className } = props
  return (
    <section
      key="page-hero"
      className={css`
        text-shadow: 1px 1px 0 white;
        width: 100vw;
        height: calc(100vh);
        padding-top: 40px;
        position: relative;
        h1,
        h2 {
          margin: ${rhythm()};
          margin-top: 170px;
          font-size: 45px;
          /* width: 100%; */
          text-align: 'center';
        }
        p {
          color: #8b8b8b;
          font-size: 18px;
        }
        ${className};
      `}
    >
      <Container
        width="wide"
        className={css`
          padding: ${rhythm(2)} 0;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          position: relative;
          text-align: center;
        `}
      >
        {children}
        {props.image && (
          <div
            className={css`
              position: absolute;
              bottom: 0;
              left: 0;
              height: 100%;
              width: 100%;
              display: flex;
              z-index: -1;
              align-items: flex-end;
              justify-content: center;
              overflow: hidden;
            `}
          >
            <GatsbyImage
              fixed={props.image}
              style={{
                width: '1100px',
                height: '100%',
                minHeight: '75vw',
                minWidth: '600px',
              }}
              imgStyle={{
                width: '100%',
                objectFit: 'contain',
                objectPosition: '0 100%',
              }}
            />
          </div>
        )}
      </Container>
    </section>
  )
}

export default Hero
