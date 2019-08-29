import React, { Component } from "react"
import PropTypes from "prop-types"
import { ListView, View } from "react-native"
import { connect } from "react-redux"

import MovieItem from "../molecules/MovieItem"
import { Header, Spinner } from "../atoms"
import * as actions from "../redux/actions"

import { DETAIL } from "../screens"

/**
 * MoviesList class Component to show list movies.
 *
 * @property {Function} fetchFavourites - To get the favourite movies list.
 * @property {Function} fetchMovies - Get the list of movies.
 * @property {bool} isLoading - If movies list is fetching in progress.
 * @property {number} limit - per page movie list limit.
 * @property {Object} movies - List of movies.
 * @property {Object} navigator - Navigation.
 * @property {number} skip - How many movies to skip while fetching.
 * @returns {element} List of movies.
 */
class MovieList extends Component {
  UNSAFE_componentWillMount() {
    const { fetchFavourites, fetchMovies } = this.props
    fetchMovies(0, 10)
    fetchFavourites()
  }
  movieSelected = movieId => {
    this.props.navigator.push({
      screen: DETAIL,
      title: "Movie Detail",
      passProps: { movieId },
    })
  }
  renderRow = movie => {
    return <MovieItem movie={movie} movieSelect={this.movieSelected} />
  }
  fetchMore = () => {
    const { limit, skip } = this.props
    this.props.fetchMovies(skip, limit)
  }
  render() {
    const { isLoading, movies } = this.props
    if (movies.length > 0) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      })
      this.dataSource = ds.cloneWithRows(movies)
      return (
        <View style={{ flex: 1 }}>
          <Header headerText="Movies" />
          <ListView
            onEndReached={this.fetchMore}
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
          {isLoading ? (
            <View style={{ height: 50 }}>
              <Spinner />
            </View>
          ) : (
            []
          )}
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Spinner />
        </View>
      )
    }
  }
}
MovieList.propTypes = {
  fetchFavourites: PropTypes.func,
  fetchMovies: PropTypes.func,
  isLoading: PropTypes.bool,
  limit: PropTypes.number,
  movies: PropTypes.arrayOf(PropTypes.object),
  navigator: PropTypes.object,
  skip: PropTypes.number,
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    isLoading: state.movies.isLoading,
    skip: state.movies.skip,
    limit: state.movies.limit,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchMovies: (skip, limit) => {
    dispatch(actions.fetchMovies(skip, limit))
  },
  fetchFavourites: () => {
    dispatch(actions.fetchFavourites())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
