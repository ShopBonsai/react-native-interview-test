import React, { Component } from "react";
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Dimensions } from "react-native";
import fontStyles from "../styles/fonts";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";
import Like from "./Like";
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: screenWidth,
    marginRight: 5,
  },
  container: {
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
    flexDirection: "column",
  },
  info: {
    marginLeft: 10,
    marginTop: 5,
    flexDirection: "column",
  },
});

export default class Movies extends Component {
  state = {
    // Ideally we should store what"s liked in the back-end 
    // and connect it based on id.
    like: false
  }

  // This is to allow double tapping the image to like it
  lastTap = null;
  handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
      this.likePressed();
    } else {
      this.lastTap = now;
    }
  }

  // The function called to toggle liking an image
  likePressed = () => {
    this.setState({ like: !this.state.like })
  }

  render() {
    // cleaning the input from the api to deal with nulls
    // conditionally rendering for default values
    const image = this.props.item.image == null ? 
    (<View style={styles.image}/>) :
    (<Image 
        style={styles.image} 
        source={{ uri: this.props.item.image.replace("http", "https") }} 
        key={this.props.item.image} 
    />);
    const title = this.props.item.title == null ? "No Title": this.props.item.title;
    const genre = this.props.item.genre == null ? "No Genre": this.props.item.genre;
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
              {image}
            </TouchableWithoutFeedback>
            <View style={styles.info}>
                <Text style={fontStyles.movieTitle}>
                    {title}
                </Text>
                <Text style={fontStyles.genre}>
                    {genre}
                </Text>
                <Like like={this.state.like} likePressed={() => this.likePressed()}/>
            </View>
            <View style={commonStyles.line} />
        </View>
    )}
}