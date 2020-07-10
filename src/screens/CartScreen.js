import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { CartItem, SwipeableRow, Button } from "../components"
import { Theme } from "../constants";
import { HeaderHeight } from "../constants/Utils";

import { connect } from 'react-redux'
import { increaseQuantity, decreaseQuantity, remove } from '../services/cart/action'
import { totalCost, getTotalPerItem, totalItemsInCart } from '../services/cart/selectors'

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalCost: totalCost(state),
    getTotalPerItem: getTotalPerItem(state),
    totalItemsInCart: totalItemsInCart(state)
  }
}

class CartScreen extends React.Component {

  async removeFromCart(item) {
    const { dispatch } = this.props
    await dispatch(remove(item))
  }

  async increment(item) {
      const { dispatch } = this.props
      await dispatch(increaseQuantity(item))
  }

  async decrement(item) {
      const { dispatch } = this.props
      await dispatch(decreaseQuantity(item))
  }

  render() {
    const { getTotalPerItem } = this.props
    console.log()
    return ( 
      <View style={styles.container}>
        <View style={styles.containerCart}>
          <ScrollView 
            horizontal={false}
            showsHorizontalScrollIndicator={false}
          >
          { getTotalPerItem.map((item) => (
            <SwipeableRow onPressRemove={this.removeFromCart.bind(this, item)} key={item.product.id}>
              <CartItem
                name={item.product.name}
                price={item.product.price}
                source={item.product.image}
                quantity={item.product.quantity}
                onPressDecrement={this.decrement.bind(this, item)}   
                onPressIncrement={this.increment.bind(this, item)} 
              />
            </SwipeableRow>
          ))}
          </ScrollView>
        </View>
        <View style={styles.payButton}>
          <Button>
            <Text style={styles.buttonText}>Ir a pagar</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(CartScreen);

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontFamily: "Muli",        
    fontSize: 20,
    fontWeight: "bold",
    color: 'white'
  },
  containerCart: {
    width: Theme.SIZES.WIDTH,
    height: "88%",
  },
  payButton: {
    width: Theme.SIZES.WIDTH,
    height: HeaderHeight*1.5,
  }
}); 