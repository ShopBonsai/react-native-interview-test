/* eslint-disable no-use-before-define */
import React from "react"
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native"

import { Card } from "./index"

const FeedCard = (props) => {
  return (
    // eslint-disable-next-line no-use-before-define
    <View style={styles.containerStyle}>
      <Card>
        <Text style={styles.cardHeader}>Heita </Text>
        <Image style={styles.imageStyle} source={{ uri: `${props.imageUrl}` }} />
      </Card>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Buy Ticket</Text>
      </TouchableOpacity>
    </View>
  )
}

export { FeedCard }

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  imageStyle: {
    width: 400,
    height: 400,
  },
  cardHeader: {
    fontFamily: "OpenSans-Bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 10,
    paddingBottom: 10,
  },
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
