/* eslint-disable react/no-set-state */
/* eslint-disable react/no-deprecated */
import React, { Component } from "react"
import { FlatList, ActivityIndicator } from "react-native"
import axios from "axios"

import { FeedCard } from "./../components"

export default class Main extends Component {
  state = {
    movies: [], // will store retrieved data
    skip: 0, // stores the page count
    isLoading: false,
  }
  componentWillMount() {
    this.setState({ isLoading: true })
    this.fetchData()
  }

  fetchData = async () => {
    // makes inital get request after component has rendered
    axios
      .get(
        `https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets?skip=${
          this.state.skip
        }&limit=10`,
      )
      .then(result => {
        this.setState({
          movies: this.state.movies.concat(result.data),
          isLoading: false,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  fetchMore = () => {
    //  makes another get request when end of list reached
    this.setState({ skip: this.state.skip + 1, isLoading: true })
    this.fetchData()
  }

  renderFooter = () => {
    // footer that renders the spinner when making another fetch request
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" />
    } else {
      return null
    }
  }

  renderItem = ({ item }) => {
    // method called by flatlist to render each row element
    return <FeedCard imageUrl={item.image} title={item.title} date={item.date} genre={item.genre} />
  }

  render() {
    return (
      <FlatList
        data={this.state.movies}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={this.fetchMore}
        onEndReachedThreshold={0}
        ListFooterComponent={this.renderFooter}
      />
    )
  }
}
