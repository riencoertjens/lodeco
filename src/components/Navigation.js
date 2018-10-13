import React from 'react'
import styled, { css } from 'react-emotion'
import Link from 'gatsby-link'
import { Spin as Hamburger } from 'react-burgers'

import Headroom from 'react-headroom'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { menuActive: false }
  }
  render() {
    const { menuActive } = true //this.state
    return (
      <Headroom>
      <nav
        active={menuActive}
        className={css`
          a {
            margin: 10px;
          }
        `}
      >
        <Link to="/" key="nav-home">
          home
        </Link>
        <Hamburger
          active={menuActive}
          onClick={() => this.setState({ menuActive: !menuActive })}
          width={25}
          lineHeight={2}
          lineSpacing={5}
          color="white"
          borderRadius={0}
          padding="20px"
        />
      </nav>
      </Headroom>
    )
  }
}

export default Navigation
