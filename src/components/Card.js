import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import PropTypes from "prop-types";
import Touchable from './Touchable'
import Icon from './Icon'
import Stars from './Stars'
import { Theme } from '../constants'
import { currencyFormat } from '../constants/Utils'

class Card extends React.Component {
    render() {

        const {
            title,
            image,
            size,
            price,
            discount,
            description,
            rating,
            onPress
        } = this.props;

        const large = size.includes("large")
        const medium = size.includes("medium")
        const small = size.includes("small")
        const tiny = size.includes("tiny")

        const container = large ? styles.containerLarge : medium ? styles.containerMedium : small ? styles.containerSmall : styles.containerTiny
        const cover = large ? styles.coverLarge : medium ? styles.coverMedium : small ? styles.coverSmall : styles.coverTiny
        const imageContainer = large ? styles.imageLarge : medium ? styles.imageMedium : small ? styles.imageSmall : styles.imageTiny
        const resizeMode = large ? "cover" : "contain"

        return (
            <View>
                <Touchable onPress={onPress} >
                    <View>
                    <View style={container}>
                        <View style={cover}>
                            <Image 
                                resizeMode={resizeMode} 
                                style={imageContainer} 
                                source={{ uri: image }} 
                            />
                            {small && 
                              <View style={styles.productdetail}>
                                  <View style={{flex: 1}}>                                  
                                      <Text style={styles.title}>{title}</Text>
                                      <View style={styles.flex}>
                                          <Text style={discount>0?styles.noprice:styles.price}>{currencyFormat(price)}</Text>
                                          {discount>0&&<Text style={styles.discount}>{currencyFormat(discount)}</Text>}
                                      </View>
                                  </View>
                                  <View>
                                      <Icon
                                          name={'favorite'}
                                          size={20}
                                          color={Theme.COLORS.MUTED}
                                      />
                                  </View>
                              </View>
                            }
                            {tiny && 
                              <View style={styles.productdetail}>
                                  <View style={{flex: 1}}>                                  
                                      <Text numberOfLines={1} style={styles.title}>{title}</Text>
                                  </View>
                                  <View>
                                      <Icon
                                          name={'favorite'}
                                          size={13}
                                          color={Theme.COLORS.MUTED}
                                      />
                                  </View>
                              </View>
                            }                        
                        </View>
                    </View>
                    {large && 
                      <View style={styles.productdetailextended}>
                          <Text style={styles.titlelarge}>{title}</Text>  
                          <View style={{
                              flexDirection: "row", 
                              flex: 1, 
                              justifyContent: "space-between", 
                              alignItems: "center",
                              marginTop: 5, 
                              marginBottom: 5}}>
                            <Stars
                              card
                              rating={rating.ratings}
                              size={20}
                              calification={rating.ratings.calification}
                            />
                            <View style={styles.flex}>
                                <Text style={discount>0?styles.nopricelarge:styles.pricelarge}>{currencyFormat(price)}</Text>
                                {discount>0&&<Text style={styles.discountlarge}>{currencyFormat(discount)}</Text>}
                            </View>
                          </View>
                          <Text style={styles.description}>{description}</Text>
                      </View>
                    }
                    </View>
                </Touchable>
            </View>
        );
    }
}

Card.propTypes = {
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([
        'small',
        'medium',
        'large',
        'tiny'
      ])
    ]),
    source: PropTypes.string
  };
  
  export default Card;

  const styles = StyleSheet.create({
    containerLarge: {
      height: Theme.SIZES.HEIGHT/2.5,
      marginTop: Theme.SIZES.BASE,
      marginRight: Theme.SIZES.BASE, 
      marginLeft: Theme.SIZES.BASE,
      borderRadius: 14,
      overflow: "hidden"
    },
    coverLarge: {
      width: "100%",
      height: "120%"
    },
    imageLarge: {
      width: "100%",
      height: "100%"
    },
    containerMedium: {
      height: Theme.SIZES.HEIGHT/3.5,
      borderRadius: 14,
      marginRight: Theme.SIZES.BASE, 
      marginLeft: Theme.SIZES.BASE
    },
    coverMedium: {
      width: "100%",
      height: "100%"
    },
    imageMedium: {
      width: "100%",
      height: "100%"
    },
    containerSmall: {
      width: (Theme.SIZES.WIDTH/2) - (Theme.SIZES.BASE*1.5),
      height: 240,
      borderRadius: 14,
      marginLeft: Theme.SIZES.BASE
    },
    coverSmall: {
      width: "100%",
      height: "90%",
    },
    imageSmall: {
      width: "100%",
      height: "100%"
    },
    containerTiny: {
      width: 120,
      height: 160,
      borderRadius: 14,
      marginLeft: Theme.SIZES.BASE,
    },
    coverTiny: {
      width: "100%",
      height: "90%",
    },
    imageTiny: {
      width: "100%",
      height: "100%"
    },
    productdetail: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: -10
    },
    flex: {
      flexDirection: 'row'
    },
    title: {
      fontSize: 12,
      fontWeight: "bold"
    },
    price: {
      fontFamily: "Muli",
      fontSize: 12,
      color: Theme.COLORS.TEXT
    },
    noprice: {
      fontFamily: "Muli",
      fontSize: 12,
      color: Theme.COLORS.TEXT,
      textDecorationLine: 'line-through'
    },
    discount: {
      fontFamily: "Muli",
      fontSize: 12,
      color: Theme.COLORS.TEXT,
      marginLeft: 5
    },
    productdetailextended: {
      marginRight: Theme.SIZES.BASE, 
      marginLeft: Theme.SIZES.BASE
    },
    pricelarge: {
      fontFamily: "Muli",
      fontSize: 24,
      color: Theme.COLORS.PRIMARY
    },
    nopricelarge: {
      fontFamily: "Muli",
      fontSize: 24,
      color: Theme.COLORS.TEXT,
      textDecorationLine: 'line-through'
    },
    discountlarge: {
      fontFamily: "Muli",
      fontSize: 24,
      color: Theme.COLORS.PRIMARY,
      marginLeft: 5
    },
    titlelarge: {
      fontFamily: "Muli",
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10
    },
    description: {
      fontFamily: "Muli",
      fontSize: 16,
      fontWeight: "normal",
      color: Theme.COLORS.TEXT
    },    
  });