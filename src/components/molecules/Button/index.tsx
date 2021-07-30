import React from 'react'
import { ButtonContainer, StyledButton, Icon, IconWrapper } from './styles'
import { Text } from '~/components/atoms'
import discordLogo from '~/assets/discord.png'

type ButtonProps = {
  title: string
  discordIcon?: boolean
  onClick?: () => void
}

export const Button = ({ title, discordIcon, onClick }: ButtonProps) => {
  return (
    <ButtonContainer>
      <StyledButton activeOpacity={0.7} onPress={onClick}>
        {discordIcon && (
          <IconWrapper>
            <Icon source={discordLogo} />
          </IconWrapper>
        )}
        <Text size={15} align="center" flex>
          {title}
        </Text>
      </StyledButton>
    </ButtonContainer>
  )
}
