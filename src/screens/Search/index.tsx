import React from 'react'
import { ScreenScrollContainer, Text } from '~/components'

export const SearchScreen = () => {
  return (
    <ScreenScrollContainer withPadding>
      <Text fontFamily="bold" size={28}>
        Pesquisar
      </Text>
    </ScreenScrollContainer>
  )
}
