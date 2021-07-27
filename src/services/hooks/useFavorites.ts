import AsyncStorage from '@react-native-async-storage/async-storage'

const DB_KEY = '@StarWarsWiki:favourites'

type DataType = {
  image_url: string
  title: string
  name: string
  subtitle: string
  type: string
  id: number
}

export const useFavorites = () => {
  const addFavorite = async (data: DataType) => {
    try {
      let newDb
      const value = await AsyncStorage.getItem(DB_KEY)
      if (value !== null) {
        const db = JSON.parse(value)
        newDb = [...db, data]
      } else {
        newDb = [data]
      }
      const jsonValue = JSON.stringify(newDb)
      await AsyncStorage.setItem(DB_KEY, jsonValue)
      return newDb
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getFavorites = async () => {
    const value = await AsyncStorage.getItem(DB_KEY)
    if (value !== null) {
      const db = JSON.parse(value)
      return db
    }
    return []
  }

  const removeFavorite = async (data: DataType) => {
    try {
      let newDb
      const value = await AsyncStorage.getItem(DB_KEY)
      if (value !== null) {
        const db = JSON.parse(value)
        newDb = db.filter(
          (fv: { id: number; title: string }) =>
            fv.id !== data.id && fv.title !== data.title
        )
      } else {
        newDb = []
      }
      const jsonValue = JSON.stringify(newDb)
      await AsyncStorage.setItem(DB_KEY, jsonValue)
      return newDb
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  return {
    addFavorite,
    getFavorites,
    removeFavorite,
  }
}
