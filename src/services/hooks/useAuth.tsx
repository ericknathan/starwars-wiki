import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import * as AuthSession from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { authApi } from '../api'

type User = {
  id: string
  username: string
  avatar: string
  email: string
  token: string
}

type AuthContextData = {
  user: User
  loading: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string
    error?: string
  }
}
const { SCOPE } = process.env
const { CLIENT_ID } = process.env
const { CDN_IMAGE } = process.env
const { REDIRECT_URI } = process.env
const { RESPONSE_TYPE } = process.env
const DB_KEY = '@StarWarsWiki:user'

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  async function signIn() {
    try {
      setLoading(true)

      const authUrl = `${authApi.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse

      if (type === 'success' && !params.error) {
        authApi.defaults.headers.authorization = `Bearer ${params.access_token}`

        const userInfo = await authApi.get('/users/@me')
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        const userData = {
          ...userInfo.data,
          token: params.access_token,
        }

        await AsyncStorage.setItem(DB_KEY, JSON.stringify(userData))
        setUser(userData)
      }
    } catch {
      throw new Error('Não foi possível autenticar')
    } finally {
      setLoading(false)
    }
  }

  async function signOut() {
    try {
      setUser({} as User)
      await AsyncStorage.removeItem(DB_KEY)
    } catch {
      throw new Error('Não foi possível fazer logout')
    }
  }

  async function loadStoredUser() {
    const storage = await AsyncStorage.getItem(DB_KEY)
    if (storage) {
      const loggedUser = JSON.parse(storage) as User
      authApi.defaults.headers.authorization = `Bearer ${loggedUser.token}`

      setUser(loggedUser)
    }
  }

  useEffect(() => {
    loadStoredUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
