import styled from 'styled-components/native'

interface ViewType {
  dir?: string
  align?: string
  justify?: string
  bg?: string
  w?: number
  h?: number
  withPadding?: boolean
  theme?: any
}

export const Container = styled.View.attrs(
  ({ dir, align, justify, bg, w, h }: ViewType) => ({
    dir,
    align,
    justify,
    bg,
    w,
    h,
  })
)`
  display: flex;
  flex-direction: ${({ dir }) => dir || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background-color: ${({ bg, theme }) => theme.colors[bg || 'dark']};
  width: ${({ w, theme }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ h, theme }) => (h ? `${theme.metrics.px(h)}px` : '100%')};
`

export const ScreenScrollContainer = styled.ScrollView.attrs(
  ({ theme, withPadding, align }: ViewType) => ({
    contentContainerStyle: withPadding
      ? {
          paddingHorizontal: theme.metrics.px(24),
          paddingVertical: theme.metrics.px(56),
        }
      : {},
    withPadding,
    alignItems: align,
  })
)`
  background-color: ${({ bg, theme }: ViewType) => theme.colors[bg || 'dark']};
`
