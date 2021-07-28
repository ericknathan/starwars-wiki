import React, { useState, useEffect } from 'react'
import { ScreenScrollContainer, Input, Text } from '~/components/atoms'
import { Title } from '~/components/molecules'
import { GridList } from '~/components/organisms'
import { useGetData } from '~/services/hooks/useGetData'

export const SearchScreen = () => {
  const { getSearchResults } = useGetData()
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const callGetSearchResult = async () => {
    setLoading(true)
    const result = await getSearchResults(query)
    if (!result.error) {
      setResults(result)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (query.length < 3) {
      setResults([])
    }
    if (query.length > 0 && query.length % 3 === 0) {
      callGetSearchResult()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <ScreenScrollContainer withPadding>
      <Title screenName="Pesquisar" />
      <Input
        mb={24}
        value={query}
        onChangeText={(text: string) => setQuery(text)}
        placeholder="Filme ou nome do personagem"
      />
      <Text fontFamily="black" size={18} mb={24}>
        {results.length > 1 && 'Resultados'}
      </Text>
      <GridList
        loading={loading}
        type="search"
        data={results}
        chars={query.length}
      />
    </ScreenScrollContainer>
  )
}
