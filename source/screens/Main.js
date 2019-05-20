import React, { Component } from "react"
import { ActivityIndicator, View } from "react-native"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { fetchMovieTickets } from "../config/movie-tickets"

import FlatList from "../templates/MovieFlatList"

import styles from "./Styles/MainStyle"

class Main extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.props.dispatch(fetchMovieTickets(() => this.requestSuccess(), () => this.requestFailed()))
  }

  requestSuccess = () => {
    // eslint-disable-next-line react/no-set-state
    this.setState({ isLoading: false })
  }

  requestFailed = () => {
    // eslint-disable-next-line react/no-set-state
    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading } = this.state
    return (
      <View style={styles.mainView}>
        {isLoading ? (
          <View style={styles.spinnerView}>
            <ActivityIndicator color="white" size="large" />
          </View>
        ) : (
          <FlatList />
        )}
      </View>
    )
  }
}

const mapStateToProsp = state => {
  return {
    tickets: state.Tickets.tickets,
  }
}

export default connect(mapStateToProsp)(Main)
