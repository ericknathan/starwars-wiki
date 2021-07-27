import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text } from '~/components/atoms'
import { ButtonContainer } from './styles'
import { theme } from '~/styles/theme'

type WatchButtonType = {
  onPress?: () => void
}

export const WatchButton = ({ onPress }: WatchButtonType) => (
  <ButtonContainer onPress={onPress}>
    <Ionicons
      name="play"
      size={theme.metrics.px(14)}
      color={theme.colors.black}
    />
    <Text mt={2} ml={4} fontFamily="bold" size={14} color="black">
      Assistir
    </Text>
  </ButtonContainer>
)
