import styled from 'styled-components'
import FastImage from 'react-native-fast-image'
import { View, TouchableOpacity } from 'react-native'

export const CardMovieContainer = styled(TouchableOpacity)`
  flex: 1;
`
export const CardMovieContent = styled(View)`
  shadow-opacity: 0.34;
  shadow-radius: 6.27px;
  shadow-color: #222;
  shadow-offset: 0px 5px;
`
export const CardMovieImage = styled(FastImage)`
  width: 130px;
  height: 170px;
  background-color: #cccccc;
  border-radius: 5px;
  margin: 8px;
`
