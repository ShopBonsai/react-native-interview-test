import React, { Component } from "react"
import { TouchableOpacity, Text } from "react-native"

class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

export { Button }

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    padding: 20,
    borderWidth: 1,
    borderColor: "#007aff",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
    textAlign: "center",
    color: "#007aff",
  },
}
