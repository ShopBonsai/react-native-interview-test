import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../ducks/movies";
import { MovieListTemplate } from "../components";
import { MOVIEDETAILS } from ".";

class MovieList extends Component {
  componentDidMount() {
    const { getInitialPage } = this.props;
    getInitialPage();
  }

  _handleEndReached = () => {
    const { getNextPage } = this.props;
    getNextPage();
  };

  _handleOnMoviePress = (movie) => {
    const { navigator, setMovieDetails } = this.props;

    setMovieDetails(movie);
    navigator.push({
      screen: MOVIEDETAILS,
    });
  };

  render() {
    const { movies } = this.props;

    return (
      <MovieListTemplate
        movies={movies}
        onEndReached={this._handleEndReached}
        onMoviePress={this._handleOnMoviePress}
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
