import React from 'react'
import { ImageButton, Image } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '~/services/hooks/useAuth'
import { Alert } from 'react-native'

export const ProfileImage = () => {
  const { user, signOut } = useAuth()
  const navigation = useNavigation()

  function handleSignOut() {
    Alert.alert('Logout', 'Deseja fazer logout?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          signOut()
          navigation.navigate('SignIn')
        },
      },
    ])
  }

  return (
    <ImageButton activeOpacity={0.4} onPress={handleSignOut}>
      <Image
        source={{
          uri: user.avatar,
        }}
      />
    </ImageButton>
  )
}
