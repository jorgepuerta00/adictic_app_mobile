import React from "react";
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Theme, Images } from "../constants"

class OnboardingScreen extends React.Component {

  routeToShop = () => {
    const { navigation } = this.props
    navigation.navigate('Shop')
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.routeToShop()}>
        <View flex style={styles.container}>
          <Image 
            resizeMode="contain" 
            source={Images.Logo} 
            style={styles.logo}
          />
          <Image 
            resizeMode="contain" 
            source={Images.Brand} 
            style={styles.brand}
          />
          <View style={styles.title}>
            <Text style={styles.title}>Tienda</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    width: Theme.SIZES.WIDTH,
    height: Theme.SIZES.HEIGHT,
    backgroundColor: Theme.COLORS.ADICTIC,
    flex: 1,
    alignItems: "center"
  },
  logo: {
    width: 168.27,
    height: 144.72,
    marginTop: Theme.SIZES.BASE*4,
    backgroundColor:'transparent'
  },
  brand: {
    width: 95.1,
    height: 20.4,
    marginTop: Theme.SIZES.BASE
  },
  title: {
    fontFamily: "Muli",
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    flex: 0.5,
    justifyContent: "center",
  }
}); 