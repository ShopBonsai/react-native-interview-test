import React, { Component } from "react";
import MovieList from "../components/MovieList";
import AnimatedNavbar from "../components/AnimatedNavBar";

export default class Main extends Component {
  // The page is passed into the List and modified by the nav bar
  state={
    page: 0,
  }

  // To go back a page (can't go lower than 0)
  onLeftPressed = () => {
    if(this.state.page > 0){
      this.setState({
        page: this.state.page - 1,
      })
    }
  }

  // To go forward a page, loops at page 100
  // We are told there is only 1000 elements for this test
  // If there's more we can modify this easily.
  onRightPressed = () => {
    this.setState({
      page: (this.state.page + 1)%100,
    })
  }

  // Renders the app here
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
