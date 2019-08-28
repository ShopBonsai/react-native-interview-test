import styled from 'styled-components'
import { View, FlatList, Text } from 'react-native'


export const FeedContainer = styled(View)`
  flex: 1;
  background-color: #30312c;
`
export const FeedContent = styled(FlatList)`
  flex: 1;
  height: 100%;
`

export const FeedEmptyList = styled(Text)`
  color: #ffffff;
  font-size: 30px;
  align-self: center;
  margin: 85% auto 0 auto;
`
