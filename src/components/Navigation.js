import React from 'react'
import styled, { css } from 'react-emotion'
import Link from 'gatsby-link'
import { Spin as Hamburger } from 'react-burgers'

import Logo from '../../static/images/logo.svg'

import { rhythm } from '../webhart-base/utils/style'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { scrolled: false }
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
    const { scrolled } = this.state

    return (
      <nav
        className={css`
          height: 40px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          position: fixed;
          width: 100%;
          z-index: 999999999;
          background: white;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          a {
            height: 100%;
            display: inline-block;
            vertical-align: middle;
            padding: 0 ${rhythm(3 / 4)};
            text-transform: uppercase;
            text-decoration: none;
            line-height: 40px;
            font-size: 16px;
            letter-spacing: 2px;
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
        <Link to="/aanbod" key="nav-aanbod">
          aanbod
        </Link>
        <Link
          to="/"
          key="nav-home"
          className={css`
            && {
              padding: 0;
              margin-top: -7px;
              transition: 0.3s;
              width: 300px;
              &:hover {
                background: white;
                width: 200px;
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
        <Link
          to="/contact"
          key="nav-contact"
          className={css`
            position: absolute;
            right: 0;
            background: black;
            color: white;
            &&&:hover {
              background: white;
              color: black;
            }
          `}
        >
          contact
        </Link>
      </nav>
    )
  }
}

export default Navigation
