import React, { useEffect, useState } from 'react'
import { ScreenScrollContainer, Text } from '~/components/atoms'
import { GridList } from '~/components/organisms'
import { useFavorites } from '~/services/hooks'

export const FavoritesScreen = ({
  navigation,
}: {
  navigation: {
    addListener: (type: string, returnFunction: () => Promise<void>) => void
  }
}) => {
  const [favoritesList, setFavoritesList] = useState([])
  const { getFavorites } = useFavorites()

  const callGetFavorites = async () => {
    const favorites = await getFavorites()
    setFavoritesList(favorites)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', callGetFavorites)
    return unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ScreenScrollContainer withPadding>
      <Text fontFamily="bold" size={28} mb={24}>
        Favoritos
      </Text>
      <GridList type="favorites" data={favoritesList} />
    </ScreenScrollContainer>
  )
}
