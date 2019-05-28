/*
 * @providesModule MovieFlatList
 */

import React, { Component } from "react"
import { View, FlatList } from "react-native"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import MovieCards from "../organisms/MovieCards"

import styles from "./Styles/MovieFlatListStyle"

class MovieFlatList extends Component {
  static propTypes = {
    tickets: PropTypes.any,
  }
  render() {
    const { tickets } = this.props
    return (
      <FlatList
        data={tickets}
        // eslint-disable-next-line react/jsx-no-bind
        renderItem={item => <MovieCards movie={item} />}
        ListFooterComponent={<View style={styles.footerComponent} />}
        showsVerticalScrollIndicator={false}
      />
    )
  }
}

const mapStateToProsp = state => {
  return {
    tickets: state.Tickets.tickets,
  }
}

export default connect(mapStateToProsp)(MovieFlatList)
