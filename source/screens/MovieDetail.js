import React, { Component } from "react"
import { View, Image, Text, ScrollView } from "react-native"
import { connect } from "react-redux"

import { Button } from "../atoms"
import MovieDetailItem from '../molecules/MovieDetailItem'
import Dimensions from '../configs/Dimensions'
import * as actions from "../redux/actions"

const style = {
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  moviePosterStyle: {
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight / 2,
  },
  detailContainer: {
    margin: 10,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  detailLastRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  movieDetailBottons: {
    flex: 1,
  },
}

class MovieList extends Component {
  render() {
    const { movieId, movies } = this.props
    const selectedMovie = movies.find(movie => movie.id === movieId)
    if (selectedMovie) {
      const { date, genre, image, inventory, price, title } = selectedMovie
      return (
        <View style={style.container}>
          <Image style={style.moviePosterStyle} source={{ uri: image }} />
          <ScrollView style={style.detailContainer}>
            <Text style={style.movieTitle}>{title}</Text>
            <MovieDetailItem label="Show Time:" value={date} />
            <MovieDetailItem label="Genre:" value={genre.join(" | ")} />
            <MovieDetailItem label="Tickets Left:" value={inventory} />
            <MovieDetailItem label="Ticket Price:" value={`$${price}`} />
            <View style={style.detailLastRow}>
              <Button style={style.movieDetailBottons}>Add to Cart</Button>
              <Button style={style.movieDetailBottons}>Add To Favourites</Button>
            </View>
          </ScrollView>
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Text>Movie Not Found</Text>
        </View>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchMovies: (skip, limit) => {
    dispatch(actions.fetchMovies(skip, limit))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
