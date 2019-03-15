import React, { Component } from "react"
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native"
import { Dimensions } from 'react-native'
import idx from "idx";

export default class Movies extends Component {

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
            {image}
            <View style={styles.info}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.genre}>
                    {genre}
                </Text>
            </View>
            <View style={styles.line} />
        </View>
    )}
}
const screenWidth = Dimensions.get('window').width

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
    marginRight: "auto",
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