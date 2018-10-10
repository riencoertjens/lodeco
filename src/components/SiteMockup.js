import React from 'react'
import styled, { css } from 'react-emotion'

const WrapperStyle = css`
  ${'' /* transform: scale(0.5); */} background: #333;
  border-radius: 40px;
  box-sizing: content-box;
  position: relative;
  display: flex;
  align-items: stretch;
  box-shadow: 3px 3px 0 #bbb, 6px 6px 0 #bbb, 9px 9px 0 #bbb,
    14px 10px 20px #666;
  overflow: hidden;
  iframe,
  img {
    border: none;
    margin: 0;
    width: 100%;
    min-height: 100%;
    display: block;
  }
  &:before {
    content: '';
    float: left;
  }
  &:after {
    width: 36px;
    height: 36px;
    margin-left: -20px;
    bottom: 10px;
    left: 50%;
    content: '';
    border-radius: 50%;
    background: black;
    border: 2px solid #aaa;
    position: absolute;
    display: block;
    z-index: 999999;
  }
`

const WebsiteWrapper = styled.div`
  ${WrapperStyle};

  ${props =>
    props.phone &&
    `
    padding: 60px 10px;
    width: 300px;
    &:before{padding-top: ${(100 * 16) / 9}%;}
  `};
  ${props =>
    props.tablet &&
    `
    padding: 60px 10px;
    width: 600px;
    &:before{padding-top: ${(100 * 4) / 3}%;}

  `};
  ${props =>
    props.desktop &&
    `
    padding: 0 0 200px;
    width: 2000px;
    &:before{padding-top: ${(100 * 9) / 16}%;}
    background: #CCC;
    iframe, img{
      border: 60px solid black;
    }
    &:after {
      width: 100px;
      height: 100px;
      margin-left: -50px;
      bottom: 40px;
      border: none;
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
