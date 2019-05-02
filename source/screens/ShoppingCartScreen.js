import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../ducks/movies";
import { EmptyCart, ShoppingCartTemplate } from "../components";

class ShoppingCart extends Component {
  state = {
    cart: [],
    subtotal: 0,
  };

  componentWillReceiveProps(nextProps) {
    const { cart } = this.props;

    if (nextProps.cart !== cart) {
      if (nextProps.cart.length > 0) {
        let subtotal = 0;
        nextProps.cart.map((movie) => {
          subtotal += movie.price;
        });
        this.setState({ cart: nextProps.cart, subtotal });
      } else {
        this.setState({ cart: nextProps.cart, subtotal: 0 });
      }
    }
  }

  _handleRemoveMovie = (movieId) => {
    const { removeFromCart } = this.props;
    removeFromCart(movieId);
  };

  render() {
    const { cart, subtotal } = this.state;

    if (cart.length === 0) {
      return <EmptyCart />;
    } else {
      return <ShoppingCartTemplate cart={cart} onRemoveItem={this._handleRemoveMovie} subtotal={subtotal} />;
    }
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = (state) => ({
  state: state,
  cart: state.movies.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
