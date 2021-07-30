import React from 'react'
import { Text } from '~/components/atoms'
import {
  Modal,
  ModalBackgroundContainer,
  ModalContentContainer,
  FavoriteImage,
} from './styles'
import favoriteAdded from '~/assets/favorite-added.png'
import favoriteRemoved from '~/assets/favorite-removed.png'

type ModalType = {
  visible: boolean
  onClose: () => void
  type: 'added' | 'removed'
}

export const FavoriteStateModal = ({ visible, onClose, type }: ModalType) => {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <ModalBackgroundContainer>
        <ModalContentContainer>
          <FavoriteImage
            source={type === 'added' ? favoriteAdded : favoriteRemoved}
          />
          <Text mt={24} size={28} fontFamily="bold" align="center">
            {`Favorito ${
              type === 'added' ? 'adicionado' : 'removido'
            } com sucesso!`}
          </Text>
        </ModalContentContainer>
      </ModalBackgroundContainer>
    </Modal>
  )
}
