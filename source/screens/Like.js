import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const likedHeart = require("../../assets/images/likedThumb.png");
const unlikedHeart = require("../../assets/images/unlikedThumb.png");

export default class Like extends Component {

  render() {
    const image = this.props.like ? likedHeart : unlikedHeart

    return (
    <TouchableOpacity style={styles.likeRow} onPress={this.props.likePressed}>
        <Image style={styles.image} source={image} />
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    image: {
      resizeMode: "contain",
      width: 25,
      height: 22,
      marginRight: 5,
    },
    likeRow: {
      flexDirection: "row",
      alignSelf: "flex-end",
      alignItems: "center",
      marginRight: 18,
      borderRadius: 3,
    },
  })