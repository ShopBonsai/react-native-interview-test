import React, { Component } from "react"
import { SafeAreaView } from "react-native"
import styled from "styled-components/native"

const SafeView = styled(SafeAreaView)`
  flex: 1;
`

export default Child =>
  class extends Component {
    render() {
      return (
        <SafeView>
          <Child {...this.props} />
        </SafeView>
      )
    }
  }
