import React, { Component } from "react"
import PropTypes from "prop-types"
import { FlatList } from "react-native"

import LoadingMovies from "../molecules/loading-movies/LoadingMovies"
import ConnectedMovieTicket from "../containers/connectedMovieTicket"

export default class Main extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getMovieTickets()
  }

  keyExtractor = (item) => item.id

  renderItem = ({ item }) => <ConnectedMovieTicket item={item} />

  render() {
    const { store } = this.props

    if (store.fetching) {
      return <LoadingMovies />
    }

    return (
      <FlatList data={store.data} keyExtractor={this.keyExtractor} renderItem={this.renderItem} />
    )
  }
}

Main.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  store: PropTypes.objectOf(PropTypes.any),
}
