import styled from 'styled-components/native'

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
`

export const StyledButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.px(274)}px;
  height: ${({ theme }) => theme.metrics.px(56)}px;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  flex-direction: row;
  align-items: center;
`

export const IconWrapper = styled.View`
  width: ${({ theme }) => theme.metrics.px(56)}px;
  height: ${({ theme }) => theme.metrics.px(56)}px;
  justify-content: center;
  align-items: center;
  border-right-width: ${({ theme }) => theme.metrics.px(1)}px;
  border-right-color: ${({ theme }) => theme.colors.darkRed};
`

export const Icon = styled.Image`
  width: ${({ theme }) => theme.metrics.px(24)}px;
  height: ${({ theme }) => theme.metrics.px(18)}px;
`
