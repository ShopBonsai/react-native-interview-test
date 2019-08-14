import React, { Component } from "react"
import PropTypes from "prop-types"
import { FlatList, ActivityIndicator, View } from "react-native"
import { Divider } from "react-native-elements"

import LoadingMovies from "../molecules/loading-movies/LoadingMovies"
import ConnectedMovieTicket from "../containers/connectedMovieTicket"

export default class Main extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.getMovieTickets()
  }

  keyExtractor = (item) => item.id

  renderItem = ({ item }) => <ConnectedMovieTicket item={item} />

  fetchMoreMovies = () => {
    const {
      actions,
      store: { currentLimit, currentSkip },
    } = this.props
    actions.getMovieTickets(currentSkip, currentLimit, true)
  }

  render() {
    const {
      store: { data, fetching },
    } = this.props

    if (fetching) {
      return <LoadingMovies />
    }

    return (
      <FlatList
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        onEndReached={this.fetchMoreMovies}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View style={{ marginBottom: 24, marginTop: 24 }}>
            <ActivityIndicator />
          </View>
        }
        ItemSeparatorComponent={Divider}
      />
    )
  }
}

Main.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  store: PropTypes.objectOf(PropTypes.any),
}
