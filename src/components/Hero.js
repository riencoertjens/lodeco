import { css } from '@emotion/react'
import GatsbyImage from 'gatsby-image'
import React from 'react'
import { Container } from '../webhart-base'

import { mediaQueries, mediaQueryGT, rhythm } from '../webhart-base/utils/style'
const Hero = props => {
  const { children, className } = props
  return (
    <section
      key="page-hero"
      css={css`
        text-shadow: 1px 1px 0 white;
        width: 100vw;
        height: 100vh;
        min-height: 560px;
        padding-top: 75px;
        position: relative;
        ${mediaQueryGT['mobile']} {
          padding-top: 130px;
        }
        h1,
        h2 {
          position: relative;
          display: inline-block;
          text-align: 'center';
          ${mediaQueries({
            fontSize: ['30px', '48px'],
          })};
        }
        p {
          font-weight: 300;
          font-size: 24px;
          color: #bdbdbd;
          padding: 0 5px;
          ${mediaQueries({
            fontSize: ['20px', '24px'],
          })};
        }
        ${className};
      `}
    >
      <Container
        width="wide"
        css={css`
          padding: 0 0 ${rhythm(2)};
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
            css={css`
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
