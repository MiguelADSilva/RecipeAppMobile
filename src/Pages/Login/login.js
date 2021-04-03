/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text, StatusBar} from 'react-native';
import Animation from '../../Assets/Animations/lf30_editor_wc4j6cji.json';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1976D2',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  brandTitle: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
  },
  LottieStyles: {
    flex: 1,
    paddingLeft: 55,
    backgroundColor: '#1976D2',
    marginTop: -15,
    marginTop: '10%',
    zIndex: -9,
  },
  ViewStyles: {
    backgroundColor: 'white',
    width: wp('100%'),
    height: hp('55%'),
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  LoginFormStyle: {
    textAlign: 'center',
    alignItems: 'center',
  },
  LoginFormText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  EmailInputForm: {
    marginTop: 20,
  },
  PasswordInputForm: {
    marginTop: 5,
  },
  links: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 60,
  },
});

export default function LoginPage({navigation}) {
  function navigateToHomePage() {
    navigation.navigate('Home');
  }

  function navigateToForgoutPassword() {
    navigation.navigate('ForgoutPassword');
  }

  function navigationToSignUp() {
    navigation.navigate('Signup');
  }

  const [errorRequest, setError] = useState({
    haveErrorRequest: false,
    errorMessage: '',
  });

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const updateEmailUser = (e) => {
    setUser({
      ...user,
      email: e,
    });
  };

  const updatePasswordUser = (e) => {
    setUser({
      ...user,
      password: e,
    });
  };

  const sentUser = () => {
    fetch('https://recipe-app265.herokuapp.com/user/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => res.json())
      .then(async (resp) => {
        if (resp.message === 'Auth successful') {
          await AsyncStorage.setItem('token', resp.token);
          console.log(resp.message);
          navigateToHomePage();
        } else {
          return setError({
            ...errorRequest,
            haveErrorRequest: true,
            errorMessage: resp.message,
          });
        }
      })
      .catch((e) => console.log(e));
  };

  /*      const sentUser = () => {
        fetch('https://recipe-app265.herokuapp.com/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': user.email,
                'password': user.password
            })
        })
        .then(resp => {
            AsyncStorage.setItem('token', resp.token);
            navigateToHomePage();
        }).catch(error => {
            setError({
                ...errorRequest,
                haveErrorRequest: true,
                errorMessage: 'Falha ao fazer login'
            })
        })
        .then(res=>res.json())
        .then(async (data) => {
            try{
                await AsyncStorage.setItem('token', data.token);
                navigateToHomePage();
            } catch (e) {
                console.log(e);
            }
        });
    } */

  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1976D2"
        translucent={false}
      />
      <Text style={styles.brandTitle}>RecipeApp</Text>
      <View style={styles.LottieStyles}>
        <Lottie
          source={Animation}
          autoPlay
          loop
          autoSize
          style={{
            height: hp('40.5%'),
            width: wp('40.5%'),
          }}
        />
      </View>
      <View style={styles.ViewStyles}>
        <View style={styles.LoginFormStyle}>
          <Text style={styles.LoginFormText}>Login</Text>
          <Input
            placeholder="Email"
            style={styles.EmailInputForm}
            inputContainerStyle={{width: '75%', marginLeft: '15%'}}
            leftIconContainerStyle={{marginBottom: -15}}
            leftIcon={<Icon name="envelope" size={24} color="black" />}
            onChangeText={updateEmailUser}
          />
          <Input
            placeholder="Password"
            style={styles.PasswordInputForm}
            inputContainerStyle={{width: '75%', marginLeft: '15%'}}
            leftIconContainerStyle={{marginBottom: 0, width: 20}}
            secureTextEntry={true}
            leftIcon={<Icon name="lock" size={24} color="black" />}
            onChangeText={updatePasswordUser}
          />
        </View>
        <Text>
          {errorRequest.haveErrorRequest ? errorRequest.errorMessage : ''}
        </Text>
        <Button
          title="Login"
          buttonStyle={{
            width: 100,
            marginLeft: '37%',
            marginTop: 10,
            borderRadius: 25,
          }}
          onPress={() => sentUser()}
        />
        <View style={styles.links}>
          <Text style={{fontWeight: 'bold', marginLeft: '15%', marginTop: 30}}>
            If you forgot your password <Text />
            <Text style={{color: 'red'}} onPress={navigateToForgoutPassword}>
              Click here!
            </Text>
          </Text>
          <Text style={{fontWeight: 'bold', marginLeft: '15%', marginTop: 10}}>
            If you don't have account <Text />
            <Text />
            <Text style={{color: 'red'}} onPress={navigationToSignUp}>
              Click here!
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
