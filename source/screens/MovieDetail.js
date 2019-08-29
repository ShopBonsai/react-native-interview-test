import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Image, Text, ScrollView } from "react-native"
import { connect } from "react-redux"

import { Button } from "../atoms"
import MovieDetailItem from "../molecules/MovieDetailItem"
import Dimensions from "../configs/Dimensions"
import * as actions from "../redux/actions"

const style = {
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
/**
 * MovieDetail class Component to show a single movie detail.
 *
 * @property {Function} addToFavourites - To add/remove the movie from favourite list.
 * @property {Object} favourites - List of favourite movies.
 * @property {string} movieId - id for the movie which detail neet to be show.
 * @property {Object} movies - List of movies.
 * @returns {element} Detail of a movie.
 */
class MovieDetail extends Component {
  onFavouritePress = () => {
    const { addToFavourites, movieId } = this.props
    addToFavourites(movieId)
  }
  render() {
    const { favourites, movieId, movies } = this.props
    const selectedMovie = movies.find(movie => movie.id === movieId)
    const isFavourite = favourites[movieId]
    if (selectedMovie) {
      const { date, genre, image, inventory, price, title } = selectedMovie
      return (
        <View style={style.container}>
          <Image style={style.moviePosterStyle} source={image} />
          <ScrollView style={style.detailContainer}>
            <Text style={style.movieTitle}>{title}</Text>
            <MovieDetailItem label="Show Time:" value={date} />
            <MovieDetailItem label="Genre:" value={genre.join(" | ")} />
            <MovieDetailItem label="Tickets Left:" value={inventory} />
            <MovieDetailItem label="Ticket Price:" value={`$${price}`} />
            <View style={style.detailLastRow}>
              <Button style={style.movieDetailBottons} onPress={this.onFavouritePress}>
                {isFavourite ? "Unlike" : "Like"}
              </Button>
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
MovieDetail.propTypes = {
  addToFavourites: PropTypes.func,
  favourites: PropTypes.objectOf(PropTypes.number),
  movieId: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.object),
}
const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    favourites: state.favourites.favourites,
  }
}
const mapDispatchToProps = dispatch => ({
  addToFavourites: id => {
    dispatch(actions.addToFavourites(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
