import React, { useReducer, useState } from 'react';
import { SafeAreaView, Text, StatusBar, StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import Lottie from 'lottie-react-native';
import Success from '../../Assets/Animations/success.json';
import Loading from '../../Assets/Animations/loading.json';
import Wrong from '../../Assets/Animations/wrong.json';

const style = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#309773',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft: '20%'
  },
  formViewStyles: {
    backgroundColor: 'white',
    width: '100%',
    height: '70%',
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  SignupInput: {
    marginTop: 5,
  }
});

export default function Signup({ navigation }) { 
  function navigateToLoginPage() {
   navigation.navigate('Login');
 }

 const [user, setUser] = useState({
   firstName: '',
   lastName: '',
   email: '',
   password: '',
   photo: ''
 });

 const [loading, setLoading] = useState({
   isLoading: true,
   areFailed: false
 });

 const updateFirstName = e => {
  setUser({
    ...user,
    firstName: e
  })
 };

 const updateLastName = e => {
   setUser({
     ...user,
     lastName: e
   })
 };

 chooseFile = () => {
  const option = {
    title: 'Select photo',
    storageOption: {
      skipBackup: true,
      path: 'images'
    }
  };
  
  ImagePicker.showImagePicker(option, response => {
    console.log(response);
    if(response.didCancel) {
      console.log('User cancelled Image Picker');
    } else if(response.error) {
      console.log('ImagePicker Error', response.error);
    } else {
      let source = { uri: response.uri };
      setUser({
        ...user,
        photo: source
      });
    }
  })
}

 return (
   <>
    <SafeAreaView style={style.Screen}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#309773" translucent = {false} />
      <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'flex-start'}}>
        <Button
          title= "Back"
          buttonStyle={{ width: 70, height: 30}}
          onPress={navigateToLoginPage}
        />
        <Text style={style.Title}>Signup</Text>
      </View>
        {
          loading.isLoading ? <Lottie source={Loading} autoPlay loop autoSize style={{height: 300, width: 300, marginTop: '-170%'}}/> : <></>
        }
      <View style={style.formViewStyles}>
        <Input
          placeholder="FirstName"
          style={style.SignupInput}
          inputContainerStyle={{width: '75%', marginLeft: '15%'}}
          onChangeText={updateFirstName}
        />
        <Input
          placeholder="LastName"
          style={style.SignupInput}
          inputContainerStyle={{width: '75%', marginLeft: '15%'}}
          onChangeText={updateLastName}
        />
        <Input
          placeholder="Email"
          style={style.SignupInput}
          inputContainerStyle={{width: '75%', marginLeft: '15%'}}
          leftIcon={
            <Icon
            name="envelope"
            size={24}
            color="black"
            />
          }
        />
        <Input
          placeholder="Password"
          style={style.SignupInput}
          inputContainerStyle={{width: '75%', marginLeft: '15%'}}
          secureTextEntry={true}
          leftIcon={
            <Icon
            name="lock"
            size={24}
            color="black"
            />
          }
        />
        <Button
          title={user.photo ? 'Photo loaded' : 'Choose Photo'}
          buttonStyle={{ width: '50%', marginTop: 10, borderRadius: 25, alignSelf: 'center'}}
          onPress={chooseFile}
        />
        <Button
          title="Send"
          buttonStyle={{ width: 100, marginTop: 10, borderRadius: 25, alignSelf: 'center'}}
          onPress={() => console.log(user.firstName + "" + user.lastName + "" + user.photo)}
        />
      </View>
    </SafeAreaView>
   </>
 )
};