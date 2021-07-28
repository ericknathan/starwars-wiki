import React from 'react'
import { FlatList } from 'react-native'
import { Text } from '~/components/atoms'
import { Card } from '~/components/molecules'
import { ListContainer } from './styles'
import { theme } from '~/styles/theme'
import { ItemDetail } from '~/types'

type HomeListType = {
  data: Array<ItemDetail>
  title: string
  type: string
}

export const HomeList = ({ data, title, type }: HomeListType) => {
  return (
    <ListContainer>
      <Text ml={24} fontFamily="black" size={18}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={{ ...item, type }} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          paddingTop: theme.metrics.px(12),
          paddingLeft: theme.metrics.px(24),
          paddingBottom: theme.metrics.px(24),
        }}
      />
    </ListContainer>
  )
}
