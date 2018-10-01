import React from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'react-emotion'
import { reset } from '../webhart-base/utils/style'
import Link from 'gatsby-link'
import PageTransition from '../webhart-base/PageTransition'

import 'typeface-lato'
import 'typeface-karla'

// Global style setup
// reset()
injectGlobal`box-sizing: border-size;`

const MainWrapper = styled('main')``

export default ({ children, location }) => [
  <Helmet key="app-head">
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Helmet>,
  <MainWrapper key="app-content">
    <PageTransition location={location}>{children}</PageTransition>
  </MainWrapper>,
  <nav>
    <Link key="nav-home" to="/">
      home
    </Link>
    <Link key="nav-about" to="/about">
      about
    </Link>
    <Link key="nav-work" to="/work">
      work
    </Link>
  </nav>,
]
