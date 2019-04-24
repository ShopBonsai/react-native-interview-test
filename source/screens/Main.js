/* eslint-disable react/no-deprecated */
import React, { Component } from "react"
import { ScrollView } from "react-native"
import axios from "axios"

import { FeedCard } from "./../components"

export default class Main extends Component {
  state = {
    movies: [], // will store retrieved data
  }
  componentWillMount() {
    axios
      .get(
        "https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets?skip=0&limit=10",
      )
      .then(result => {
        this.setState({ movies: result.data })
      })
      .catch(error => {
        console.log("an error occured")
      })
  }

  render() {
    return (
      <ScrollView>
        {this.state.movies.map((movie, index) => {
          return <FeedCard key={index} imageUrl={movie.image} />
        })}
      </ScrollView>
    )
  }
}
