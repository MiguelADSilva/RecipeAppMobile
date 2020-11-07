/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StatusBar, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Lottie from 'lottie-react-native';
import Animation from '../../Assets/Animations/forgetPasswordAnimation.json';
import Icon from 'react-native-vector-icons/FontAwesome';

const style = StyleSheet.create({
    Screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#309773',
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
        width: '100%',
        height: '30%',
        borderTopRightRadius: 55,
        borderTopLeftRadius: 55,
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
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

    const showDialogBoxWithOneButton = () => {
        Alert.alert(
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
                    <View style={style.LottieStyle}>
                        <Lottie
                            source={Animation}
                            autoPlay
                            loop
                            autoSize
                            style={{
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
