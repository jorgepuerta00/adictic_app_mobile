import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Theme } from '../constants'
import { thumbMeasure, HeaderHeight } from '../constants/Utils'
import { Button } from '../components'

class CartItem extends React.Component {
    render() {
        const { name, price, source, quantity, onPressDecrement, onPressIncrement } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.cardItem}>
                    <View style={styles.Image}>
                        <Image
                            source={{uri: source}}
                            resizeMode={"contain"}
                            style={styles.smallStyle}
                        />
                    </View>
                    <View style={styles.product}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.price}>${price}</Text>
                    </View>
                    <View style={styles.button}>
                        <Button
                            tiny
                            cart
                            onPressDecrement={onPressDecrement}   
                            onPressIncrement={onPressIncrement} 
                        >
                            <Text style={styles.buttonCartText}>{quantity}</Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

export default CartItem;

const styles = StyleSheet.create({
    cardItem: {
        width: Theme.SIZES.WIDTH * 0.95,
        height: 70,
        backgroundColor: Theme.COLORS.WHITE,
        elevation: 3,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        padding: Theme.SIZES.BASE
    },
    name: {
        fontFamily: "Muli",
        fontSize: 14,
        fontWeight: "bold",
        color: Theme.COLORS.BLACK
    },
    price: {
        fontFamily: "Muli",
        fontSize: 18,
        fontWeight: "400",
        color: Theme.COLORS.GREY
    },
    smallStyle: {
        width: thumbMeasure,
        height: thumbMeasure,
        borderRadius: 8,
    },
    buttonCartText: {
        fontFamily: "Muli",        
        fontSize: 15,
        fontWeight: "normal",
        color: 'black'
    },
    product: {
        flex: 1,
        padding: 10,
    },
    container: {
        width: Theme.SIZES.WIDTH,
        height: HeaderHeight*1.5,
        paddingTop: 5,
        paddingLeft: 10
    }
  }); 