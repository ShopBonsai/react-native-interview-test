import React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

const SafeView = styled(SafeAreaView)`
  flex: 1;
  background-Color: black;
`

export default Child => (
  props => (
    <SafeView>
      <Child {...props} />
    </SafeView>
  )
)
