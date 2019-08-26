import React, { Component } from "react"
import { ListView, View } from "react-native"
import { connect } from "react-redux"

import MovieItem from "../molecules/MovieItem"
import { Header, Spinner } from "../atoms"
import * as actions from "../redux/actions"

import { DETAIL } from './index';

class MovieList extends Component {
  componentWillMount() {
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
    return <MovieItem movie={movie} movieSelect={this.movieSelected}/>
  }

  render() {
		const { movies } = this.props
    if (movies.length > 0) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      })
      this.dataSource = ds.cloneWithRows(movies)
      return (
        <View style={{ flex: 1 }}>
          <Header headerText="Movies" />
          <ListView dataSource={this.dataSource} renderRow={this.renderRow} />
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
  return { movies: state.movies.movies }
}
const mapDispatchToProps = dispatch => ({
  fetchMovies: (skip, limit) => {
    dispatch(actions.fetchMovies(skip, limit))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
