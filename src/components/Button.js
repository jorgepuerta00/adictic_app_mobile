import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto'
import { Theme } from '../constants'

class Button extends React.Component {

    render() {

        const {
            tiny,
            small,
            cart,
            children,
            onPress,
            onPressDecrement,
            onPressIncrement
        } = this.props;

        const dimensionsCart = small ? styles.cartButtonSmall : tiny ? styles.cartButtonTiny : styles.cartButton
        const dimensionsButton = small ? styles.buttonSmall : tiny ? styles.cartButtonTiny : styles.button
        const iconDimension = small ? 19 : 12

        return (
            <View style={!cart&&{flex:1, justifyContent: "center", alignItems: "center"}}>
                {cart?
                <View style={dimensionsCart}>
                    <View style={{flexDirection:"row", flex: 1, justifyContent: "space-between", alignItems: "center"}}>
                        <TouchableOpacity onPress={onPressDecrement} >
                            <Icon
                                size={iconDimension}
                                name="minus-a"
                                color={Theme.COLORS.MUTED}
                            />
                        </TouchableOpacity>
                        {children}
                        <TouchableOpacity onPress={onPressIncrement} >
                            <Icon
                                size={iconDimension}
                                name="plus-a"
                                color={Theme.COLORS.MUTED}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={dimensionsButton}>
                    <TouchableOpacity 
                        onPress={onPress} 
                            style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        {children}
                    </TouchableOpacity>
                </View>
                }
            </View>
        )
    }
}

export default Button;

const styles = StyleSheet.create({
    button: {
        width: Theme.SIZES.WIDTH * 0.92,
        height: 50,
        shadowRadius: 0,
        shadowOpacity: 0,
        borderRadius: 10,
        backgroundColor: Theme.COLORS.BUTTON
    },
    cartButton: {
        width: Theme.SIZES.WIDTH * 0.92,
        height: 50,
        shadowRadius: 0,
        shadowOpacity: 0,
        borderRadius: 10,
        backgroundColor: Theme.COLORS.WHITE,
        elevation: 3,
        padding: Theme.SIZES.BASE
    },
    buttonSmall: {
        width: Theme.SIZES.WIDTH * 0.60,
        height: 50,
        shadowRadius: 0,
        shadowOpacity: 0,
        borderRadius: 10,
        backgroundColor: Theme.COLORS.BUTTON
    },
    cartButtonSmall: {
        width: Theme.SIZES.WIDTH * 0.30,
        height: 50,
        shadowRadius: 0,
        shadowOpacity: 0,
        borderRadius: 10,
        backgroundColor: Theme.COLORS.WHITE,
        elevation: 3,
        padding: Theme.SIZES.BASE
    },
    buttonTiny: {
        width: 80,
        height: 30,
        borderRadius: 10,
        backgroundColor: Theme.COLORS.BUTTON
    },
    cartButtonTiny: {
        width: 80,
        height: 30,
        borderRadius: 10,
        backgroundColor: Theme.COLORS.WHITE,
        elevation: 8,
        padding: 8,
        shadowColor: Theme.COLORS.SHADOW
    }
  }); 