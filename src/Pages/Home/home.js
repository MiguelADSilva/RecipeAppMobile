/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import { Button, Card, ListItem, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Dimensions } from 'react-native';

// import { Container } from './styles'

export default function HomePage({ navigation }) {

    function navigateToLoginPage() {
        navigation.navigate('Login');
    };

    const [email, setEmail] = useState("loading");
    const [recipe, setRecipe] =useState([{
      recipeName: '',
      recipeSteps: '',
      imageUrl: '',
      _id: '',
      _createdAt: ''
    }]);

    const Boiler = async ()=>{
      const token = await AsyncStorage.getItem("token");
      fetch('https://recipe-app265.herokuapp.com/home/',{
        headers:new Headers({
          Authorization:"Bearer "+token
        })
      })
      .then(res => res.json())
      .then(data => {
        data.recipes.map(recipe =>  {
        //  console.log("id " + recipe._id);
          setRecipe({
            recipeName: recipe.recipeName,
            recipeSteps: recipe.recipeSteps,
            imageURL: recipe.imageURL,
            _id: recipe._id,
            _createdAt: recipe._createdAt
          });
        })
      });
   };

   useEffect(()=>{
    Boiler()
  },[]);

  const logout = ()=>{
    AsyncStorage.removeItem("token").then(()=>{
      navigateToLoginPage();
    })
  };

  return (
      <View>
        <Text>HomePage</Text>
        <Button 
            title= "Logout"
            buttonStyle={{ width: 200, height: 30, marginLeft: 25, marginTop: 25}} 
            onPress={logout} 
        />
        <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Image><Image source={require('./bacalhauBraga.jpg')} 
            style={{width: 330, height: 150}}
          /></Card.Image>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
        </Card>
      </View>
  );
}
