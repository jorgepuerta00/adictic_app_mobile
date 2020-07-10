import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Spinner, Card } from '../components';
import { Theme } from '../constants';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchProductsAction from '../services/products/selectors';
import { getProductsError, getProducts, getProductsPending } from '../services/products';

function mapStateToProps (state) {
  return {
    data: getProducts(state.productsReducer),
    pending: getProductsPending(state.productsReducer),
    error: getProductsError(state.productsReducer),
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchProductsAction
}, dispatch)

class ShopScreen extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts()
  }

  shouldComponentRender() {
    if(this.props.pending === false) 
      return false;
    return true;
  }
  
  routeToDetail = (item) => {
    const { navigation } = this.props
    navigation.navigate('ProductDetail', { item })
  }

  render() {

    const { data, error } = this.props;
    
    if(this.shouldComponentRender() || data.category === undefined) {
      return (
        <Spinner
          visible={this.shouldComponentRender()}
          textContent={"Loading..."}
          animation="fade"
        />
      )
    }

    return (
      <ScrollView 
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}
      >
        {!error ? 
        <View>
          <Card image={data.category.image} size="medium"/>
          <Text style={styles.title}>Las mejores zapatillas de Madrid</Text>
          <View style={styles.productlist}>
            { data.products.map((item, index) => (
                <Card
                  key={index}
                  image={item.product.image} 
                  title={item.product.name}
                  price={item.product.price}
                  discount={item.product.discount}
                  size="small"
                  onPress={this.routeToDetail.bind(this, item)}
                />  
            ))}
          </View>
        </View>
        :
        <Text style={styles.message}>Error...</Text>}
      </ScrollView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopScreen);

const styles = StyleSheet.create({
  title: {
    fontFamily: "Muli",
    color: Theme.COLORS.TEXT,
    fontSize: 14,
    textAlign: "center"
  },
  productlist: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: Theme.SIZES.HEIGHT
  },
  scrollview: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
}); 