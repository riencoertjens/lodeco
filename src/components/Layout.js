import React from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal, css } from 'react-emotion'
import { gradients, colors } from '../webhart-base/utils/style'
import Link from 'gatsby-link'
import PageTransition from '../webhart-base/PageTransition'

import 'typeface-lato'
import 'typeface-karla'
import { Container } from '../webhart-base'
import { Vortex as Hamburger } from 'react-burgers'

// Global style setup
injectGlobal`
  box-sizing: border-size;
`
const CircleDiameter = 600
const baseAngle = 0
const NavStyle = props => css`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 10000000;
  mix-blend-mode: multiply;
  &:after {
    display: block;
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.85);
    z-index: -10;
    width: 45px;
    height: 45px;
    transition: 0.1s;
    transition-delay: 0.5s;
    ${props.active &&
      `
      transition-delay: 0s;
      width: ${CircleDiameter}px;
      height: ${CircleDiameter}px;
      transform: translate(-${CircleDiameter / 2}px, -${CircleDiameter / 2}px)
    `};
  }

  ${NavItem} {
    display: block;
    position: absolute;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 100;
    width: ${CircleDiameter / 4}px;
    top: -15px;
    left: 0;
    text-align: center;
    transform-origin: 0 50%;
    padding: 10px;
    opacity: 1;
    transition: 0.3s;
    transform: rotate(${baseAngle - 15}deg) translateX(${CircleDiameter / 4}px);
    transition-delay: 0s;
    :nth-child(2) {
      transition-delay: 0.1s;
    }
    :nth-child(3) {
      transition-delay: 0.2s;
    }
    :nth-child(4) {
      transition-delay: 0.3s;
    }
    ${props.active &&
      `
      opacity: 1;
      transform: rotate(${baseAngle}deg) translateX(${CircleDiameter / 4}px);
      transition-delay: 0.4s;
      :nth-child(2) {
        transform: rotate(${baseAngle + 30}deg) translateX(${CircleDiameter /
        4}px);
        transition-delay: 0.3s;
      }
      :nth-child(3) {
        transform: rotate(${baseAngle + 60}deg) translateX(${CircleDiameter /
        4}px);
        transition-delay: 0.2s;
      }
      :nth-child(4) {
        transform: rotate(${baseAngle + 90}deg) translateX(${CircleDiameter /
        4}px);
        transition-delay: 0.1s;
      }
    `};
  }
  button {
    position: fixed;
    top: 7px;
    left: 5px;
    z-index: 99999;
  }
`

const Nav = styled('nav')`
  ${NavStyle};
`
const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
`

const MainWrapper = styled('main')``

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { menuActive: false }
  }
  render() {
    return (
      <div>
        <Helmet key="app-head">
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Helmet>

        <MainWrapper key="app-content">
          <Nav active={this.state.menuActive}>
            <NavItem to="/">home</NavItem>
            <NavItem to="/about/">about</NavItem>
            <NavItem to="/work/">work</NavItem>
            <NavItem to="/contact/">contact</NavItem>
            <Hamburger
              active={this.state.menuActive}
              onClick={() =>
                this.setState({ menuActive: !this.state.menuActive })
              }
              width={25}
              lineHeight={2}
              lineSpacing={5}
              color="white"
              borderRadius={0}
              padding="20px"
            />
          </Nav>
          {this.props.children}
        </MainWrapper>
      </div>
    )
  }
}

export default Layout
