import React from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal, css } from 'react-emotion'
import PageTransition from '../webhart-base/PageTransition'

import Nav from './Navigation'
import { colors } from '../webhart-base/utils/style'

// Global style setup
injectGlobal`
  box-sizing: border-size;
  a{
    text-decoration-skip: objects;
    color: inherit;
  }
  code {
    color: ${colors.orange};
    background: rgba(255, 255, 255, 0.25);
  }
`

const AppWrapper = styled('div')``

const Layout = ({ element, props }) => (
  <React.Fragment>
    <Helmet key="app-head">
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Helmet>

    <React.Fragment key="app-content">
      <Nav />
      <div>
        <AppWrapper {...props}>{element}</AppWrapper>
      </div>
    </React.Fragment>
  </React.Fragment>
)

export default Layout
