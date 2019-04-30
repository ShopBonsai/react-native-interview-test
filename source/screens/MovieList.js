import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../ducks/movies";
import { MovieThumbnail } from "../components";

class MovieList extends Component {
  componentDidMount() {
    const { getInitialPage } = this.props;
    getInitialPage();
  }

  _movieKeyExtractor = (item) => item._id.$oid;

  _handleEndReached = () => {
    const { getNextPage } = this.props;
    getNextPage();
  };

  _handleOnMoviePress = () => {
    // const { navigator } = this.props;
    // navigator.push({
    //   screen: MAIN,
    // });
  };

  render() {
    const { movies } = this.props;

    return (
      <FlatList
        data={movies}
        keyExtractor={this._movieKeyExtractor}
        onEndReached={this._handleEndReached}
        onEndReachedThreshold={0.7}
        renderItem={({ item }) => <MovieThumbnail movie={item} onPress={this._handleOnMoviePress} />}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = (state) => ({
  state: state,
  movies: state.movies.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
