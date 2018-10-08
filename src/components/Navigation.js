import React from 'react'
import styled, { css } from 'react-emotion'
import Link from 'gatsby-link'
import { Spin as Hamburger } from 'react-burgers'

const CircleDiameter = 500
const baseAngle = 0
const LinkSpread = CircleDiameter / 3 / 2 - 10
const NavStyle = props => css`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 99999;
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
    font-weight: 400;
    letter-spacing: 1px;
    width: ${CircleDiameter / 3}px;
    top: -15px;
    left: 9px;
    text-align: right;
    transform-origin: 0 50%;
    padding: 10px;
    opacity: 1;
    transition: 0.3s;
    transform: rotate(${baseAngle - 30}deg) translateX(${LinkSpread}px);
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
      transform: rotate(${baseAngle}deg) translateX(${LinkSpread}px);
      transition-delay: 0.4s;
      :nth-child(2) {
        transform: rotate(${baseAngle + 30}deg) translateX(${LinkSpread}px);
        transition-delay: 0.3s;
      }
      :nth-child(3) {
        transform: rotate(${baseAngle + 60}deg) translateX(${LinkSpread}px);
        transition-delay: 0.2s;
      }
      :nth-child(4) {
        transform: rotate(${baseAngle + 90}deg) translateX(${LinkSpread}px);
        transition-delay: 0.1s;
      }
    `};
  }
  button {
    position: fixed;
    top: 5px;
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

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { menuActive: false }
  }
  render() {
    const { menuActive } = this.state
    return (
      <nav active={menuActive}>
        <Link to="/">home</Link>
        <Link to="/about/">about</Link>
        <Link to="/work/">work</Link>
        <Link to="/contact/">contact</Link>
        <Hamburger
          active={menuActive}
          onClick={
            () => this.setState({ menuActive: !menuActive })
            // console.log('test')
          }
          width={25}
          lineHeight={2}
          lineSpacing={5}
          color="white"
          borderRadius={0}
          padding="20px"
        />
      </nav>
    )
  }
}

export default Navigation
