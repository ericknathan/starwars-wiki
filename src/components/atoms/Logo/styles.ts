import styled from 'styled-components/native'

export const LogoImg = styled.Image.attrs(({ size }: { size: number }) => ({
  size,
}))`
  height: ${({ size, theme }) => theme.metrics.px(size)}px;
  width: ${({ size, theme }) => theme.metrics.px(size)}px;
`
