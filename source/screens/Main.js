import React, { Component } from "react"
import { Text, ScrollView } from "react-native"
import MovieList from "./MovieList"
import AnimatedNavbar from "./AnimatedNavBar"

export default class Main extends Component {
  state={
    page: 0,
  }

  onLeftPressed = () => {
    if(this.state.page > 0){
      this.setState({
        page: this.state.page - 1,
      })
    }
  }

  onRightPressed = () => {
    this.setState({
      page: (this.state.page + 1)%1000,
    })
  }

  render() {
    return (
      <AnimatedNavbar 
        name={"Bonsai"}
        onLeftPress={() => this.onLeftPressed}
        onRightPress={() => this.onRightPressed}
      >
          <MovieList page={this.state.page} />
      </AnimatedNavbar>
    )
  }
}
