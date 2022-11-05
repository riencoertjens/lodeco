import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'gatsby-link'
import React from 'react'
import { Spin as Hamburger } from 'react-burgers'

import Logo from '../../static/images/logo.svg'

import { mediaQueryGT } from '../webhart-base/utils/style'

const menuHeight = 36

const StyledLink = styled(Link)`
  background: white;
  flex: 0 1 auto;
  height: ${menuHeight}px;
  line-height: ${menuHeight}px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.3em;
  padding: 0 20px;
  &:hover {
    color: #aaa;
  }
  ${mediaQueryGT['tablet']} {
    width: 160px;
  }
`

const StyledLogoLink = styled(Link)`
  padding: 0;
  position: absolute;
  align-self: center;
  ${mediaQueryGT['tablet']} {
    align-self: flex-start;
    position: relative;
    top: 0;
    z-index: 5;
  }
  z-index: -5;
  top: 100%;
  max-width: 100px;
  transition: 0.2s;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  img {
    width: 100%;
  }
  ${mediaQueryGT['tablet']} {
    max-width: 200px;
  }
`
const scrolledLogoStyle = css`
  && {
    max-width: 100px;
  }
`

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { scrolled: false, menuActive: false }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop
    if (scrollPosition > 40 && this.state.scrolled == false) {
      this.setState({
        scrolled: true,
      })
    }
    if (scrollPosition < 40 && this.state.scrolled == true) {
      this.setState({
        scrolled: false,
      })
    }
  }

  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { scrolled, menuActive } = this.state

    return (
      <nav
        css={css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: stretch;
          background: white;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          justify-content: center;
          position: fixed;
          text-align: center;
          top: ${menuActive ? '0px' : `-${3 * menuHeight}px`};
          transition: 0.2s;
          width: 100%;
          z-index: 9999999;
          .Burger {
            position: fixed;
            top: 0;
            right: 0;
            margin: -5px 0;
          }
          ${mediaQueryGT['tablet']} {
            top: 0;
            height: ${menuHeight}px;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;

            .Burger {
              display: none;
            }
          }
        `}
      >
        <StyledLink to="/#aanbod" key="nav-aanbod">
          aanbod
        </StyledLink>
        <StyledLogoLink
          to="/"
          key="nav-home"
          aria-label="home"
          css={css`
            ${scrolled && scrolledLogoStyle};
          `}
        >
          <img alt="logo" src={Logo} />
        </StyledLogoLink>
        <StyledLink to="/#promoties" key="nav-promoties">
          promoties
        </StyledLink>
        <StyledLink
          to="/#contact"
          key="nav-contact"
          css={css`
            color: white;
            background: black;
            order: -2;
            ${mediaQueryGT['tablet']} {
              position: absolute;
              top: 0;
              right: 0;
            }
          `}
        >
          contact
        </StyledLink>
        <Hamburger
          active={menuActive}
          onClick={() => this.setState({ menuActive: !menuActive })}
          width={25}
          lineHeight={2}
          lineSpacing={5}
          color={menuActive ? 'white' : 'black'}
          borderRadius={0}
          padding="15px"
        />
      </nav>
    )
  }
}

export default Navigation
