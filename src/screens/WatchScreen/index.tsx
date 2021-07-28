import React, { useState, useCallback, useMemo } from 'react'
import { Container, GoBack } from '~/components/atoms'
import YoutubePlayer from 'react-native-youtube-iframe'
import { theme } from '~/styles/'
import { useDataStore } from '~/services/stores'
export const WatchScreen = () => {
  const [playing, setPlaying] = useState(false)
  const { selectedData } = useDataStore()

  const YouTubeVideoId = useMemo(() => {
    const id = selectedData?.trailer_url?.split('v=')[1].substring(0, 11)
    return id
  }, [selectedData])

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
    }
  }, [])

  return (
    <Container align="flex-start" justify="center">
      <YoutubePlayer
        height={theme.metrics.px(300)}
        width={theme.metrics.width}
        play={playing}
        videoId={YouTubeVideoId || ''}
        onChangeState={onStateChange}
      />
      <GoBack />
    </Container>
  )
}
