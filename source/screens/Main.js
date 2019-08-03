import React, { Component } from "react"
import PropTypes from "prop-types"
import { FlatList } from "react-native"

import LoadingMovies from "../molecules/loading-movies/LoadingMovies"
import MovieTicket from "../organisms/movie-ticket/MovieTicket"

export default class Main extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getMovieTickets()
  }

  keyExtractor = (item) => item.id

  render() {
    const { store } = this.props

    if (store.fetching) {
      return <LoadingMovies />
    }

    return <FlatList data={store.data} keyExtractor={this.keyExtractor} renderItem={MovieTicket} />
  }
}

Main.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  store: PropTypes.objectOf(PropTypes.any),
}
