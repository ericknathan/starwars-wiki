import { ItemDetail } from '~/types'
import { useAuth } from '~/services/hooks/useAuth'
import { database } from '~/services/database'

export const useFavorites = () => {
  const { user } = useAuth()
  const addFavorite = async (data: ItemDetail) => {
    try {
      let newDb
      await database
        .ref(`${user.id}/favorites`)
        .once('value')
        .then((snap) => {
          if (snap.val() !== null) {
            newDb = [...snap.val(), data]
            database.ref(`${user.id}/favorites`).set(newDb)
          } else {
            newDb = [data]
            database.ref(`${user.id}/favorites`).set(newDb)
          }
        })
      return newDb
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getFavorites = async () => {
    let db
    await database
      .ref(`${user.id}/favorites`)
      .once('value')
      .then((snap) => {
        if (snap.val() !== null) {
          db = snap.val()
        }
      })
    return db || []
  }

  const removeFavorite = async (data: ItemDetail) => {
    try {
      let newDb
      await database
        .ref(`${user.id}/favorites`)
        .once('value')
        .then((snap) => {
          if (snap.val() !== null) {
            newDb = snap
              .val()
              .filter(
                (fv: { id: number; title: string }) =>
                  fv.id !== data.id && fv.title !== data.title
              )
            database.ref(`${user.id}/favorites`).set(newDb)
          } else {
            newDb = []
          }
        })
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
