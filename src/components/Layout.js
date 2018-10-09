import React from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal, css } from 'react-emotion'
import PageTransition from '../webhart-base/PageTransition'

import 'typeface-poppins'
import 'typeface-roboto-mono'

import Nav from './Navigation'
import { colors, gradients } from '../webhart-base/utils/style'

// Global style setup
injectGlobal`
  box-sizing: border-size;
  *::selection{
    color: ${colors.orange};
    background: ${colors.darkBlue};
  }
  a{
    text-decoration-skip: objects;
    color: inherit;
  }
  code {
    color: ${colors.orange};
    background: rgba(255, 255, 255, 0.25);
  }
  i {
    color: ${colors.orange};
  }
`

const AppWrapper = styled('div')``

const Layout = ({ element, props }) => (
  <React.Fragment>
    <Helmet key="app-head">
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Helmet>

    <React.Fragment key="app-content">
      {/* <Nav /> */}
      <div>
        <AppWrapper {...props}>{element}</AppWrapper>
      </div>
    </React.Fragment>
  </React.Fragment>
)

export default Layout
