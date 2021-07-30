import React from 'react'
import { StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  SplashScreen,
  Home,
  Detail,
  SearchScreen,
  FavoritesScreen,
  WatchScreen,
  SignInScreen,
} from '~/screens'
import { BottomBar } from '~/components/organisms'

const BottomRoute = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
      <Tab.Screen
        options={{ tabBarLabel: 'Home' }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'Pesquisar' }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'Favoritos' }}
        name="Favorites"
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  )
}

export const Routes = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={BottomRoute} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Watch" component={WatchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
