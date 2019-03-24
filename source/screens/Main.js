import React, { Component } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import propTypes from "prop-types"

import { FEEDPAGE } from "."

const images = {
  frontpage: require("../images/Github.png"),
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CBFAF2",
  },
  newContainer: {
    flex: 1,
    backgroundColor: "#111111",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
})

export default class Main extends Component {
  handlePress = () => {
    this.props.navigator.push({ screen: "interview.feedpage" })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={images.frontpage} />
            <Text style={styles.welcome}>Press to Load Feed</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

Main.propTypes = {
  navigator: propTypes.object,
}
