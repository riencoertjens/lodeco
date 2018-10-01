import { css } from 'react-emotion'
import facepaint from 'facepaint'
import { injectGlobal } from 'emotion'
import config from './site-config'

export const typographyConfig = {
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Lato', 'sans-serif'],
  headerWeight: 'normal',
  bodyFontFamily: ['Karla', 'sans-serif'],
  overrideThemeStyles: () => ({
    h1: {
      fontWeight: '100',
    },
  }),
}

export const color = {
  primary: config.primaryColor,
  primaryBG: config.primaryBgColor,
  greyText: '#828282',
  accent: 'red',
}

export const sizing = {
  default: '16px',
  large: '18px',
  maxWidth: '540px',
  width: '90vw',
}

export const bps = ['600px', '900px', '1200px', '1800px']

export const breakpoints = {
  normal: ['100%', bps[0], bps[1], bps[2]],
  wide: ['100%', '100%', '100%', bps[2]],
  superWide: ['100%', '100%', '100%', '100%', bps[3]],
}
export const padding = {
  normal: ['0 10px', 0],
  wide: ['0 10px', '0 10px', '0 10px', 0],
  superWide: ['0 10px', '0 10px', '0 10px', '0 10px', 0],
}

export const mediaQueries = facepaint(
  bps.map((bp, i) => {
    return `@media (min-width: ${bp})`
  })
)

export const font = {
  primary: 'sans-serif',
}

export const gradients = {
  darkBlue: 'linear-gradient(135deg, #325f7a, #0f1e28), #1e3a4a',
  lightBlue: 'linear-gradient(135deg, #00C1FF, #097AAD), #0599D1',
  orange: 'linear-gradient(135deg, #FF8C00, #CF7100), #E67E00',
}

export const reset = () =>
  injectGlobal`
    ${require('reset-css')}
  `

export default {
  typographyConfig,
  color,
  sizing,
  bps,
  breakpoints,
  padding,
  mediaQueries,
  font,
  gradients,
  reset,
}
