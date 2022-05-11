/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/navigation/index'
import LoginScreen from './src/screen/auth'
import { Provider } from 'react-redux';
import store from './src/utility/redux/store';

//const store = configureStore()
const Stack = createNativeStackNavigator();

const App = () => {


  return (

    <Provider store={store}>
      <Navigation />
    </Provider>

  );
}

export default App;
