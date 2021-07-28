import React, { useEffect } from 'react'
import { Text, Logo, Container } from '~/components/atoms'

export const SplashScreen = ({
  navigation,
}: {
  navigation: { navigate: (screen: string) => void }
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 1000)
  }, [navigation])

  return (
    <Container align="center" justify="center">
      <Logo />
      <Text fontFamily="bold" size={24} mt={12}>
        StarWars - Wiki
      </Text>
    </Container>
  )
}
