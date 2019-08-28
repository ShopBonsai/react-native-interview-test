import styled from 'styled-components'
import { ScrollView, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import themes from '../../themes'

export const MovieDetailContainer = styled(ScrollView)`
  flex: 1;
  background-color: ${themes.theme.colors.backgroundColor.secondary};
`
export const MovieDetailContent = styled(ScrollView)`
  flex: 1;
  flex-direction: column;
`
export const MovieDetailCover = styled(FastImage)`
  flex: 1;
  height: 180px;
`
export const MovieDetailTitle = styled(Text)`
  color: white;
  font-size: 25px;
  padding: 10px 20px;
`

export const MovieDetailPrice = styled(Text)`
  color: white;
  font-size: 18px;
  padding: 10px 20px;
`
