import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text } from '~/components/atoms'
import { BottomBarContainer, BarItem } from './styles'
import { theme } from '~/styles/theme'
type BottomBarType = {
  state: {
    routes: Array<{
      key: number
    }>
    index: number
  }
  descriptors: Array<{
    options: {
      tabBarVisible: boolean
      tabBarLabel: string
      title: string
      tabBarAccessibilityLabel: string
      tabBarTestID: string
    }
  }>
  navigation: {
    navigate: Function
    emit: Function
  }
}

const routeIcons: {
  [key: string]: 'home-outline' | 'search-outline' | 'heart-outline'
} = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favorites: 'heart-outline',
}

export const BottomBar = ({
  state,
  descriptors,
  navigation,
  ...props
}: BottomBarType) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <BottomBarContainer {...props}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <BarItem
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Ionicons
              name={routeIcons[route.name]}
              size={theme.metrics.px(20)}
              color={isFocused ? theme.colors.red : theme.colors.white}
            />
            <Text
              fontFamily="semiBold"
              size={10}
              style={{
                color: isFocused ? theme.colors.red : theme.colors.white,
              }}
            >
              {label}
            </Text>
          </BarItem>
        )
      })}
    </BottomBarContainer>
  )
}
