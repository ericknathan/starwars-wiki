import React from 'react'
import { CardContainer, CardImage } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '~/services/stores'
import { ItemDetail } from '~/types'

const sizes: {
  [key: string]: {
    w: number
    h: number
  }
} = {
  small: {
    h: 124,
    w: 88,
  },
  large: {
    h: 150,
    w: 102,
  },
}

type CardType = {
  item: ItemDetail
  size?: string
}

export const Card = ({ item, size }: CardType) => {
  const { setSelectedData } = useDataStore()
  const navigation = useNavigation()

  const onSelectItem = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }
  return (
    <CardContainer
      onPress={onSelectItem}
      size={size ? sizes[size] : sizes.small}
    >
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}

export default Card
