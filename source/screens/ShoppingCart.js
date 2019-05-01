import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../ducks/movies";
import { SubTotal, ShoppingCartItem, EmptyCart } from "../components";

class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  componentWillReceiveProps(nextProps) {
    const { cart } = this.props;

    if (nextProps.cart !== cart) {
      this.setState({ cart: nextProps.cart });
    }
  }

  _movieKeyExtractor = (item) => item.id;

  render() {
    const { cart } = this.state;

    if (cart.length === 0) {
      return <EmptyCart />;
    } else {
      return (
        <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
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
          <SubTotal />
        </View>
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
