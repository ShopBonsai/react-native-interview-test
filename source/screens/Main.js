import React, { Component } from "react"
import { ScrollView } from "react-native"

import Movies from "../Movies"

export default class Main extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Movies />
      </ScrollView>
    )
  }
}
