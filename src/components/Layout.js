import React from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal, css } from 'react-emotion'
import { gradients, colors } from '../webhart-base/utils/style'
import Link from 'gatsby-link'
import PageTransition from '../webhart-base/PageTransition'

import 'typeface-lato'
import 'typeface-karla'
import { Container } from '../webhart-base'

// Global style setup
injectGlobal`
  box-sizing: border-size;
`

const MainWrapper = styled('main')``

const Layout = ({ children, location }) => (
  <div>
    <Helmet key="app-head">
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Helmet>

    <MainWrapper key="app-content">{children}</MainWrapper>
  </div>
)

export default Layout
