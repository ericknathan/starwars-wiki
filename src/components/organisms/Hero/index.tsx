import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
} from './styles'
import { Text, Logo } from '~/components/atoms'
import { Tag, IconButton, WatchButton } from '~/components/molecules'
import { colors } from '~/styles/colors'
import { useFavorites } from '~/services/hooks'
import { useDataStore } from '~/services/stores'

type ItemProps = {
  item: {
    image_url: string
    title: string
    subtitle: string
    type: string
    id: number
  }
  onDetail?: boolean
}

export const Hero = ({ item, onDetail }: ItemProps) => {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()
  const [loading, setLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)
  const { addFavorite, getFavorites, removeFavorite } = useFavorites()
  const { image_url, title, subtitle, type } = item

  const checkIsFavorite = async () => {
    setLoading(true)
    const favorites = await getFavorites()
    const isInFavorite = favorites.filter(
      (fv: { id: number; type: string }) =>
        fv.id === item.id && fv.type === item.type
    )
    setIsFavorite(isInFavorite.length > 0)
    setLoading(false)
  }

  useEffect(() => {
    checkIsFavorite()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addDataToFavorite = async () => {
    await addFavorite(item)
    checkIsFavorite()
  }
  const removeDataToFavorite = async () => {
    await removeFavorite(item)
    checkIsFavorite()
  }
  /*
  const onPressWatch = async () => {
    await navigation.navigate('Watch', {
      item,
      onDetail,
    })
  }
  */
  const onPressWatch = () => {
    setSelectedData(item)
    navigation.navigate('Watch')
  }

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo size="small" />}
          <Tag mt={onDetail ? 224 : 200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>
          <ButtonsView>
            <IconButton
              onPress={() =>
                isFavorite ? removeDataToFavorite() : addDataToFavorite()
              }
              label={isFavorite ? 'Rem. Favoritos' : 'Add Favoritos'}
              iconName={
                isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
              }
            />
            {item.type === 'Filme' && <WatchButton onPress={onPressWatch} />}
            {!onDetail && (
              <>
                <IconButton
                  label="Saiba mais"
                  iconName="information-circle-outline"
                />
              </>
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
