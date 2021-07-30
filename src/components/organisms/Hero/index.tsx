import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroContainer, ButtonsView, HeaderContainer } from './styles'
import { Text, Logo, ProfileImage } from '~/components/atoms'
import {
  FavoriteStateModal,
  Tag,
  IconButton,
  WatchButton,
  BackgroundImage,
} from '~/components/molecules'
import { useFavorites } from '~/services/hooks'
import { useDataStore } from '~/services/stores'
import { ItemDetail } from '~/types'

type ItemProps = {
  item: ItemDetail
  onDetail?: boolean
}

export const Hero = ({ item, onDetail }: ItemProps) => {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()
  const [showFavoriteModal, setShowFavoriteModal] = useState<
    'added' | 'removed' | null
  >(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const { addFavorite, getFavorites, removeFavorite } = useFavorites()
  const { image_url, title, subtitle, type } = item

  const checkIsFavorite = async () => {
    const favorites = await getFavorites()
    const isInFavorite = favorites.filter(
      (fv: { id: number; type: string }) =>
        fv.id === item?.id && fv.type === item?.type
    )
    setIsFavorite(isInFavorite.length > 0)
  }

  useEffect(() => {
    checkIsFavorite()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const closeFavoriteModal = () => {
    setTimeout(() => {
      setShowFavoriteModal(null)
    }, 1000)
  }

  const addDataToFavorite = async () => {
    await addFavorite(item)
    setShowFavoriteModal('added')
    checkIsFavorite()
    closeFavoriteModal()
  }
  const removeDataToFavorite = async () => {
    await removeFavorite(item)
    setShowFavoriteModal('removed')
    checkIsFavorite()
    closeFavoriteModal()
  }

  const onPressWatch = () => {
    setSelectedData(item)
    navigation.navigate('Watch')
  }

  const onPressDetail = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  return (
    <HeroContainer>
      <BackgroundImage
        image={{
          uri: image_url,
        }}
      >
        {!onDetail && (
          <HeaderContainer>
            <Logo size="small" />
            <ProfileImage />
          </HeaderContainer>
        )}
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
          {item?.type === 'Filme' && <WatchButton onPress={onPressWatch} />}
          {!onDetail && (
            <>
              <IconButton
                onPress={onPressDetail}
                label="Saiba mais"
                iconName="information-circle-outline"
              />
            </>
          )}
        </ButtonsView>
      </BackgroundImage>
      {!!showFavoriteModal && (
        <FavoriteStateModal
          type={showFavoriteModal}
          visible={!!showFavoriteModal}
          onClose={() => setShowFavoriteModal(null)}
        />
      )}
    </HeroContainer>
  )
}
