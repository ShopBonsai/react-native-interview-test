import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../ducks/movies";
import { MovieDetailsTemplate } from "../components";

class MovieDetails extends Component {
  _handlePress = (movie) => {
    const { addToCart } = this.props;
    addToCart(movie);
  };

  render() {
    const { details, cart } = this.props;

    return <MovieDetailsTemplate movie={details} onPress={this._handlePress} cart={cart} />;
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = (state) => ({
  details: state.movies.details,
  cart: state.movies.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
