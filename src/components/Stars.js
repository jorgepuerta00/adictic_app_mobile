import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon'
import { Theme } from '../constants'

class Stars extends React.Component {

    _renderFiveStar(size, active) {
        return (
            <View style={[styles.container, active&&styles.active]}>
                <TouchableOpacity>
                    <Icon
                        size={size}
                        name={'star-selected'}
                        color={Theme.COLORS.MUTED}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        size={size}
                        name={'star-selected'}
                        color={Theme.COLORS.MUTED}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        size={size}
                        name={'star-selected'}
                        color={Theme.COLORS.MUTED}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        size={size}
                        name={'star-selected'}
                        color={Theme.COLORS.MUTED}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        size={size}
                        name={'star-selected'}
                        color={Theme.COLORS.MUTED}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    _renderStar(size, stars, calification, score) {
        return (
            <View style={styles.container}>
                { calification.sort((a, b) => (a.id > b.id) ? 1 : -1).slice(0, stars).map((item) => (
                    <Icon
                        key={item.id}
                        size={size}
                        name={'star-selected'}
                        color={score?Theme.COLORS.MUTED:Theme.COLORS[item.color]}
                    />
                ))}
            </View>
        );
    }

    render() {
        const { rating, size, active, stars, calification, card, score, review } = this.props
        return (
            <View style={active&&styles.margin}>
                <View style={styles.container}>
                    {score||review||card? this._renderStar(size, stars, calification, score) : this._renderFiveStar(size, active)}
                    {card&&
                    <Text style={styles.text}>
                        ({rating.total})
                    </Text>}
                </View>
            </View>
        )
    }
}

export default Stars;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    margin: {
        marginLeft: Theme.SIZES.BASE*2,
        marginRight: Theme.SIZES.BASE*2,
        marginBottom: Theme.SIZES.BASE*2
    },
    active: {
        flexDirection: "row", 
        flex: 1, 
        justifyContent: "space-between", 
        alignItems: "center"
    },
    text: {
      fontFamily: "Muli",
      marginLeft: 10, 
      color: Theme.COLORS.MUTED, 
      fontSize: 16, 
      fontWeight: "bold"
    }
  });