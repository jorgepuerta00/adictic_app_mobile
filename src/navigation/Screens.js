import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
// screens
import Onboarding from '../screens/OnboardingScreen';
import Shop from '../screens/ShopScreen';
import ProductDetail from '../screens/ProductDetailScreen';
import Cart from '../screens/CartScreen';
// header for screens
import { Header } from '../components';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function HomeStack(props) {
    return (
      <MainStack.Navigator mode="card" headerMode="screen">
        <MainStack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: "",
            cardStyle: { backgroundColor: "transparent" },
            headerTransparent: true
          }}
        />
        <MainStack.Screen
          name="Shop"
          component={Shop}
          options={{
            header: ({navigation, scene}) => (
              <Header
                title= "Sneakers!!!"
                navigation={navigation}
                scene={scene}
                back
                next
              />
            ),
            cardStyle: { backgroundColor: "white" }
          }}
        />
        <MainStack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            header: ({navigation, scene}) => (
              <Header
                title= "Sneakers!!!"
                subtitle="Vans"
                navigation={navigation}
                scene={scene}
                back
                save
                next
              />
            ),
            cardStyle: { backgroundColor: "white" }
          }}
        />
        <MainStack.Screen
          name="Cart"
          component={Cart}
          options={{
            header: ({navigation, scene}) => (
              <Header
                title= "Carrito"
                navigation={navigation}
                scene={scene}
                back
              />
            ),
            cardStyle: { backgroundColor: "white" }
          }}
        />
      </MainStack.Navigator>
    );
  }

class App extends React.Component {
    render() {
      return (
        <RootStack.Navigator mode="modal" headerMode="none">      
          <RootStack.Screen 
            name="App" 
            component={HomeStack} 
          />          
        </RootStack.Navigator>
      );
    }
  }
  
  export default App;