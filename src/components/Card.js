import React from 'react'
import styled, { css } from 'react-emotion'
import { rhythm } from '../webhart-base/utils/typography'

const CardStyle = props => css`
  transition: transform 1s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: inherit;
  padding: inherit;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  align-items: center;
  ${props.background};
`

const Front = styled.div`
  ${CardStyle};
  justify-content: flex-start;

  width: calc(100%);
  height: calc(100%);
  ${props =>
    props.flipped &&
    `
    transform: rotateY(180deg);
  `};
`
const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: ${rhythm(1 / 2)};
  width: calc(100% - ${rhythm(1 / 2)} * 2);
  height: calc(100% - ${rhythm(1 / 2)} * 2);
  transform: rotateY(-180deg);
  justify-content: center;
  p{
    margin-bottom: 0;
  }

  ${CardStyle};
  ${props =>
    props.flipped &&
    `
    transform: rotateY(0deg);
  `};
`

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = { flipped: false }
  }
  render() {
    const {
      icon,
      title,
      children,
      className,
      background,
      backside,
    } = this.props
    const { flipped } = this.state

    return (
      <div
        className={css`
          position: relative;
          perspective: 1000px;
          ${className};
        `}
      >
        <Front
          onClick={() => this.setState({ flipped: !flipped })}
          flipped={flipped}
          background={background}
        >
          {icon}
          <h3>{title}</h3>
          <p>{children}</p>
        </Front>
        <Back
          onClick={() => this.setState({ flipped: !flipped })}
          flipped={flipped}
          background={background}
        >
          <h3
            className={css`
              margin: 0 0 15px;
            `}
          >
            {title}
          </h3>
          <p
            className={css`
              font-size: 13px;
            `}
          >
            {backside}
          </p>
        </Back>
      </div>
    )
  }
}

export default Card
