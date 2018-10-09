import styled, { css } from 'react-emotion'
import {
  mediaQueries,
  breakpoints,
  padding,
  colors,
  gradients,
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
  padding: ${rhythm(1)} 0;
  background: #eee;
  :nth-child(even) {
    background: #ddd;
  }
  ${Container} {
    text-align: center;
    ${'' /* max-width: 600px; */};
  }
`

export const ButtonStyle = props => css`
  border-radius: 1000px;
  padding: ${rhythm(1 / 4)} ${rhythm(3 / 4)};
  margin: ${rhythm(3 / 4)} ${rhythm(1 / 4)} 0;
  text-decoration: none;
  background: white;
  display: inline-block;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
  font-weight: 200;
  &:hover {
    box-shadow: none;
  }
  ${props.orange &&
    `
    background: ${gradients.orange};
    border: none;
    color: ${colors.darkBlue}
  `};
  ${props.dark &&
    `
    background: ${gradients.darkBlue};
    border: none;
    color: ${colors.orange}
  `};
  ${props.blue &&
    `
    background: ${gradients.lightBlue};
    border: none;
    color: ${colors.darkBlue}
  `};
`

export const Button = styled('button')`
  ${ButtonStyle};
`
export const LinkButton = styled(GatsbyLink)`
  ${ButtonStyle};
`
