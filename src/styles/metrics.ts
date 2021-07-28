import { Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

const figmaWidth = 375

const px = (valuePx: number) => {
  const widthPercent = (valuePx / figmaWidth) * 100
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * widthPercent) / 100
  )
  return screenPixel
}

export const metrics: any = {
  px,
  width,
  height,
}
