import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;
`
