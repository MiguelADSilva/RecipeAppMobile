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
        flexDirection: 'column'
    },
    Title: {
        marginLeft: '3%',
        fontWeight: 'bold',
        fontSize: 25,
    },
    ForgoutPasswordForm: {
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
        marginTop: '150%'
     },
     ForgoutPasswordInput: {
         marginTop: 25
     }
});

export default function ForgoutPassword({ navigation }) {

    function navigateToLoginPage() {
        navigation.navigate('Login');
    };

    const showDialogBoxWithOneButton = () => {
        Alert.alert(
            "Email Sent",
            "You will receive a Email for to restart your password",
            [
                {
                    text: "Close",
                    onPress: () => console.log("Close Pressed!"),
                    style: "cancel"
                },
            ],
            { cancelable: false }
        )
    };

    return (
        <>
            <SafeAreaView style={style.Screen}>
                    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#309773" translucent = {false} />
                    <View style={{ flexDirection: 'row'}}>
                        <Button 
                            title= "Back"
                            buttonStyle={{ width: 70, height: 30}} 
                            onPress={navigateToLoginPage}
                        />
                        <Text style={style.Title}>Forgout Password</Text>
                    </View>
                    <View>
                        <Lottie
                            source={Animation}
                            autoPlay
                            loop
                            autoSize
                            style={{
                                height: 400,
                                width: 400,
                                marginLeft: 10,
                                marginTop: 55
                            }}
                        />
                    </View>
                    <View style={style.ForgoutPasswordForm}>
                        <Input
                            placeholder="Email"
                            style={style.ForgoutPasswordInput}
                            inputContainerStyle={{width: '75%', marginLeft: '15%'}}
                        />
                        <Button
                            title="Send"
                            buttonStyle={{ width: 100, marginLeft: '37%', marginTop: 10, borderRadius: 25}}
                            onPress={showDialogBoxWithOneButton}
                        />
                    </View>
            </SafeAreaView>
        </>
    )
};