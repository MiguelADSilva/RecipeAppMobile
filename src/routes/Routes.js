/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import LoginPage from '../Pages/Login/login';
import HomePage from '../Pages/Home/home';
import ForgoutPassword from '../Pages/ForgoutPassword/fourgoutPassword';
import Signup from '../Pages/signup/signup';
import MenuPage from '../Pages/Menu/menu';

const Stack = createStackNavigator();

function Routes() {
  const [isLoggedIn, setLoggedIn] = useState(null);

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    useEffect(() => {
      detectLogin();
    }, []);
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="ForgoutPassword" component={ForgoutPassword} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Menu" component={MenuPage} />
    </Stack.Navigator>
  );
}

export default Routes;
