import React from 'react'
import { css } from 'react-emotion'

const shadow = '0 0 10px black'
const containerCorner = '5px'

export default props => {
  const {
    width,
    height,
    circleSize,
    circleTop,
    extraStyle,
    children,
    icon,
    onClick,
  } = props

  return (
    <div
      onClick={onClick}
      className={[
        css`
          cursor: pointer;
          width: ${width};
          height: ${height};
          position: relative;
          display: inline-block;
          border-radius: ${containerCorner};
          ${props.active &&
            `box-shadow: 
          ${shadow};`} :after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            border-radius: 50%;
            width: ${circleSize};
            height: ${circleSize};
            left: calc(-${circleSize} / 2);
            margin: ${circleTop} 50%;
            ${props.active && `box-shadow: inset ${shadow};`};
          }
          ${props.active ||
            `:before {
            content: '';
            display: inline-block;
            width: 30px;
            height: 30px;
            ${'' /* background: red; */} position: absolute;
            z-index: 10;
            bottom: 10px;
            margin-left: -15px;
            border: solid black;
            border-width: 0 2px 2px 0;
            left: 50%;
            transform: rotate(45deg);
          }`} svg {
            position: absolute;
            top: 0;
            left: 50%;
            width: calc(${circleSize} * ${1 / 2});
            height: calc(${circleSize} * ${1 / 2});
            margin-left: calc(${circleSize} * ${1 / 2 / -2});
            margin-top: calc(${circleTop} + (${circleSize} * ${1 / 2 / 2}));
            z-index: 9999;
          }
          ${extraStyle};
        `,
      ].join()}
    >
      {icon && icon}
      <div
        className={css`
          mix-blend-mode: screen;
          color: black;
          z-index: -1;
          :before,
          :after {
            border-radius: ${containerCorner};
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            ${props.active && `background: white;`};
          }
          :after {
            border-radius: 50%;
            background: black;
            width: ${circleSize};
            height: ${circleSize};
            left: calc(-${circleSize} / 2);
            margin: ${circleTop} 50%;
          }
        `}
      />
      <div
        className={css`
          mix-blend-mode: unset;
          margin-top: calc(${circleSize} + ${circleTop});
          padding: 10px 25px;
          height: calc(100% - calc(${circleSize} + ${circleTop}));
          position: absolute;
          width: 100%;
          color: black;
          z-index: 9999999999;
          ${props.active ||
            `
            p {
              text-shadow: ${shadow};
              color: transparent;
            }
          `};
        `}
      >
        {children}
      </div>
    </div>
  )
}
