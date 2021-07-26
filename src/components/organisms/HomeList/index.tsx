import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '~/components/molecules'
import { Text } from '~/components/atoms'
import { ListContainer } from './styles'
import { theme } from '~/styles/theme'

type HomeListType = {
  data: Array<{ id: number; image_url: string }>
  title: string
}

export const HomeList = ({ data, title }: HomeListType) => {
  return (
    <ListContainer>
      <Text ml={24} fontFamily="black" size={18}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
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
