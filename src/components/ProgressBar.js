import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from './Icon'
import { Theme } from '../constants'

const ProgressCalculator = (number, pertentage) => {
    return (pertentage * number) / 100
}

const PertentageCalculator = (max, value) => {
    return (value * 100) / max
}

const ProgressBar = (props) => {
    const { max, value, width } = props
    const pertentage = PertentageCalculator(max, value)
    const progress = ProgressCalculator(width, pertentage)
    return (
        <View style={[styles.container]}>
            <View style={[styles.progressBar, {width: progress}]} />
        </View>
    )
}

export default ProgressBar;

const styles = StyleSheet.create({
    container: {
        width: 145,
        height: 3,
        backgroundColor: Theme.COLORS.EMPTY
    },
    progressBar: {
        width: 10,
        height: 3,
        backgroundColor: Theme.COLORS.PRIMARY
    }
  });