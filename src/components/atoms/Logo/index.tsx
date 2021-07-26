import React from 'react'
import { LogoImg } from './styles'
import logoImage from '../../../../assets/logoEmpire.png'

const sizes = {
  small: 28,
  large: 64,
}

type LogoProps = {
  size?: string
}

export const Logo = ({ size }: LogoProps) => {
  return <LogoImg source={logoImage} size={sizes[size || 'large']} />
}
