/* eslint-disable no-use-before-define */
import React from "react"
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native"

import { Card, CardSection } from "./index"

const {width} = Dimensions.get("window")
const FeedCard = props => {
  return (
    // eslint-disable-next-line no-use-before-define
    <Card>
      <View style={styles.containerStyle}>
        <Text style={styles.cardHeader}>{props.title}</Text>
        {/* <Text style={{ marginLeft: 60 }}>{props.genre}</Text> */}
        <View style={{ width: 400, height: 400 }}>
          <Image style={styles.imageStyle} 
            source={{ uri: `${props.imageUrl}` }} 
            // resizeMode="contain"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>View More Details</Text>
      </TouchableOpacity>
    </Card>
  )
}

export { FeedCard }

const styles = {
  containerStyle: {
    flex: 1,
    alignSelf: "center",
    // width: 500,
  },
  imageStyle: {
    flex: 1,
    alignSelf: "center",
    // resizeMode: "contain",
    aspectRatio: 0.9,
  },
  cardHeader: {
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
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
