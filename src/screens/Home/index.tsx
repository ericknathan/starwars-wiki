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
      <HomeList title="Filmes" data={films} type="Filme" />
      <HomeList title="Personagens" data={characters} type="Personagem" />
    </ScreenScrollContainer>
  )
}
