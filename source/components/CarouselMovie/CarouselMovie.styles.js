import styled from 'styled-components'
import { View, FlatList, Text } from 'react-native'

export const CarouselMovieContainer = styled(View)`
  flex-direction: column;
  padding: 10px;
`
export const CarouselMovieContent = styled(FlatList)``

export const CarouselMovieTitle = styled(Text)`
  color: white;
  font-size: 20px;
  padding-bottom: 15px;
`
