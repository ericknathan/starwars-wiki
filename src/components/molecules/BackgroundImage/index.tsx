import React, { ReactNode } from 'react'
import { BgContainer, ImageBackground, GradientBackground } from './styles'
import { colors } from '~/styles/colors'

type ImageProps = {
  children?: ReactNode
  image: {
    uri?: string
  }
}

export const BackgroundImage = ({ image, children }: ImageProps) => {
  return (
    <BgContainer>
      <ImageBackground source={image}>
        <GradientBackground colors={[colors.dark, 'transparent', colors.dark]}>
          {children}
        </GradientBackground>
      </ImageBackground>
    </BgContainer>
  )
}
