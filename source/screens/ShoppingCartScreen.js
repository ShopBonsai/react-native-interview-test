import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../ducks/movies";
import { Subtotal, ShoppingCartItem, EmptyCart, ShoppingCartTemplate } from "../components";

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

  _movieKeyExtractor = (item) => item.id;

  render() {
    const { cart, subtotal } = this.state;

    if (cart.length === 0) {
      return <EmptyCart />;
    } else {
      return (
        <ShoppingCartTemplate>
          <View style={{ flex: 1 }}>
            <FlatList
              data={cart}
              keyExtractor={this._movieKeyExtractor}
              renderItem={({ item }) => (
                <View>
                  <ShoppingCartItem movie={item} />
                </View>
              )}
            />
          </View>
          <Subtotal subtotal={subtotal} />
        </ShoppingCartTemplate>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = (state) => ({
  state: state,
  cart: state.movies.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
