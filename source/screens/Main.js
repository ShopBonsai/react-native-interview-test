import React, { Component } from "react"
import { Text, ScrollView } from "react-native"

export default class Main extends Component {
  componentDidMount() {
    console.log("component did mount")
  }
  render() {
    return (
      <ScrollView>
        <Text>Title</Text>
      </ScrollView>
    )
  }
}
