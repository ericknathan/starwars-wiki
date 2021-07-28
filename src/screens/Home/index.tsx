import React, { useEffect, useState } from 'react'
import { Container, ScreenScrollContainer, Loader } from '~/components/atoms'
import { HomeList, Hero } from '~/components/organisms'
import { useGetData } from '~/services/hooks'
import { ItemDetail } from '~/types'

export const Home = () => {
  const { getFilms, getCharacters } = useGetData()
  const [loading, setLoading] = useState(true)
  const [films, setFilms] = useState([])
  const [characters, setCharacters] = useState([])

  const callGetData = async () => {
    const filmsResponse = await getFilms()
    const charactersResponse = await getCharacters()

    if (!filmsResponse.error && !charactersResponse.error) {
      setFilms(filmsResponse)
      setCharacters(charactersResponse)
      setLoading(false)
    }
  }

  useEffect(() => {
    callGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <Container align="center" justify="center">
        <Loader />
      </Container>
    )
  }

  function shuffle(arr: Array<ItemDetail>) {
    const newArray = arr.slice()
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = newArray[i]
      newArray[i] = newArray[j]
      newArray[j] = temp
    }
    return newArray
  }

  const getRandomFilm: ItemDetail =
    films[Math.floor(Math.random() * films.length)]

  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          ...getRandomFilm,
          type: 'Filme',
        }}
      />
      <HomeList title="Filmes" data={shuffle(films)} type="Filme" />
      <HomeList
        title="Personagens"
        data={shuffle(characters)}
        type="Personagem"
      />
    </ScreenScrollContainer>
  )
}
