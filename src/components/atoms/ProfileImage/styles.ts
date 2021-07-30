import styled from 'styled-components/native'

export const ImageButton = styled.TouchableOpacity`
  border-radius: ${({ theme }) => theme.metrics.px(50)}px;
  border: solid ${({ theme }) => theme.colors.red};
  border-width: ${({ theme }) => theme.metrics.px(1)}px;
  padding: ${({ theme }) => theme.metrics.px(2)}px;
`

export const Image = styled.Image`
  height: ${({ theme }) => theme.metrics.px(36)}px;
  width: ${({ theme }) => theme.metrics.px(36)}px;
  border-radius: ${({ theme }) => theme.metrics.px(50)}px;
`
