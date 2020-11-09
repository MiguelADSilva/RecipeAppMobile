/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

// import { Container } from './styles'

export default function HomePage({ navigation }) {

    function navigateToLoginPage() {
        navigation.navigate('Login');
    };

    const [email, setEmail] = useState("loading");

    const Boiler = async ()=>{
      const token = await AsyncStorage.getItem("token");
      fetch('https://recipe-app265.herokuapp.com/home/',{
        headers:new Headers({
          Authorization:"Bearer "+token
        })
      })
      .then(res=>res.json())
   };

   useEffect(()=>{
    Boiler()
  },[]);

  const logout = ()=>{
    AsyncStorage.removeItem("token").then(()=>{
      navigateToLoginPage();
    })
 }

  return (
      <View>
        <Text>HomePage</Text>
        <Button 
            title= "Logout"
            buttonStyle={{ width: 200, height: 30, marginLeft: 25, marginTop: 25}} 
            onPress={logout} 
        />
      </View>
  );
}
