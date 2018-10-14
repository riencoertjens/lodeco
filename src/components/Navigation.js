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
            top: ${menuActive ? '0px' : '-120px'};
            transition: 0.2s;
            justify-content: center;
            background: white;
            ${mediaQueries({
              display: ['flex', 'none'],
            })} text-align: center;
            a {
              width: 100%;
              flex: 1 1 auto;
              height: 40px;
              line-height: 40px;
              text-transform: uppercase;
              text-decoration: none;
              font-size: 16px;
            }
            .Burger {
              position: absolute;
              bottom: 0;
              right: 0;
              margin: -15px 0;
            }
          `}
        >
          <Link
            to="/contact"
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
          </Link>
          <Link to="/aanbod" key="nav-aanbod">
            aanbod
          </Link>
          <Link to="/promoties" key="nav-promoties">
            promoties
          </Link>
          <Link
            to="/"
            key="nav-home"
            className={css`
              && {
                padding: 0;
                transition: 0.3s;
                flex: 0 1 auto;
                width: 300px;
                &:hover {
                  background: white;
                }
                img {
                  width: 100%;
                }
                ${scrolled && `width: 100px;`};
              }
            `}
          >
            <img src={Logo} />
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
              height: ['80px', '80px', '40px'],
              paddingTop: ['40px', '40px', '0'],
              display: ['none', 'flex'],
            })} box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            position: fixed;
            width: 100%;
            z-index: 999999999;
            background: white;
            align-items: flex-start;
            justify-content: center;
            a {
              height: 40px;
              display: inline-block;
              flex: 0 0 auto;
              width: 200px;
              vertical-align: middle;
              text-transform: uppercase;
              text-decoration: none;
              font-size: 16px;
              line-height: 40px;
              letter-spacing: 2px;
              text-align: center;
              transition: 0.3s;
              &:hover {
                color: white;
                background: black;
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
          <Link
            to="/contact"
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
          </Link>
          <Link to="/aanbod" key="nav-aanbod">
            aanbod
          </Link>
          <Link
            to="/"
            key="nav-home"
            className={css`
              && {
                padding: 0;
                transition: 0.3s;
                flex: 0 1 auto;
                width: 300px;
                &:hover {
                  background: white;
                }
                img {
                  width: 100%;
                }
                ${scrolled && `width: 100px;`};
              }
            `}
          >
            <img src={Logo} />
          </Link>
          <Link to="/promoties" key="nav-promoties">
            promoties
          </Link>
        </nav>
      </>
    )
  }
}

export default Navigation
