import { colors } from './colors'
import { fonts } from './fonts'
import { metrics } from './metrics'

export const theme = {
  colors,
  fonts,
  metrics,
}

type themeType = typeof theme
type ThemePropsType = {
  color?: string
  size?: number
  mt?: number
  mb?: number
  ml?: number
  mr?: number
  fontFamily?: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends themeType {}
  export interface ThemeProps<T> extends ThemePropsType {}
}
