import styled from 'styled-components'
import FastImage from 'react-native-fast-image'
import { View } from 'react-native'

export const CardMovieContainer = styled(View)`
  flex: 1;
`
export const CardMovieContent = styled(View)`
  shadow-opacity: 0.34;
  shadow-radius: 6.27px;
  shadow-color: #222;
  shadow-offset: 0px 5px;
`
export const CardMovieImage = styled(FastImage)`
  width: 120px;
  height: 150px;
  background-color: #cccccc;
  border-radius: 5px;
  margin: 8px;
`
