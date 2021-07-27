import React from 'react'
import { ReactNode } from 'react'
import { CustomText } from './styles'

type TextProps = {
  children: ReactNode
  color?: string
  fontFamily?: string
  size?: number
  mt?: number
  mb?: number
  ml?: number
  mr?: number
  lh?: number
  style?: object
}

export const Text = ({ children, ...props }: TextProps) => {
  return <CustomText {...props}>{children}</CustomText>
}
