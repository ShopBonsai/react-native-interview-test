import React, { Component } from "react";
import { TouchableOpacity, Image, StyleSheet} from "react-native";
import commonStyles from "../styles/commonStyles";
const likedThumb = require("../../assets/images/likedThumb.png");
const unlikedThumb = require("../../assets/images/unlikedThumb.png");

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: 25,
    height: 22,
  },
  likeRow: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    marginRight: 18,
    borderRadius: 3,
  },
});

export default class Like extends Component {

  render() {
      // conditionally renders the image based on parent component"s like
      const image = this.props.like ? likedThumb : unlikedThumb

    return (
      <TouchableOpacity 
        style={styles.likeRow}
        onPress={this.props.likePressed}
      >
        <Image style={commonStyles.icon} source={image} />
      </TouchableOpacity>
    )
  }
}