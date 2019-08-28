import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import styled from 'styled-components/native'

const SafeView = styled(SafeAreaView)`
  flex: 1;
  background-Color: black;
`

export default Child => (
  props => (
    <SafeView>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
      />
      <Child {...props} />
    </SafeView>
  )
)
