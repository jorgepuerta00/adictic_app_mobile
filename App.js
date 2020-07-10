import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// Screens
import Screens from './src/navigation/Screens';
// Redux
import { Provider } from "react-redux";
import createStore from "./src/store/createStore";

const store = createStore();

export default class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
          <NavigationContainer>
            <Screens />
          </NavigationContainer>
        </Provider>
      );
  }
}
