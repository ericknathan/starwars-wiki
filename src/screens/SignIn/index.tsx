import React from 'react'
import { Text, Logo, ScreenScrollContainer, Loader } from '~/components/atoms'
import { BackgroundImage, Button } from '~/components/molecules'
import { Alert } from 'react-native'
import darthVaderImage from '~/assets/darth-vader.png'
import { useAuth } from '~/services/hooks'

export const SignInScreen = () => {
  const { loading, signIn } = useAuth()

  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert(error)
    }
  }

  return (
    <ScreenScrollContainer>
      <BackgroundImage image={darthVaderImage}>
        <Logo size="small" />
      </BackgroundImage>
      <Text
        fontFamily="bold"
        size={40}
        align="center"
        mt={-70}
        mb={16}
        ml={30}
        mr={30}
      >
        Conecte-se e venha para o lado negro da força
      </Text>
      <Text
        fontFamily="regular"
        size={15}
        align="center"
        mb={48}
        ml={60}
        mr={60}
      >
        Explore e adicione novos filmes e personagens aos seus favoritos
      </Text>
      {loading ? (
        <Loader />
      ) : (
        <Button title="Entrar com Discord" discordIcon onClick={handleSignIn} />
      )}
    </ScreenScrollContainer>
  )
}
