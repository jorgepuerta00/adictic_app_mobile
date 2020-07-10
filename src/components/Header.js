import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import NavigationBar from 'react-native-navbar';
import { HeaderHeight } from '../constants/Utils'
import { Theme } from '../constants';
import Touchable from './Touchable'
import Icon from './Icon'

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    renderSave = () => {
        const { navigation } = this.props;
        return (
          <Touchable onPress={() => navigation.navigate('Cart')}>
            <Icon
                size={24}
                name={'save'}
                color={Theme.COLORS.BLACK}
            />
          </Touchable>
        )
    }

    renderNext = () => {
        const { navigation } = this.props;
        return (
          <Touchable onPress={() => navigation.navigate('Cart')}>
            <Icon
                size={24}
                name={'share'}
                color={Theme.COLORS.BLACK}
                style={{paddingLeft: 10}}
            />
          </Touchable>
        )
    }

    renderTitle = () => {
        const { title, subtitle } = this.props;
        return (
            <View style={styles.center}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        )
    }

    renderBack = () => {
        const { navigation } = this.props;
        return (
          <Touchable onPress={navigation.goBack}>
              <Icon
                size={24}
                name={'arrow-left'}
                color={Theme.COLORS.BLACK}
            />
          </Touchable>
        )
    }

    renderLeft = () => {
        const { back } = this.props
        return (
          <View style={styles.left}>
            {back ? this.renderBack() : null}        
          </View>
        );
    }

    renderCenter = () => {
        const { title } = this.props
        return (
          <View>
            {title ? this.renderTitle() : null}        
          </View>
        );
    }

    renderRight = () => {
        const { save, next } = this.props
        return (
          <View style={styles.right}>
            {save ? this.renderSave() : null}        
            {next ? this.renderNext() : null}        
          </View>
        );
    }

    render(){
        return (
            <View  style={styles.navBar}>
                <NavigationBar
                    title={this.renderCenter()}
                    rightButton={this.renderRight()}
                    leftButton={this.renderLeft()}
                />
            </View>
        )
    }
}

export default Header;

const styles = StyleSheet.create({
    navBar: { 
        height: HeaderHeight, 
        paddingRight: Theme.SIZES.BASE,
        paddingLeft: Theme.SIZES.BASE,
        justifyContent: "center",
    },
    title: {
        fontFamily: "Muli",
        fontSize: 18,
        fontWeight: "bold"
    },
    subtitle: {
        fontFamily: "Muli",
        fontSize: 12,
        fontWeight: "normal",
        color: Theme.COLORS.GREY,
        marginVertical: -5
    },
    right: {
        flexDirection: "row", 
        alignItems: "center"
    },
    center: {
        flexDirection: "column", 
        alignItems: "center"
    },
    left: {
        flexDirection: "row", 
        alignItems: "center"
    }
  });