import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../constants'
import Comment from './Comment'

class Questions extends React.Component {
    render() {
        const { rating } = this.props
        return (
            <View>
                <Text style={styles.title}>Preguntas</Text>
                <Comment title="Título (opcional)" message="Pregunta (opcional)" comments={rating.questions}/>
            </View>
        )
    }
}

export default Questions;

const styles = StyleSheet.create({
    title: {
      fontFamily: "Muli",
      fontSize: 18,
      fontWeight: "bold",
      margin: Theme.SIZES.BASE
    }
  }); 