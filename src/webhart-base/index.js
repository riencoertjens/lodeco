import React from 'react'
import styled, { css } from 'react-emotion'
import {
  mediaQueries,
  breakpoints,
  padding,
  colors,
  mediaQueryGT,
  mediaQueryLT,
} from './utils/style'
import { rhythm } from './utils/style'
import GatsbyLink from 'gatsby-link'

export const ContainerStyle = props =>
  css(
    mediaQueries({
      width: props.width ? breakpoints[props.width] : breakpoints['normal'],
      padding: props.width ? padding[props.width] : padding['normal'],
      margin: '0 auto',
    })
  )

export const Container = styled.div`
  ${ContainerStyle};
  & > *:last-child {
    margin-bottom: 0;
  }
  ${props => props.className};
`

export const Section = styled.section`
  padding: ${rhythm(2)} 0;
  h2 {
    color: black;
    ${mediaQueries({
      fontSize: ['27px', '32px'],
    })} &:after {
      background-image: linear-gradient(
        to right,
        white 33%,
        rgba(255, 255, 255, 0) 0%
      );
    }
  }
  p {
    color: #bdbdbd;
    font-weight: 300;
    ${mediaQueries({
      fontSize: ['18px', '24px'],
    })} max-width: 625px;
    margin-left: auto;
    margin-right: auto;
  }
  ${Container} {
    text-align: center;
  }
  background: white;

  ${props =>
    props.background &&
    `
    background: ${props.background};
    h2{color: white;}
  `};
`

export const ButtonStyle = props => css`
  padding: ${rhythm(1 / 2)} ${rhythm(1)};
  margin: ${rhythm(3 / 4)} ${rhythm(1 / 4)} 0;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.3em;
  text-decoration: none;
  background: white;
  text-transform: uppercase;
  display: inline-block;
  border: none;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  transition: 0.3s;
  text-shadow: none;

  &:hover {
    ${props.clear
      ? `
        background: black;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        color: white;
        border-color: black;
    `
      : `
        opacity: 0.75;
      `};
  }
  ${props.black &&
    `
    background: black; color: white
  `};
  ${props.clear &&
    `
      box-shadow: none;
      background: transparent;
      color: white;
      border: 1px solid white;

    `};
`

export const Button = styled('button')`
  ${ButtonStyle};
`
const ButtonA = styled('a')`
  ${ButtonStyle};
`
const ButtonGatsbyLink = styled(GatsbyLink)`
  ${ButtonStyle};
`

export const LinkButton = props => {
  if (props.to) {
    return <ButtonGatsbyLink {...props} />
  } else {
    return <ButtonA {...props} />
  }
}

export const Columns = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Column = styled('div')`
  padding: ${rhythm(1 / 2)};
  flex: 0 1 300px;
  position: relative;
  ${mediaQueryLT['tablet']} {
    margin: ${rhythm(1)} 0;
  }
  ${mediaQueryGT['tablet']} {
    display: flex;
    flex-direction: column;
    align-items: center;
    button,
    a {
      margin: auto 0;
    }
  }
`
