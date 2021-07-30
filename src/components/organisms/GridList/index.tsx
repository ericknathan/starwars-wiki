import React from 'react'
import { FlatList } from 'react-native'
import { Text, Container } from '~/components/atoms'
import { Card } from '~/components/molecules'
import { SeparatorView, NoDataImage } from './styles'
import noDataSearch from '~/assets/no-results.png'
import noDataFavorites from '~/assets/no-favorites.png'

type GridListProps = {
  data?: [] | never[]
  type?: string
  loading?: boolean
  chars?: number
}

export const GridList = ({ data, type, loading, chars }: GridListProps) => {
  let searchedChars = chars || 0
  return (
    <FlatList
      refreshing={loading}
      numColumns={3}
      data={data}
      renderItem={({ item }: { item: object }) => (
        <Card size="large" item={item} />
      )}
      keyExtractor={(item: { id: string }) => String(item.id)}
      ItemSeparatorComponent={SeparatorView}
      ListEmptyComponent={() => (
        <Container align="center" justify="center" h={500}>
          <NoDataImage
            resizeMode="contain"
            source={type === 'favorites' ? noDataFavorites : noDataSearch}
          />
          {type !== 'favorites' && searchedChars < 3 ? (
            <Text fontFamily="semiBold" size={14} mt={12} align="center">
              {'Pesquise por um\nfilme ou personagem'}
            </Text>
          ) : (
            <Text fontFamily="semiBold" size={14} mt={12} align="center">
              {`Nenhum ${
                type === 'favorites' ? 'Favorito' : 'Resultado'
              } \nEncontrado`}
            </Text>
          )}
        </Container>
      )}
    />
  )
}
