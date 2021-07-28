import React from 'react'
import { ScreenTitle } from './styles'
import { Logo, Text } from '~/components/atoms'

export const Title = ({ screenName }: { screenName: string }) => {
  return (
    <ScreenTitle>
      <Logo size="small" />
      <Text fontFamily="bold" size={28} mt={4} ml={12}>
        {screenName}
      </Text>
    </ScreenTitle>
  )
}
