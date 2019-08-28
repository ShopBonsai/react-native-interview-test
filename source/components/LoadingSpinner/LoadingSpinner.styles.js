import styled from 'styled-components'
import { View, Text, ActivityIndicator } from 'react-native'

export const LoadingSpinnerContainer = styled(View)`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Spinner = styled(ActivityIndicator)`
  color: #fff;
`
export const LoadingText = styled(Text)`
  color: white;
  font-weight: bold;
  padding: 5px;
`
export default {
  LoadingSpinnerContainer
}
