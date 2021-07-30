import React from 'react'
import { LogoImg } from './styles'
import logoImage from '~/assets/logoEmpire.png'

const sizes: {
  [key: string]: number
} = {
  small: 28,
  large: 64,
}

export const Logo = ({ size }: { size?: string }) => {
  return <LogoImg source={logoImage} size={sizes[size || 'large']} />
}
