import React, { Component } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Dimensions } from 'react-native';
import Like from "./Like";
import idx from "idx";
const screenWidth = Dimensions.get('window').width;

export default class Movies extends Component {
  state = {
    like: false
  }

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

  likePressed = () => {
    this.setState({ like: !this.state.like })
  }

  render() {
    let imageURI = idx(this.props, _ => _.item.image) || "";
    const image = imageURI == "" ? 
    (<View style={styles.image}/>) : 
    (<Image 
        style={styles.image} 
        source={{ uri: imageURI.replace('http', 'https') }} 
        key={imageURI} 
    />);
    const title = this.props.item.title == null ? "Null": this.props.item.title;
    const genre = this.props.item.genre == null ? "Null": this.props.item.genre;
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
              {image}
            </TouchableWithoutFeedback>
            <View style={styles.info}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.genre}>
                    {genre}
                </Text>
                <Like like={this.state.like} likePressed={() => this.likePressed()}/>
            </View>
            <View style={styles.line} />
        </View>
    )}
}

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
  title: {
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: "#000000",
    marginRight: 10,
  },
  genre: {
    fontSize: 14,
    fontFamily: 'Arial',
    fontWeight: 'normal',
    color: "#4B4B4B",
    marginRight: 10,
  },
  line:{
    marginTop: 10,
    height: 2,
    backgroundColor: '#F5F5F5',
    width: screenWidth,
  }
})