import React, { Component } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
    }
  }

  handleLike = () => {
    const newState = !this.state.liked
    this.setState({ liked: newState })
  }

  render() {
    const likedHeart = require("../assets/images/heart_red.png")
    const unlikedHeart = require("../assets/images/heart_outline.png")
    const heart = this.state.liked ? likedHeart : unlikedHeart
    const message = this.state.liked ? "Liked" : "Like"

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.likeButton} onPress={this.handleLike}>
          <Image style={styles.image} source={heart} />
          <Text style={{ fontSize: 12 }}>{message}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    resizeMode: "contain",
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likeButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    alignSelf: "flex-start",
    padding: 3,
    borderRadius: 3,
    width: 65,
  },
})
