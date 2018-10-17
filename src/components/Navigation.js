import React from 'react'
import styled, { css } from 'react-emotion'
import Link from 'gatsby-link'
import { Spin as Hamburger } from 'react-burgers'

import Logo from '../../static/images/logo.svg'

import { mediaQueryGT } from '../webhart-base/utils/style'

const StyledLink = styled(Link)`
  background: white;
  flex: 0 1 auto;
  height: 36px;
  line-height: 36px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.3em;
  padding: 0 20px;
  &:hover {
    color: #aaa;
  }
  ${mediaQueryGT['mobile']} {
    width: 160px;
  }
`

const StyledLogoLink = styled(Link)`
  padding: 0;
  position: absolute;
  align-self: center;
  ${mediaQueryGT['mobile']} {
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
  ${mediaQueryGT['mobile']} {
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
        className={css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: stretch;
          background: white;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          justify-content: center;
          position: fixed;
          text-align: center;
          top: ${menuActive ? '0px' : `-${2 * 36}px`};
          transition: 0.2s;
          width: 100%;
          z-index: 9999999;
          .Burger {
            position: fixed;
            top: 0;
            right: 0;
            margin: -5px 0;
          }
          ${mediaQueryGT['mobile']} {
            top: 0;
            height: 36px;
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
          className={css`
            ${scrolled && scrolledLogoStyle};
          `}
        >
          <img alt="logo" src={Logo} />
        </StyledLogoLink>
        <StyledLink to="/#promoties" key="nav-promoties">
          promoties
        </StyledLink>
        <Hamburger
          active={menuActive}
          onClick={() => this.setState({ menuActive: !menuActive })}
          width={25}
          lineHeight={2}
          lineSpacing={5}
          color="black"
          borderRadius={0}
          padding="20px"
        />
      </nav>
    )
  }
}

export default Navigation
