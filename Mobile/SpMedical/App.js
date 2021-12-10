import 'react-native-gesture-handler';

import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StatusBar, StyleSheet} from 'react-native';

import Consulta from './scr/screens/Consulta';
import Login from './scr/screens/Login';
// import CameraPerfil from './src/screens/camera';

const AuthStack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar
          hidden={true}
        />
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <AuthStack.Screen name="Login" component={Login} />
          {/* <AuthStack.Screen name="Consulta" component={Consulta} /> */}
          <AuthStack.Screen name="Consulta" component={Consulta} />
          {/* <AuthStack.Screen name="Camera" component={CameraPerfil} /> */}
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }
}

// const styles = StyleSheet.create({
//   // conteúdo da main
//   main: {
//     flex: 1,
//     backgroundColor: '#F1F1F1',
//   },

//   // estilo dos ícones da tabBar
//   tabBarIcon: {
//     width: 22,
//     height: 22,
//   },
// });

export default App;