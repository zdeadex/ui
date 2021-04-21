import { DefaultTheme } from 'styled-components'

interface Spacings {
  extraLarge: string
  large: string
  medium: string
  small: string
  extraSmall: string
}

interface Colors {
  main: string
  background: string
  error: string
  text: string
  textSecondary: string
  success: string
  border: string
  borderHover: string
}

interface Breakpoints {
  sm: string
  md: string
  lg: string
  xl: string
}

interface Durations {
  fast: string
  med: string
  norm: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: Spacings
    colors: Colors
    breakpoints: string[]
    breakpointsObject: Breakpoints
    dur: Durations
  }
}

const theme: DefaultTheme = {
  spacing: {
    extraLarge: '32px',
    large: '24px',
    medium: '16px',
    small: '8px',
    extraSmall: '4px',
  },
  colors: {
    main: '#00A3FF',
    background: '#F4F6F8',
    error: '#E14D4D',
    text: '#0C141D',
    textSecondary: '#7A8AA0',
    success: '#61B75F',
    border: '#d1d8df',
    borderHover: '#b1b7bd',
  },
  breakpoints: ['360px', '480px', '768px', '1024px'],
  breakpointsObject: {
    sm: '360px',
    md: '480px',
    lg: '768px',
    xl: '1024px',
  },
  dur: {
    fast: '100ms',
    med: '150ms',
    norm: '200ms',
  },
}

export default theme
