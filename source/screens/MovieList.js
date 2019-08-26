import React, { Component } from "react"
import { ListView, View } from "react-native"
import { connect } from "react-redux"

import MovieItem from "../molecules/MovieItem"
import { Header, Spinner } from "../atoms"
import * as actions from "../redux/actions"

import { DETAIL } from "./index"

class MovieList extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchMovies(0, 10)
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
    const { skip, limit } = this.props
    this.props.fetchMovies(skip, limit)
  }
  render() {
    const { movies, loading } = this.props
    if (movies.length > 0) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      })
      this.dataSource = ds.cloneWithRows(movies)
      return (
        <View style={{ flex: 1 }}>
          <Header headerText="Movies" />
          <ListView onEndReached={this.fetchMore} dataSource={this.dataSource} renderRow={this.renderRow} />
          {loading ? <View style={{ height: 50 }}><Spinner /></View> : []}
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

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    loading: state.movies.isLoading,
    skip: state.movies.skip,
    limit: state.movies.limit,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchMovies: (skip, limit) => {
    dispatch(actions.fetchMovies(skip, limit))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
