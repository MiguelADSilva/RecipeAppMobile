/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView,View, StyleSheet, Text} from 'react-native';
import Animation from '../../Assets/Animations/lf30_editor_qy1svwml.json';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


const styles = StyleSheet.create({
    SafeAreaViewStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#309773',
        justifyContent: 'flex-end',
        flexDirection: 'column'
    },
    brandTitle: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold'
    },
    LottieStyles: {
        flex: 1,
        paddingLeft: 55,
        backgroundColor: '#309773',
        marginTop: -30,
        zIndex: -9
    },
    ViewStyles: {
       backgroundColor: 'white',
       width: '100%',
       height: '55%',
       borderTopRightRadius: 55,
       borderTopLeftRadius: 55,
       position: 'absolute',
    },
    LoginFormStyle: {
        textAlign: 'center',
        alignItems: "center",
    },
    LoginFormText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20
    },
    EmailInputForm: {
        marginTop: 20
    },
    PasswordInputForm: {
        marginTop: 5
    }
});

export default function App() {
    return( 
        <>
            <SafeAreaView style={styles.SafeAreaViewStyle}>
                <Text style={styles.brandTitle}>BrandTitle</Text>
                <View style={styles.LottieStyles}>
                    <Lottie 
                        source={Animation} 
                        autoPlay 
                        loop 
                        autoSize 
                        style={{
                            height: 300,
                            width: 300
                        }}
                    />
                </View>
                <View style={styles.ViewStyles}>
                    <View style={styles.LoginFormStyle}>
                        <Text style={styles.LoginFormText}>Login</Text>
                        <Input
                            placeholder='Email'
                            style={styles.EmailInputForm}
                            inputContainerStyle={{width: '75%', marginLeft: '15%'}}
                            leftIconContainerStyle={{ marginBottom: -15}}
                            leftIcon={
                                <Icon
                                  name='envelope'
                                  size={24}
                                  color='black'
                                />
                              }
                        />
                        <Input
                            placeholder='Password'
                            style={styles.PasswordInputForm}
                            inputContainerStyle={{width: '75%', marginLeft: '15%'}}
                            leftIconContainerStyle={{ marginBottom: 0, width: 20}}
                            secureTextEntry={true}
                            leftIcon={
                                <Icon
                                  name='lock'
                                  size={24}
                                  color='black'
                                />
                              }
                        />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}