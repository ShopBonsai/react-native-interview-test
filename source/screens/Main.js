import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text, ScrollView } from "react-native"

import LoadingMovies from "../molecules/loading-movies/LoadingMovies"

export default class Main extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getMovieTickets()
  }
  render() {
    const { store } = this.props
    if (store.fetching) {
      return <LoadingMovies />
    }
    return (
      <ScrollView>
        <Text>Movies</Text>
      </ScrollView>
    )
  }
}

Main.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  store: PropTypes.objectOf(PropTypes.any),
}
