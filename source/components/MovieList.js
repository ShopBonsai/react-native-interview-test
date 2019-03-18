import React, { Component } from "react";
import { ActivityIndicator, FlatList, Image, 
  StyleSheet, View } from "react-native";
import MovieListItem from "./MovieListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 65,
  },
  loading:{
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 200,
  }
});

export default class Movies extends Component {

  // The states needed for re-rendering are to check loading and the list of movies
  state = {
    isLoading: true,
    movies: {},
  }

  // Function to get the list of movies based on page number
  getMovies = () => {
    fetch("https://us-central1-bonsai-interview-endpoints.cloudfunctions.net"+
    "/movieTickets?skip="+this.props.page*10+"&limit=10")
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return new Error("Something went wrong ...")
        }
      })
      .then(movies => this.setState({ movies, isLoading: false }))
      .catch(error => {
          console.error(error);
          this.setState({ isLoading: false});
      });
  }

  // Initial Render
  componentDidMount(){
    this.getMovies();
  }

  // Good use of React"s life cycle to prevent excess re-rendering
  componentDidUpdate(prevProps) {
    if(prevProps.page !== this.props.page){
      this.setState({ isLoading: true});
      this.getMovies();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <ActivityIndicator 
            style={styles.loading}
            size="large"
            color="#0000ff"
          />
        ) : (
          <FlatList
            style={{ marginTop: 5, marginBottom: 5 }}
            data={this.state.movies}
            keyExtractor={item => item._id.$oid}
            renderItem={({ item }) => (
              <MovieListItem item={item} />
            )}
          />
        )}
      </View>
    )
  }
}