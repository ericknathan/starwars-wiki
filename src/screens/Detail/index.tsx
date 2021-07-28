import React from 'react'
import { GoBack, Text, ScreenScrollContainer } from '~/components/atoms'
import { Hero } from '~/components/organisms'
import { useDataStore } from '~/services/stores'

export const Detail = () => {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <Text ml={24} fontFamily="black" size={18}>
        Descrição
      </Text>
      <Text ml={24} mr={24} size={14} lh={20}>
        {selectedData?.description}
      </Text>
      <GoBack />
    </ScreenScrollContainer>
  )
}
