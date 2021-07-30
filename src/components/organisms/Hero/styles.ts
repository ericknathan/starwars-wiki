import styled from 'styled-components/native'

export const HeroContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;
`

export const ButtonsView = styled.View`
  display: flex;
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.px(8)}px;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`

export const HeaderContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
