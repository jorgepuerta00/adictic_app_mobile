import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../constants'
import Stars from './Stars'
import ProgressBar from './ProgressBar'
import Separator from './Separator'

class Score extends React.Component {
  render() {
    const { maxscore, rating } = this.props
    return (
      <View style={styles.container}>
          <View style={styles.containerScore}>
            <Text style={styles.scoreText}>{rating.score}</Text>
            <Text style={styles.maxScoreText}>de {maxscore}</Text>
          </View>
          <View style={styles.containerStars}>
            <View style={{flexDirection: "column"}}>
            { rating.calification
                .sort((a, b) => (a.id > b.id) ? 1 : -1)
                .reverse()
                .map((item) => (
                <View key={item.id} style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Stars score size={10} calification={rating.calification} stars={item.id}/>
                    <Separator/>
                    <ProgressBar max={rating.total} value={item.value} width={145}/>
                </View>
            ))}
            </View>
            <View style={{flexDirection: "row", flex:1, justifyContent: "flex-end", alignItems: "center"}}>
                <Text style={styles.boldText}>{rating.total}</Text>
                <Text style={styles.normalText}>calificaciones</Text>
            </View>
          </View>
      </View>
    )
  }
}

export default Score;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    containerScore: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerStars: {
        flexDirection: "column",
        marginRight: Theme.SIZES.BASE
    },
    scoreText: {
      fontFamily: "Muli",
      fontSize: 49,
      fontWeight: "bold",
      color: Theme.COLORS.GREY
    },
    maxScoreText: {
      fontFamily: "Muli",
      fontSize: 16,
      fontWeight: "normal",
      color: Theme.COLORS.TEXT
    },
    boldText: {
      fontFamily: "Muli",
      fontSize: 12,
      fontWeight: "bold",
      color: Theme.COLORS.TEXT 
    },
    normalText: {
      fontFamily: "Muli",
      fontSize: 12,
      fontWeight: "normal",
      color: Theme.COLORS.TEXT,
      paddingLeft: 5
    }
}); 