import React, { Component } from 'react'
import styled, { css } from 'react-emotion'
import { gradients, colors } from '../webhart-base/utils/style'
import { rhythm } from '../webhart-base/utils/typography'

const TabsWrapper = styled.div`
  position: relative;
`

const TabButtons = styled.div`
  display: flex;
  position: relative;
  z-index: 99;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  border-radius: 300px;
  overflow: hidden;
  padding: 4px;
  box-shadow: inset 0 0 8px black;
  background: ${gradients.darkBlue};
`

const TabButton = styled.button`
  flex: 0 1 200px;
  background: none;
  cursor: pointer;
  border-radius: 300px;
  outline: 0;
  font-weight: 200;
  border: none;
  color: ${colors.orange};
  ${props =>
    props.active &&
    `
    color: ${colors.darkBlue};
    background: ${gradients.orange};
    ${'' /* border: 1px solid #fff; */}
    box-shadow: 0 0 7px -1px black, inset 0 0 2px black;
  `};
`

const TabContent = styled.div`
  background: #eee;
  position: relative;
  z-index: 999;
  padding: ${rhythm(3 / 4)};
  margin: ${rhythm(3 / 4)};
  border-radius: 10px;
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
      <TabsWrapper>
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
        <TabContent>{childrenWithProps}</TabContent>
      </TabsWrapper>
    )
  }
}

const TabWrapper = styled.div`
  display: none;
  ${props =>
    props.active &&
    `
    display: block;
  `};
`
export const Tab = ({ children, active }) => (
  <TabWrapper active={active}>{children}</TabWrapper>
)

export default Tabs
