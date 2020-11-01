/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
 
import LoginPage from '../Pages/Login/login';
import HomePage from '../Pages/Home/home';
import ForgoutPassword from '../Pages/ForgoutPassword/fourgoutPassword';


const Stack = createStackNavigator();

function Routes() {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="ForgoutPassword" component={ForgoutPassword} />
            </Stack.Navigator>
    )
}

export default Routes;