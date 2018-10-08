import React, { Component } from 'react'
import styled from 'react-emotion'
import { colors, animations } from '../webhart-base/utils/style'

const Wrapper = styled('code')`
  border-right: 7px solid ${colors.orange};
  animation: ${animations.blinkCaret} 0.75s step-end infinite;
  margin-right: 0;
`

class TypedText extends Component {
  constructor(props) {
    super(props)
    this.state = { currentItemIndex: 0, currentItemText: '', deleting: false }
    this.timeOut = null
  }

  componentDidMount() {
    this.type()
  }

  type() {
    const { currentItemText } = this.state
    let { deleting, currentItemIndex } = this.state
    const { items } = this.props
    let currentItem = items[currentItemIndex]
    let newCurrentItemText
    let delay = 100
    if (deleting) {
      newCurrentItemText = currentItem.substr(0, currentItemText.length - 1)
      delay = 50
    } else {
      newCurrentItemText = currentItem.substr(0, currentItemText.length + 1)
    }

    if (currentItemText == newCurrentItemText) {
      deleting = true
      delay = 1000
    }

    if (deleting && currentItemText.length == 0) {
      currentItemIndex =
        currentItemIndex + 1 == items.length ? 0 : currentItemIndex + 1
      delay = 500
      currentItem = items[currentItemIndex]
      deleting = false
    }

    this.timeOut = setTimeout(() => {
      this.setState({
        currentItemText: newCurrentItemText,
        deleting: deleting,
        currentItemIndex: currentItemIndex,
      })
      this.type()
    }, delay)
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut)
  }
  render() {
    return <Wrapper>{this.state.currentItemText}</Wrapper>
  }
}

export default TypedText
