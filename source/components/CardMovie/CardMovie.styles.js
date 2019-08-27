import styled from 'styled-components'
import { View, Image } from 'react-native'

export const CardMovieContainer = styled(View)`
  flex: 1;
`
export const CardMovieContent = styled(View)`
  shadow-opacity: 0.34;
  shadow-radius: 6.27px;
  shadow-color: #222;
  shadow-offset: 0px 5px;
`
export const CardMovieImage = styled(Image)`
  width: 120px;
  height: 150px;
  background-color: #cccccc;
  border-radius: 5px;
  margin: 8px;
`
