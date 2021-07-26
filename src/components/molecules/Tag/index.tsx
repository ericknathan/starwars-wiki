import React, { ReactNode } from 'react'
import { Text } from '~/components/atoms'
import { TagContainer } from './styles'

type TagProps = {
  children: ReactNode
  mt?: number
  mb?: number
  ml?: number
  mr?: number
}

export const Tag = ({ children, ...props }: TagProps) => (
  <TagContainer {...props}>
    <Text fontFamily="bold" size={14}>
      {children}
    </Text>
  </TagContainer>
)
