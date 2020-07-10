import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Theme } from '../constants'
import Message from './Message'
import Button from './Button'
import Input from './Input'

class Comment extends React.Component {
    render() {
        const { comments, review, title, message } = this.props
        return (
            <View style={{zIndex: 1}}>
                <View style={{alignItems: "center"}}>
                    <Input
                      placeholder={title}
                    />
                    <Input
                      placeholder={message}
                    />    
                </View>                  
                <View style={{marginTop: Theme.SIZES.BASE*2, marginBottom: Theme.SIZES.BASE,}}>
                  <Button>
                    <Text style={styles.buttonText}>Enviar</Text>
                  </Button>
                </View>
                <View style={{marginTop: Theme.SIZES.BASE}}>            
                  <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                    { comments.map((item, index) => (
                        <Message
                            key={index}
                            title={item.title}
                            comment={item.comment}
                            review={review}
                            calification={item.calification}
                        />  
                    ))}
                  </ScrollView>
                </View>
            </View>
        )
    }
}

export default Comment;

const styles = StyleSheet.create({
    title: {
      fontFamily: "Muli",
      fontSize: 18,
      fontWeight: "bold",
      margin: Theme.SIZES.BASE
    },
    comment: {
      fontFamily: "Muli",
      fontSize: 16,
      fontWeight: "normal",
      color: Theme.COLORS.TEXT,
      margin: Theme.SIZES.BASE
    },
    buttonText: {
      fontFamily: "Muli",        
      fontSize: 20,
      fontWeight: "bold",
      color: 'white'
    }
  }); 