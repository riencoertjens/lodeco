import styled, { css } from 'react-emotion'
import {
  mediaQueries,
  breakpoints,
  padding,
  colors,
  mediaQueryGT,
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
  background: #eee;
  ${Container} {
    text-align: center;
  }
  ${props =>
    props.background &&
    `
    background: ${props.background};
  `};
`

export const ButtonStyle = props => css`
  padding: ${rhythm(1 / 2)} ${rhythm(1)};
  margin: ${rhythm(3 / 4)} ${rhythm(1 / 4)} 0;
  font-size: 13px;
  ${props.large &&
    `
    padding: ${rhythm(1 / 2)} ${rhythm(2)};
    margin: ${rhythm(3 / 4)} ${rhythm(1 / 4)} 0;
    font-size: 16px;
  `};
  text-decoration: none;
  background: white;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  border: none;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  transition: 0.3s;
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
export const LinkButton = styled(GatsbyLink)`
  ${ButtonStyle};
`

export const Columns = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Column = styled('div')`
  padding: ${rhythm(1 / 2)};
  flex: 0 1 300px;
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
