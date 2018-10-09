import facepaint from 'facepaint'
import config from './site-config'
import { keyframes } from 'emotion'

export const typographyConfig = {
  baseFontSize: '18px',
  bodyWeight: '400',
  baseLineHeight: 1.5,
  headerFontFamily: ['Poppins', 'sans-serif'],
  headerWeight: 'normal',
  bodyFontFamily: ['Poppins', 'sans-serif'],
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
}

export const colors = {
  primary: config.primaryColor,
  primaryBG: config.primaryBgColor,

  darkBlue: '#1e3a4a',
  lightBlue: '#0599D1',
  orange: '#E67E00',
}
export const gradients = {
  darkBlue: 'linear-gradient(135deg, #325f7a, #0f1e28), #1e3a4a',
  lightBlue: 'linear-gradient(135deg, #00C1FF, #097AAD), #0599D1',
  orange: 'linear-gradient(135deg, #FF8C00, #CF7100), #E67E00',
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

const paddingY = '0'

export const padding = {
  normal: [`${paddingY} 10px`, `${paddingY} 0`],
  wide: [
    `${paddingY} 10px`,
    `${paddingY} 10px`,
    `${paddingY} 10px`,
    `${paddingY} 0`,
  ],
  superWide: [
    `${paddingY} 10px`,
    `${paddingY} 10px`,
    `${paddingY} 10px`,
    `${paddingY} 10px`,
    `${paddingY} 0`,
  ],
}

export const mediaQueries = facepaint(
  bps.map((bp, i) => {
    return `@media (min-width: ${bp})`
  })
)

export const font = {
  primary: 'sans-serif',
}

export default {
  typographyConfig,
  colors,
  sizing,
  bps,
  animations,
  breakpoints,
  padding,
  mediaQueries,
  font,
  gradients,
}
