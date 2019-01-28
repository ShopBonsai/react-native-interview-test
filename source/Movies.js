import React, { Component } from "react"
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native"

import LikeButton from "./LikeButton"

export default class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      movieData: {},
      error: null,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch("https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets")
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return new Error("Something went wrong ...")
        }
      })
      .then(movieData => this.setState({ movieData, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }))
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            style={{ marginTop: 5, marginBottom: 5 }}
            data={this.state.movieData}
            keyExtractor={item => item._id.$oid}
            renderItem={({ item }) => (
              <View style={styles.movieContainer}>
                <Image style={styles.image} source={{ uri: item.image }} key={item.uri} />
                <View style={styles.movieInfo}>
                  <Text style={styles.movieTitle} numberOfLines={2}>
                    {item.title}
                  </Text>
                  <Text style={styles.movieGenre} numberOfLines={1}>
                    {item.genre}
                  </Text>
                  <LikeButton style={styles.likeButton} />
                </View>
              </View>
            )}
          />
        )}
      </View>
    )
  }
}

const posterHeight = 100
const posterWidth = 70

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: posterHeight,
    width: posterWidth,
    marginRight: 5,
  },
  movieContainer: {
    marginLeft: 10,
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
    flexDirection: "row",
  },
  movieInfo: {
    flexDirection: "column",
    marginRight: "auto",
  },
  movieTitle: {
    fontSize: 20,
    color: "#444444",
    marginRight: posterWidth,
  },
  movieGenre: {
    fontSize: 15,
    color: "#888888",
    marginRight: posterWidth,
  },
  likeButton: {
    marginTop: "auto",
  },
})
