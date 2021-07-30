import React, { useEffect } from 'react'
import { Text, Logo, Container } from '~/components/atoms'
import { useAuth } from '~/services/hooks/useAuth'

export const SplashScreen = ({
  navigation,
}: {
  navigation: { navigate: (screen: string) => void; reset: ({}) => void }
}) => {
  const { user } = useAuth()

  useEffect(() => {
    setTimeout(() => {
      if (!user.id) {
        navigation.navigate('SignIn')
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      }
    }, 1000)
  }, [navigation, user])

  return (
    <Container align="center" justify="center">
      <Logo />
      <Text fontFamily="bold" size={24} mt={12}>
        StarWars - Wiki
      </Text>
    </Container>
  )
}
