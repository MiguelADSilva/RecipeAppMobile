/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StatusBar, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Lottie from 'lottie-react-native';
import Animation from '../../Assets/Animations/forgetPasswordAnimation.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const style = StyleSheet.create({
    Screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#309773',
        flexDirection: 'column',
        alignContent: 'space-between'
    },
    Title: {
        marginLeft: '5%',
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    Title: {
        paddingLeft: '5%',
        fontWeight: 'bold',
        fontSize: 25,
    },
    formViewStyles: {
        backgroundColor: 'white',
        width: wp('100%'),
        height: hp('70%'),
        borderTopRightRadius: 55,
        borderTopLeftRadius: 55,
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
     },
     ForgoutPasswordInput: {
         marginTop: 25
     },
     formLottieView: {
         flexDirection: 'column',
         alignItems: 'center',
         marginBottom: 0
        marginTop: '150%',
    },
    ForgoutPasswordForm: {
        textAlign: 'center',
        alignItems: 'center'
     },
     ForgoutPasswordInput: {
         marginTop: 25,
     },
     LottieStyle: {
         flex: 1,
         marginTop: '60%',
         zIndex: -9
     }
});


export default function ForgoutPassword({ navigation }) {

    function navigateToLoginPage() {
        navigation.navigate('Login');
    }

    const [form, setState] = useState({
        email: ''
    });

    const updateEmailState = e => {
        setState({
            ...form,
            email: e
        });
    };

    const showDialogBoxWithOneButton = () => {
        Alert.alert(
            "Email Sent",
            `You will receive a Email for to restart your password ${form.email}`,
            [
                {
                    text: "Close",
                    style: "cancel"
            'Email Sent',
            'You will receive a Email for to restart your password',
            [
                {
                    text: 'Close',
                    onPress: () => {},
                    style: 'cancel',
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <>
            <SafeAreaView style={style.Screen}>
                    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#309773" translucent = {false} />
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start'}}>
                        <Button
                            title= "Back"
                            buttonStyle={{ width: 70, height: 30}}
                            onPress={navigateToLoginPage}
                        />
                        <Text style={style.Title}>Forgout Password</Text>
                    </View>
                    <View style={style.formLottieView}>
                    <View style={style.LottieStyle}>
                        <Lottie
                            source={Animation}
                            autoPlay
                            loop
                            autoSize
                            style={{
                                height: hp('53.5%'),
                                width: wp('53.5%'),
                                marginLeft: 10,
                                marginTop: '15%'
                            }}
                        />
                        <View style={style.ForgoutPasswordForm}>
                            <Input
                                placeholder="Email"
                                name="email"
                                style={style.ForgoutPasswordInput}
                                inputContainerStyle={{width: '75%', marginLeft: '15%'}}
                                onChangeText={updateEmailState}
                            />
                            <Button
                                title="Send"
                                buttonStyle={{ width: 100, marginLeft: '37%', marginTop: 10, borderRadius: 25}}
                                height: 400,
                                width: 400,
                                marginLeft: 5,
                                marginTop: -175,
                            }}
                        />
                    </View>
                    <View style={style.formViewStyles}>
                        <View style={style.ForgoutPasswordForm}>
                            <Input
                                placeholder="Email"
                                style={style.ForgoutPasswordInput}
                                inputContainerStyle={{width: '75%', marginLeft: '15%'}}
                            />
                            <Button
                                title="Send"
                                buttonStyle={{ width: 100, marginTop: 10, borderRadius: 25}}
                                onPress={showDialogBoxWithOneButton}
                            />
                        </View>
                    </View>
            </SafeAreaView>
        </>
    );
}
