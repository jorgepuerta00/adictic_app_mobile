import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Theme } from '../constants'

function Input ({
        placeholder,
        password,
        ...props
    }) {
    const [text, setText] = React.useState('');
    
    return (
        <View style={styles.container}>
        <TextInput
            style={styles.text}
            value={text}
            onChangeText={text => setText(text)}
            placeholder={placeholder}
            placeholderTextColor={Theme.COLORS.MUTED}
            {...props}
        />
        </View>
    );
  };

  export default Input;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      width: Theme.SIZES.WIDTH * 0.92, 
      height: 50
    },
    text: {
      fontFamily: "Muli",
      fontSize: 18,
      fontWeight: "normal",
      color: Theme.COLORS.MUTED      
    }
  }); 