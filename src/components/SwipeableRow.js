import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from './Swipeable';
import { Theme } from "../constants";
import Icon from 'react-native-vector-icons/Feather'

export default class SwipeableRow extends React.Component {
  
  state = {
    currentlyOpenSwipeable: null,
    isSwiping: false
  };

  handleScroll = () => {
    const {currentlyOpenSwipeable} = this.state;
    if (currentlyOpenSwipeable) {
      currentlyOpenSwipeable.recenter();
    }
  };

  render() {
      const { 
          children,
          onPressRemove,
      } = this.props;

      const {currentlyOpenSwipeable} = this.state;
      const itemProps = {
        onOpen: (event, gestureState, swipeable) => {
          if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
            currentlyOpenSwipeable.recenter();
          }

          this.setState({currentlyOpenSwipeable: swipeable});
        },
        onClose: () => this.setState({currentlyOpenSwipeable: null})
      };

      return (
        <ScrollView 
          scrollEnabled={!this.state.isSwiping}
          onScroll={this.handleScroll} 
        >
          <Swipeable 
            onSwipeStart={() => this.setState({isSwiping: true})}
            onSwipeRelease={() => this.setState({isSwiping: false})}
            rightButtons={[
              <RectButton style={styles.rightAction} onPress={onPressRemove} >
                <View style={styles.buttonDelete}>
                    <Icon name="trash-2" size={20} color={Theme.COLORS.WHITE} />
                </View>
              </RectButton>
            ]}
            onRightButtonsOpenRelease={itemProps.onOpen}
            onRightButtonsCloseRelease={itemProps.onClose}
          >
            {children}
          </Swipeable>
        </ScrollView>
      );
    }
  }

const styles = StyleSheet.create({
    buttonDelete: {
        alignItems: "center",
    },
    rightAction: {
        backgroundColor: Theme.COLORS.PRIMARY,
        width: "20%",
        height: 70,
        justifyContent: 'center',
        marginTop: 5
    }
});   