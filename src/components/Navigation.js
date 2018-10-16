import React from 'react'
import styled, { css } from 'react-emotion'
import Link from 'gatsby-link'
import { Spin as Hamburger } from 'react-burgers'

import Logo from '../../static/images/logo.svg'

import { rhythm, mediaQueries, mediaQueryGT } from '../webhart-base/utils/style'

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
      <>
        <nav
          className={css`
            flex-wrap: wrap;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            z-index: 9999999;
            position: fixed;
            width: 100%;
            top: ${menuActive ? '0px' : `-${2 * 36}px`};
            transition: 0.2s;
            justify-content: center;
            background: white;
            ${mediaQueries({
              display: ['flex', 'none'],
            })} text-align: center;
            &&& a {
              width: 100%;
              flex: 1 1 auto;
              height: 36px;
              line-height: 36px;
              text-transform: uppercase;
              text-decoration: none;
              font-weight: 500;
              font-size: 12px;
              letter-spacing: 0.3em;
            }
            .Burger {
              position: absolute;
              bottom: 0;
              right: 0;
              margin: -15px 0;
            }
          `}
        >
          {/* <Link
            to="/#contact"
            key="nav-contact"
            className={css`
              background: black;
              color: white;
              &&:hover {
                opacity: 0.5;
              }
            `}
          >
            contact
          </Link> */}
          <Link to="/#aanbod" key="nav-aanbod">
            aanbod
          </Link>
          <Link to="/#promoties" key="nav-promoties">
            promoties
          </Link>
          <Link
            to="/"
            key="nav-home"
            aria-label="home"
            className={css`
              && {
                padding: 0;
                transition: 0.3s;
                flex: 0 1 auto;
                max-width: 200px;
                &:hover {
                  background: white;
                }
                img {
                  width: 100%;
                }
                ${scrolled && `max-width: 100px;`};
              }
            `}
          >
            <img alt="logo" src={Logo} />
          </Link>
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
        <nav
          className={css`
            ${mediaQueries({
              height: '36px',
              paddingTop: 0,
              display: ['none', 'flex'],
            })} box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            position: fixed;
            width: 100%;
            z-index: 999999999;
            background: white;
            align-items: flex-start;
            justify-content: center;
            a {
              display: inline-block;
              flex: 0 0 auto;
              font-size: 12px;
              font-weight: 500;
              height: 36px;
              letter-spacing: 0.3em;
              line-height: 36px;
              text-align: center;
              text-decoration: none;
              text-transform: uppercase;
              transition: 0.3s;
              vertical-align: middle;
              width: 200px;
              color: grey;
              &:hover {
                color: black;
              }
            }
            &:before {
              content: '';
            }
            div {
              display: flex;
              align-items: flex-start;
            }
          `}
        >
          {/* <Link
            to="/#contact"
            key="nav-contact"
            className={css`
              position: absolute;
              right: 0;
              top: 0;
              background: black;
              color: white;
              &&:hover {
                background: white;
                color: black;
              }
              && {
                margin: 0;
                ${mediaQueries({
                  width: ['100%', '100%', '120px'],
                  height: ['50%', '50%', '100%'],
                })};
              }
            `}
          >
            contact
          </Link> */}
          <Link to="/#aanbod" key="nav-aanbod">
            aanbod
          </Link>
          <Link
            to="/"
            key="nav-home"
            aria-label="home"
            className={css`
              && {
                padding: 0;
                transition: 0.3s;
                flex: 0 1 auto;
                width: 300px;
                margin: 0 -20px;
                &:hover {
                  background: white;
                }
                img {
                  width: 100%;
                }
                ${scrolled && `width: 100px;margin: 0 0;`};
              }
            `}
          >
            <img alt="logo" src={Logo} />
          </Link>
          <Link to="/#promoties" key="nav-promoties">
            promoties
          </Link>
        </nav>
      </>
    )
  }
}

export default Navigation
