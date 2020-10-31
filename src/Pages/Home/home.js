/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

// import { Container } from './styles'

export default function HomePage({ navigation }) {

    function navigateToLoginPage() {
        navigation.navigate('Login');
    };

  return (
      <View>
        <Text>HomePage</Text>
        <Button 
            title= "Back To Login Page"
            buttonStyle={{ width: 200, height: 30, marginLeft: 25, marginTop: 25}} 
            onPress={navigateToLoginPage} 
        />
      </View>
  );
}
