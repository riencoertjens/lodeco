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

          svg {
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
          margin-bottom: 50px;
          padding: 10px 25px;
          height: calc(100% - calc(${circleSize} + ${circleTop}));
          position: absolute;
          width: 100%;
          color: black;
          z-index: 9999999999;
          :after,
          :before {
            content: '';
            display: inline-block;
            position: absolute;
            transition: 0.4s;
          }
          :after {
            margin: -10px;
            width: 20px;
            height: 20px;
            z-index: 10;
            bottom: 20px;
            border: solid black;
            border-width: 0 1px 1px 0;
            transform: rotate(45deg);
            ${props.active &&
              `
              opacity: 0;
            `};
          }
          :before {
            height: 50px;
            z-index: -10;
            border-left: 1px solid black;
            bottom: -50px;
            margin-left: -1px;
            opacity: 0;
            ${props.active &&
              `
              opacity: 1;
            `};
          }
          p {
            transition: 0.4s;
            ${props.active ||
              `

              text-shadow: ${shadow};
              color: transparent;
          `};
          }
        `}
      >
        {children}
      </div>
    </div>
  )
}
