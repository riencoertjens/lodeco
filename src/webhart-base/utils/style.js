import facepaint from 'facepaint'
import config from './site-config'
import { keyframes } from 'emotion'

import Typography from 'typography'

export const baseFonts = {
  serif: ['Roboto slab', 'serif'],
  sansSerif: ['Roboto', 'sans-serif'],
}
export const fonts = {
  serif: baseFonts.serif.join(', '),
  sansSerif: baseFonts.sansSerif.join(', '),
  primary: baseFonts.serif.join(', '),
}

export const typography = new Typography({
  baseFontSize: '16px',
  bodyWeight: '400',
  baseLineHeight: 1.5,
  headerFontFamily: baseFonts.serif,
  headerWeight: 'normal',
  bodyFontFamily: baseFonts.sansSerif,
  overrideThemeStyles: () => ({
    h1: {
      fontWeight: '500',
      // textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    code: {
      fontFamily: 'Roboto Mono',
      fontWeight: 200,
    },
  }),
})
export const { scale, rhythm, options } = typography

export const colors = {
  primary: config.base.primaryColor,
  primaryBG: config.base.primaryBgColor,
  grey1: '#bdbdbd',
  grey2: '#C2C2BF',
}

export const sizing = {
  default: '16px',
  large: '18px',
  maxWidth: '540px',
  width: '90vw',
}

export const animations = {
  /* The typing effect */
  typing: keyframes`
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    `,
  /* The typewriter cursor effect */
  blinkCaret: keyframes`
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: ${colors.orange};
      }
    `,
}

export const bps = ['600px', '900px', '1200px', '1800px']

export const breakpoints = {
  normal: ['100%', bps[0], bps[1], bps[2]],
  wide: ['100%', '100%', '100%', bps[2]],
  superWide: ['100%', '100%', '100%', '100%', bps[3]],
}

export const mediaQuery = bps.map(bp => `@media (min-width: ${bp})`)

export const mediaQueryGT = {
  mobile: `@media (min-width: ${bps[0]})`,
  tablet: `@media (min-width: ${bps[1]})`,
  desktop: `@media (min-width: ${bps[2]})`,
  wideScreen: `@media (min-width: ${bps[3]})`,
}
export const mediaQueryLT = {
  mobile: `@media (max-width: ${bps[0]})`,
  tablet: `@media (max-width: ${bps[1]})`,
  desktop: `@media (max-width: ${bps[2]})`,
  wideScreen: `@media (max-width: ${bps[3]})`,
}

const paddingY = '0'

export const padding = {
  normal: [`${paddingY} ${rhythm(1 / 2)}`, `${paddingY} 0`],
  wide: [
    `${paddingY} ${rhythm(1 / 2)}`,
    `${paddingY} ${rhythm(1 / 2)}`,
    `${paddingY} ${rhythm(1 / 2)}`,
    `${paddingY} 0`,
  ],
  superWide: [
    `${paddingY} ${rhythm(1 / 2)}`,
    `${paddingY} ${rhythm(1 / 2)}`,
    `${paddingY} ${rhythm(1 / 2)}`,
    `${paddingY} ${rhythm(1 / 2)}`,
    `${paddingY} 0`,
  ],
}

export const mediaQueries = facepaint(
  bps.map((bp, i) => {
    return `@media (min-width: ${bp})`
  })
)

export default {
  colors,
  sizing,
  bps,
  animations,
  breakpoints,
  padding,
  mediaQueries,
  mediaQuery,
  mediaQueryGT,
  mediaQueryLT,
  fonts,
}
