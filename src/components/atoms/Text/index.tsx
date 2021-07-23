import React from 'react';
import { ReactNode } from 'react';
import { CustomText } from './styles';

type Props = {
  children: ReactNode;
  color?: string;
}

export const Text = ({ children, color }: Props) => {
  return (
    <CustomText color={color}>
      {children}
    </CustomText>
  )
}