import styled from 'styled-components/native'

export const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
  color: 'red',
})`
  height: 100%;
  width: 100%;
  min-height: ${({ theme }) => theme.metrics.px(460)}px;
  display: flex;
  align-items: center;
  justify-content: center;
`
