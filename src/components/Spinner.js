import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Modal, ActivityIndicator } from 'react-native';

const ANIMATION = ['none', 'slide', 'fade'];
const SIZES = ['small', 'normal', 'large'];
const transparent = 'transparent';

export default class Spinner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      textContent: this.props.textContent
    };
  }

  static propTypes = {
    cancelable: PropTypes.bool,
    color: PropTypes.string,
    animation: PropTypes.oneOf(ANIMATION),
    overlayColor: PropTypes.string,
    size: PropTypes.oneOf(SIZES),
    textContent: PropTypes.string,
    textStyle: PropTypes.object,
    visible: PropTypes.bool,
    indicatorStyle: PropTypes.object,
    customIndicator: PropTypes.element,
    children: PropTypes.element,
    spinnerKey: PropTypes.string
  };

  static defaultProps = {
    visible: false,
    cancelable: false,
    textContent: '',
    animation: 'none',
    color: 'white',
    size: 'large', 
    overlayColor: 'rgba(0, 0, 0, 0.25)'
  };

  close() {
    this.setState({ visible: false });
  }

  static getDerivedStateFromProps(props, state) {
    const newState = {};
    if (state.visible !== props.visible) newState.visible = props.visible;
    if (state.textContent !== props.textContent)
      newState.textContent = props.textContent;
    return newState;
  }

  _handleOnRequestClose() {
    if (this.props.cancelable) {
      this.close();
    }
  }

  _renderDefaultContent() {
    const indicatorStyle = this.props.indicatorStyle ? this.props.indicatorStyle : styles.indicatorStyle
    const textStyle = this.props.textStyle ? this.props.textStyle : styles.defaultTextStyle;
    return (
      <View style={styles.background}>
        {this.props.customIndicator ? (
          this.props.customIndicator
        ) : (
          <ActivityIndicator
            color={this.props.color}
            size={this.props.size}
            style={[styles.activityIndicator, indicatorStyle]}
          />
        )}
        <View style={[styles.textContainer]}>
          <Text style={[styles.textContent, textStyle]}>
            {this.state.textContent}
          </Text>
        </View>
      </View>
    );
  }

  _renderSpinner() {
    const spinner = (
      <View
        style={[styles.container, { backgroundColor: this.props.overlayColor }]}
        key={
          this.props.spinnerKey
            ? this.props.spinnerKey
            : `spinner_${Date.now()}`
        }
      >
        {this.props.children
          ? this.props.children
          : this._renderDefaultContent()}
      </View>
    );

    return (
      <Modal
        animationType={this.props.animation}
        onRequestClose={() => this._handleOnRequestClose()}
        supportedOrientations={['landscape', 'portrait']}
        transparent
        visible={this.state.visible}
      >
        {spinner}
      </Modal>
    );
  }

  render() {
    return this._renderSpinner();
  }
}

const styles = StyleSheet.create({
    activityIndicator: {
      flex: 1
    },
    background: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0
    },
    container: {
      backgroundColor: transparent,
      bottom: 0,
      flex: 1,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0
    },
    textContainer: {
      alignItems: 'center',
      bottom: 0,
      flex: 1,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0
    },
    textContent: {
      fontFamily: "Muli",
      fontSize: 20,
      height: 50,
      top: 80
    },
    indicatorStyle: { 
      flex: 1, 
      width: 170, 
      height: 120,
      backgroundColor: 'rgba(0, 0, 0, 0.25)',  
      flex: 1,
      justifyContent: 'center',
      position: 'absolute',
      borderRadius: 14
    },
    defaultTextStyle: {
      color: '#FFF',
      marginBottom: 60
    }
  });