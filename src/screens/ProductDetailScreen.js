import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Card, Touchable, Tabs, Separator, Button } from '../components';
import { Theme } from '../constants';

import { connect } from 'react-redux'
import { add } from '../services/cart/action'
import { totalCost, getTotalPerItem } from '../services/cart/selectors'

const mapStateToProps = (state) => {
  return {
      cart: state.cart,
      totalCost: totalCost(state),
      getTotalPerItem: getTotalPerItem(state)
  }
}

class ProductDetailScreen extends React.Component {

  state = {
    favorite: false,
    quantity: 0
  };

  componentDidMount() {
    const { cart } = this.props;
    const { product } = this.props.route.params.item

    const found = cart.quantityById[product.id];

    if (found === undefined){
        this.setState({
            quantity: 0
        })
    }
    else{
        this.setState({
            quantity: found.quantity
        })
    }
  }

  changeStatefavorite(favorite) {
    this.setState({ favorite: !favorite })
  }

  increment() {
    const { quantity } = this.state
    this.setState({
        quantity: quantity + 1
    })
  }

  decrement() {
      const { quantity } = this.state 
      if (quantity > 0) {
          this.setState({
              quantity: quantity - 1
          })
      }
  }

  async sendToCart(item){
    const { dispatch } = this.props
    await dispatch(add(item, this.state.quantity))
  }

  render() {
    const { product, related, rating } = this.props.route.params.item
    const { favorite, quantity } = this.state
    return (
      <ScrollView 
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}
      >
        <View>
          <Card
            image={product.image} 
            title={product.name}
            price={product.price}
            discount={product.discount}
            description={product.description}
            rating={rating}
            size="large"
          />  
          <View style={styles.containercolor}>
            <Text style={styles.titlelarge}>Elige un color</Text>
            <View style={{flexDirection: "row"}}>
            { product.color.map((color, index) => (
              <Touchable key={index}>
                <View style={[styles.color, {backgroundColor: Theme.COLORS[color.toUpperCase()]}]}/>
              </Touchable>
            ))}
            </View>                          
          </View>
          <View style={styles.containersize}>
            <Text style={styles.titlelarge}>Elige una talla</Text>
            <View style={{flexDirection: "row"}}>
            { product.size.map((size, index) => (
              <Touchable key={index}>
                <View style={styles.size}>
                  <Text style={styles.textsize}>{size}</Text>
                </View>
              </Touchable>
            ))}
            </View>                          
          </View>
          <View style={styles.containerbutton}>
            <Button
              small
              cart
              onPressDecrement={this.decrement.bind(this, product)}   
              onPressIncrement={this.increment.bind(this, product)} 
            >
              <Text style={styles.buttonCartText}>{quantity}</Text>
            </Button>
            <Button
              small
              onPress={this.sendToCart.bind(this, product)}
            >
              <Text style={styles.buttonText}>Agregar</Text>
            </Button>
          </View>
          <View style={styles.containerdiscount}>
            <Text style={styles.titlelarge}>Gana un porcentaje por colaboración</Text>
            <View style={styles.discount}>
              <Text style={styles.percentage}>6%</Text>
              <Text style={styles.textdiscount}>equivalente a</Text>
              <Text style={styles.pricediscount}>$12,9</Text>
            </View>
          </View>
          <View style={styles.relatedproducts}>
            <Text style={styles.textrelatedproducts}>Cada vez que alguien compra este producto desde tus publicaciones guardadas</Text>
            <Text style={styles.titlerelatedproducts}>Más productos de Massimo Dutti</Text>
            <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
              { related.map((item, index) => (
                <Card
                  key={index}
                  image={item.image} 
                  title={item.name}
                  size="tiny"
                />  
              ))}
              <Separator/>
            </ScrollView>
          </View>
          <View style={styles.containertabsg}>
            <Tabs rating={rating}/>            
          </View>
        </View>        
      </ScrollView>
    );
  }
}

export default connect(
  mapStateToProps, 
  null
)(ProductDetailScreen)

const styles = StyleSheet.create({
  title: {
    fontFamily: "Muli",
    color: Theme.COLORS.TEXT,
    fontSize: 18,
    textAlign: "left",
    fontWeight: "bold"
  },
  scrollview: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  titlerelatedproducts: {
    fontFamily: "Muli",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: Theme.SIZES.BASE,
    marginTop: Theme.SIZES.BASE
  },
  titlelarge: {
    fontFamily: "Muli",
    fontSize: 18,
    fontWeight: "bold",
    margin: Theme.SIZES.BASE
  },
  titleviewmore: {
    fontFamily: "Muli",
    fontSize: 16,
    fontWeight: "normal",
    color: Theme.COLORS.TEXT,
    marginRight: Theme.SIZES.BASE
  },
  color: {
    width: 43,
    height: 43,
    borderRadius: 40,
    marginLeft: Theme.SIZES.BASE,
    elevation: 1
  },
  size: {
    height: 42,
    borderRadius: 14,
    marginLeft: Theme.SIZES.BASE,
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1
  },
  discount: {
    width: 207,
    height: 36,
    borderRadius: 14,
    marginLeft: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Theme.COLORS.MUTED,
    padding: 10
  },
  textsize: {
    fontFamily: "Muli",
    fontSize: 14,
    fontWeight: "bold",
    color: Theme.COLORS.TEXT
  },
  percentage: {
    fontFamily: "Muli",
    fontSize: 18,
    fontWeight: "bold",
    color: Theme.COLORS.GREY
  },
  textdiscount: {
    fontFamily: "Muli",
    fontSize: 16,
    fontWeight: "normal",
    color: Theme.COLORS.TEXT
  },
  pricediscount: {
    fontFamily: "Muli",
    fontSize: 20,
    fontWeight: "normal",
    color: Theme.COLORS.GREY
  },
  textrelatedproducts: {
    fontFamily: "Muli",
    fontSize: 16,
    fontWeight: "normal",
    color: Theme.COLORS.TEXT,
    marginLeft: Theme.SIZES.BASE,
    marginTop: 10
  },
  productlist: {
    fontFamily: "Muli",
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: Theme.SIZES.HEIGHT
  },
  containerbutton: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    margin: Theme.SIZES.BASE
  },
  buttonText: {
    fontFamily: "Muli",        
    fontSize: 20,
    fontWeight: "bold",
    color: 'white'
  },
  buttonCartText: {
    fontFamily: "Muli",        
    fontSize: 24,
    fontWeight: "normal",
    color: 'black'
  },
  containersize: {
    marginBottom: Theme.SIZES.BASE
  }
}); 