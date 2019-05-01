import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../ducks/movies";
import { MovieThumbnail, ShoppingCartItem } from "../components";

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

    return (
      <View style={{ flex: 1, borderTopWidth: 1 }}>
        <FlatList
          data={cart}
          keyExtractor={this._movieKeyExtractor}
          renderItem={({ item }) => <ShoppingCartItem movie={item} />}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = (state) => ({
  state: state,
  cart: state.movies.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
