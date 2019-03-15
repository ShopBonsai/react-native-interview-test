import React, { Component } from "react"
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native"
import MovieListItem from "./MovieListItem"

export default class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      movies: {},
    }
  }

  getMovies = () => {
    fetch("https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets?skip="+this.props.page*10+"&limit=10")
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

  componentDidMount(){
    this.getMovies();
  }

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
          <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 65,
  },
  loading:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 200,
  }
})