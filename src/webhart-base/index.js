import styled, { css } from 'react-emotion'
import { mediaQueries, breakpoints, padding, colors } from './utils/style'
import { rhythm } from './utils/typography'

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
  padding: 0 20px;
  height: 35px;
  line-height: 20px;
  font-family: 'Raleway';
  ${props.background
    ? `border: none;`
    : `border: 1px solid ${props.color || `white`};`} border-radius: 100px;
  margin: 0 10px;
  background: ${props.background || `transparent`};
  color: ${props.color || `white`};
  font-size: 12px;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const Button = styled('button')`
  ${ButtonStyle};
`
