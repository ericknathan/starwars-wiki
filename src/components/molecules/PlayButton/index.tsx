import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text } from '~/components/atoms'
import { PlayButtonContainer } from './styles'
import { theme } from '~/styles/theme'

type PlayButtonType = {
  onPress?: () => void
}

export const PlayButton = ({ onPress }: PlayButtonType) => (
  <PlayButtonContainer onPress={onPress}>
    <Ionicons
      name="play"
      size={theme.metrics.px(16)}
      color={theme.colors.black}
    />
    <Text fontFamily="bold" size={14} color="black">
      Assistir
    </Text>
  </PlayButtonContainer>
)
