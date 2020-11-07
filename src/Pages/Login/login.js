/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar } from 'react-native';
import Animation from '../../Assets/Animations/lf30_editor_qy1svwml.json';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    SafeAreaViewStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#309773',
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
        backgroundColor: '#309773',
        marginTop: -15,
        marginTop: '2%',
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
       shadowOffset: { width: 0, height: 2},
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
        marginRight: 60
    }
});

export default function LoginPage({ navigation }) {
    function navigateToHomePage() {
        navigation.navigate('Home');
    }

    function navigateToForgoutPassword() {
        navigation.navigate('ForgoutPassword');
    }

    function navigationToSignUp() {
        navigation.navigate('Signup');
    }

    return (
        <>
            <SafeAreaView style={styles.SafeAreaViewStyle}>
                <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#309773" translucent = {false} />
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
                            leftIconContainerStyle={{ marginBottom: -15}}
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
                            style={styles.PasswordInputForm}
                            inputContainerStyle={{width: '75%', marginLeft: '15%'}}
                            leftIconContainerStyle={{ marginBottom: 0, width: 20}}
                            secureTextEntry={true}
                            leftIcon={
                                <Icon
                                name="lock"
                                size={24}
                                color="black"
                                />
                            }
                        />
                    </View>
                    <Button
                        title="Login"
                        buttonStyle={{ width: 100, marginLeft: '37%', marginTop: 10, borderRadius: 25}}
                        onPress={navigateToHomePage}
                    />
                    <View style={styles.links}>
                    <Text
                        style={{ fontWeight: 'bold', marginLeft: '17%', marginTop: 30}}
                    >
                        If you forgout your password <Text/>
                        <Text
                            style={{ fontWeight: 'bold', marginLeft: '15%', marginTop: 30}}
                        >
                            If you forgout your password <Text/>
                            <Text
                                style={{color: 'red'}}
                                onPress={navigateToForgoutPassword}
                            > 
                                Click here!
                            </Text>
                        </Text>
                        <Text
                            style={{ fontWeight: 'bold', marginLeft: '15%', marginTop: 10}}
                        >
                            If you don't have account <Text />
                            <Text
                                style={{color: 'red'}}
                            > 
                                Click here!
                            </Text>
                    </Text>
                    <Text
                        style={{ fontWeight: 'bold', marginLeft: '20%', marginTop: 10}}
                    >
                        If you don't have account <Text />
                        <Text
                            style={{color: 'red'}}
                            onPress={navigationToSignUp}
                        > 
                            Click here!
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}