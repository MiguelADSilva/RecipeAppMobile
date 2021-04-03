import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Button, ListItem, Avatar} from 'react-native-elements';
import {View} from 'react-native';
import Lottie from 'lottie-react-native';
import Animation from '../../Assets/Animations/userIcon.json';

export default function MenuPage({navigation}) {
  function navigateToHomePage() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView>
      <Lottie
        source={Animation}
        autoPlay
        loop
        autoSize
        style={{
          height: '50%',
          width: '50%',
          marginLeft: 55,
          marginTop: 30,
        }}
      />
      <View style={{marginTop: -60}}>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>See all Recipes</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>See all Recipes</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>See all Recipes</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>See all Recipes</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <Button
          title="BACK"
          buttonStyle={{
            width: 100,
            marginLeft: '37%',
            marginTop: 25,
            borderRadius: 25,
          }}
          onPress={navigateToHomePage}
        />
      </View>
    </SafeAreaView>
  );
}

// <Icon name={item.icon} />
