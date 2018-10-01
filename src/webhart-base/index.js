import React from 'react'
import styled, { css } from 'react-emotion'
import { mediaQueries, breakpoints, padding } from './utils/style'

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
  ${props => props.className};
`
