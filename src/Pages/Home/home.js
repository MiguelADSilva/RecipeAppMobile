/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import {Button, Card, ListItem, Icon, Header} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

// import { Container } from './styles'

export default function HomePage({navigation}) {
  function navigateToLoginPage() {
    navigation.navigate('Login');
  }

  const [email, setEmail] = useState('loading');
  const [recipe, setRecipe] = useState([
    {
      recipeName: '',
      recipeSteps: '',
      imageUrl: '',
      _id: '',
      _createdAt: '',
    },
  ]);

  const Boiler = async () => {
    const token = await AsyncStorage.getItem('token');
    fetch('https://recipe-app265.herokuapp.com/home/', {
      headers: new Headers({
        Authorization: 'Bearer ' + token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.recipes.map((recipe) => {
          //  console.log("id " + recipe._id);
          setRecipe({
            recipeName: recipe.recipeName,
            recipeSteps: recipe.recipeSteps,
            imageURL: recipe.imageURL,
            _id: recipe._id,
            _createdAt: recipe._createdAt,
          });
        });
      });
  };

  useEffect(() => {
    Boiler();
  }, []);

  const logout = () => {
    AsyncStorage.removeItem('token').then(() => {
      navigateToLoginPage();
    });
  };

  const {width} = Dimensions.get('window');
  const height = (width * 100) / 51;
  return (
    <View>
      <Header
        placement="left"
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{
          icon: 'home',
          color: '#fff',
          onPress: logout,
        }}
      />
      <ScrollView style={{height}}>
        <ScrollView horizontal>
          {Array.from({length: 3}).map((_, index) => (
            <Card key={index} containerStyle={{width: 330}}>
              <Card.Title>HELLO WORLD</Card.Title>
              <Card.Image>
                <Image
                  source={require('./bacalhauBraga.jpg')}
                  style={{width: 330, height: 150}}
                />
              </Card.Image>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
                icon={<Icon name="code" color="#ffffff" />}
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="VIEW NOW"
              />
            </Card>
          ))}
        </ScrollView>
        <ScrollView horizontal>
          {Array.from({length: 3}).map((_, index) => (
            <Card key={index} containerStyle={{width: 330}}>
              <Card.Title>HELLO WORLD</Card.Title>
              <Card.Image>
                <Image
                  source={require('./bacalhauBraga.jpg')}
                  style={{width: 330, height: 150}}
                />
              </Card.Image>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
                icon={<Icon name="code" color="#ffffff" />}
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="VIEW NOW"
              />
            </Card>
          ))}
        </ScrollView>
        <ScrollView horizontal>
          {Array.from({length: 3}).map((_, index) => (
            <Card key={index} containerStyle={{width: 330}}>
              <Card.Title>HELLO WORLD</Card.Title>
              <Card.Image>
                <Image
                  source={require('./bacalhauBraga.jpg')}
                  style={{width: 330, height: 150}}
                />
              </Card.Image>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
                icon={<Icon name="code" color="#ffffff" />}
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="VIEW NOW"
              />
            </Card>
          ))}
        </ScrollView>
        <ScrollView horizontal>
          {Array.from({length: 3}).map((_, index) => (
            <Card key={index} containerStyle={{width: 330}}>
              <Card.Title>HELLO WORLD</Card.Title>
              <Card.Image>
                <Image
                  source={require('./bacalhauBraga.jpg')}
                  style={{width: 330, height: 150}}
                />
              </Card.Image>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
                icon={<Icon name="code" color="#ffffff" />}
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="VIEW NOW"
              />
            </Card>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
