import React from 'react'
import styled, { css } from 'react-emotion'

const WrapperStyle = css`
  transform: scale(0.5);

  background: #333;
  border-radius: 40px;
  box-sizing: content-box;
  margin: 50px auto;
  position: relative;
  &:after,
  &:before {
    content: '';
    display: inline-block;
    background: black;
    position: absolute;
  }
  &:after {
    width: 40px;
    border-radius: 50%;
    height: 40px;
    bottom: 10px;
    margin-left: 50%;
    left: -22px;
    border: 2px solid #555;
  }
  &:before {
    width: 60px;
    border-radius: 1000px;
    height: 8px;
    top: 26px;
    margin-left: 50%;
    left: -30px;
  }
  iframe,
  img {
    border: none;
    margin: 0;
    width: 100%;
    height: 100%;
  }
`

const WebsiteWrapper = styled.div`
  ${WrapperStyle};

  ${props =>
    props.phone &&
    `
    padding: 60px 10px;
    width: 320px;
    height: 568px;
  `};
  ${props =>
    props.tablet &&
    `
    padding: 60px 10px;
    width: 1024px;
    height: 1366px;
  `};
  ${props =>
    props.desktop &&
    `
    padding: 50px 50px 200px;
    width: 1921px;
    height: 1080px;
    background: #CCC;
    &:after {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      bottom: 50px;
      margin-left: 50%;
      border: none;
      left: -50px;
    }
    &:before {
      width: 4px;
      height: 4px;
      border-radius: 1000px;
      border: 6px solid #333;
      background: #000;
      top: 22px;
      margin-left: 50%;
      left: -8px;
    }
  `};
`

const WebsiteWrap = props => (
  <WebsiteWrapper {...props}>
    {props.image ? <img src={props.image} /> : <iframe src={props.site} />}
  </WebsiteWrapper>
)

export default WebsiteWrap

export const Phone = props => <WebsiteWrap {...props} phone />
export const Tablet = props => <WebsiteWrap {...props} tablet />
export const Desktop = props => <WebsiteWrap {...props} desktop />
