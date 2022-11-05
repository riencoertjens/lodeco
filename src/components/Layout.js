import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import Helmet from 'react-helmet'

import SEO from '../webhart-base/SEO'

import 'typeface-roboto'
import 'typeface-roboto-slab'

import { colors } from '../webhart-base/utils/style'
import Nav from './Navigation'

const AppWrapper = styled('main')``

const Layout = ({ element, props }) => (
  <React.Fragment>
    <Global
      styles={css`
        *::selection {
          color: white;
          background: ${colors.primaryBG};
          text-shadow: 1px 1px 0 black;
        }
        h1,
        h2 {
          position: relative;
          &:after {
            content: '';
            width: 200px;
            height: 1px;
            background-image: linear-gradient(
              to right,
              black 33%,
              rgba(255, 255, 255, 0) 0%
            );
            background-position: bottom;
            background-size: 7px 1px;
            background-repeat: repeat-x;
            position: absolute;
            bottom: -0.75rem;
            right: 50%;
            margin-right: -100px;
          }
        }
        a {
          text-decoration-skip: objects;
          color: inherit;
        }
      `}
    />
    <Helmet key="app-head">
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Helmet>
    <SEO />
    <React.Fragment key="app-content">
      <Nav />
      <AppWrapper {...props}>{element}</AppWrapper>
    </React.Fragment>
  </React.Fragment>
)

export default Layout
