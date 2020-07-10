import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Questions from './Questions'
import Review from './Review'
import { Theme } from '../constants';

const FirstRoute = ({ props }) => (
  <View style={[styles.scene, { backgroundColor: 'white' }]}>
    <Questions {...props}/>
  </View>
);

const SecondRoute = ({ props }) => (
  <View style={[styles.scene, { backgroundColor: 'white' }]}>
    <Review {...props}/>
  </View>
);

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._renderTabBar = this._renderTabBar.bind(this);
  }

  state = {
    index: 1,
    routes: [
      { key: 'first', title: 'Preguntas' },
      { key: 'second', title: 'Valoraciones' },
    ]
  }

  _renderScene = SceneMap({
    first: () => <FirstRoute props={this.props} />,
    second: () => <SecondRoute props={this.props} />
  });

  _renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={{ backgroundColor: 'white', elevation: 0 }}
      renderLabel={({ route, focused }) => (
        <Text style={[styles.textTab, { color: focused ? 'black' : Theme.COLORS.MUTED}]}>
          {route.title}
        </Text>
      )}
    />
  );
  
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={index => this.setState({index: index})}
        renderTabBar={this._renderTabBar}
      />
    );
  }
}

export default Tabs;

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  indicatorStyle: { 
    backgroundColor: Theme.COLORS.SECONDARY, 
    width: 4, 
    height: 4, 
    borderRadius: 10, 
    marginHorizontal: Theme.SIZES.WIDTH/4
  },
  textTab: { 
    fontFamily: "Muli",
    margin: 8, 
    fontSize: 16, 
    fontWeight: "bold" 
  }
});