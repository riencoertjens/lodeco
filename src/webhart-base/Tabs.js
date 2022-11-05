import styled from '@emotion/styled'
import React, { Component } from 'react'

import { Container } from '.'
import { rhythm } from '../webhart-base/utils/style'

const TabsWrapper = styled.div`
  position: relative;
  padding: ${rhythm(1)} 0;
  ${props => props.className};
  text-align: center;
`

const TabContent = styled.div`
  background: #eee;
  position: relative;
  z-index: 999;
  padding: ${rhythm(1)} 0;
  margin: ${rhythm(1)} 0;
  *:last-child {
    margin-bottom: 0;
  }
`

class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = { currentTab: 0 }
  }
  render() {
    const { children } = this.props
    const { currentTab } = this.state
    const childrenWithProps = React.Children.map(children, (tab, index) =>
      React.cloneElement(tab, {
        active: index == currentTab,
        key: index,
      })
    )
    return (
      <TabsWrapper className={this.props.className}>
        <TabButtons>
          {childrenWithProps.map((element, i) => (
            <TabButton
              key={`button-${element.key}`}
              onClick={() => this.setState({ currentTab: i })}
              active={i == currentTab}
            >
              {element.props.name}
            </TabButton>
          ))}
        </TabButtons>
        <TabContent>
          <Container>{childrenWithProps}</Container>
        </TabContent>
      </TabsWrapper>
    )
  }
}

export const Tab = styled(Container)`
  display: none;
  ${props =>
    props.active &&
    `
    display: block;
  `};
`
// const Tab = ({ children, active }) => (
//   <TabWrapper active={active}>{children}</TabWrapper>
// )

export default Tabs
