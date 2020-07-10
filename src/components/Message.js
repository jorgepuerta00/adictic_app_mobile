import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../constants'
import Stars from './Stars'

const Message = (props) => {
    const { review, title, comment, calification } = props
    return (
        <View style={styles.container}>
          <View style={{margin: Theme.SIZES.BASE}}>
            <Text style={styles.title}>{title}</Text>
            {review&&<Stars review calification={calification} size={20} />}
            <Text style={styles.comment}>{comment}</Text>
          </View>  
        </View>
    )
}

export default Message;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", 
    flex:1, 
    justifyContent: "flex-start", 
    alignItems: "flex-start", 
    marginLeft: Theme.SIZES.BASE,
    marginBottom: Theme.SIZES.BASE,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 14,
    width: Theme.SIZES.WIDTH * 0.92,
    height: 175
  },  
  title: {
    fontFamily: "Muli",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5
  },
  comment: {
    fontFamily: "Muli",
    fontSize: 16,
    fontWeight: "normal",
    color: Theme.COLORS.TEXT,
    paddingTop: 5
  }
}); 