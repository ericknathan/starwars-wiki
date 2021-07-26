import styled from 'styled-components/native'

type ViewType = {
  dir?: string
  align?: string
  justify?: string
  bg?: string
  w?: number
  h?: number
  theme: any
}

export const Container = styled.View`
  display: flex;
  flex-direction: ${({ dir }: ViewType) => dir || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background-color: ${({ bg, theme }) => theme.colors[bg || 'dark']};
  width: ${({ w, theme }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ h, theme }) => (h ? `${theme.metrics.px(h)}px` : '100%')};
`

export const ScreenScrollContainer = styled.ScrollView`
  background-color: ${({ bg, theme }: ViewType) => theme.colors[bg || 'dark']};
`
