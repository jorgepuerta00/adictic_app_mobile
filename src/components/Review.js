import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../constants'
import Comment from './Comment'
import Stars from './Stars'
import Score from './Score'

class Review extends React.Component {
  render() {
    const { rating } = this.props
    return (
      <View>
          <View style={{flexDirection: "row", flex:1, justifyContent: "space-between", alignItems: "center"}}>
            <Text style={styles.title}>Valoraciones</Text>
            <Text style={styles.subtitle}>Ver todo</Text>
          </View>
          <Score 
            rating={rating.ratings}
            maxscore={5}
          />
          <Text style={styles.title}>Reseña</Text>
          <Text style={styles.subtitle}>Toca para calificar</Text>
          <Stars
            active
            size={50}
            stars={5}
          />
          <Comment review title="Título (opcional)" message="Reseña (opcional)" comments={rating.reviews}/>
      </View>
    )
  }
}

export default Review;

const styles = StyleSheet.create({
    title: {
      fontFamily: "Muli",
      fontSize: 18,
      fontWeight: "bold",
      margin: Theme.SIZES.BASE
    },
    subtitle: {
      fontFamily: "Muli",
      fontSize: 16,
      fontWeight: "normal",
      color: Theme.COLORS.TEXT,
      margin: Theme.SIZES.BASE
    }
  }); 