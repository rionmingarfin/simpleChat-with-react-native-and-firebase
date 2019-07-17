import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,Alert,AsyncStorage } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Mycarousel from '../../components/carousel';
import HeaderBack from '../../components/headerBack';
import firebase from 'firebase'
import firebaseSvc from './firebaseSvc'
import User from '../auth/user'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    
    handleSubmit = async () => {
        if (this.state.email.length < 5) {
            Alert.alert('plese input password more then 5')
        }else if (this.state.password.length < 6){
            Alert.alert('plese input password more then 6')
        }else {
            await AsyncStorage.setItem('email',this.state.email)
            User.email =this.state.email
            firebase.database().ref('user/001').set({password : this.state.password})
            this.props.navigation.navigate('home')
        }
    }
    // login = async (user, success_callback, failed_callback) => {
    //     await firebase.auth()
    //         .signInWithEmailAndPassword(user.email, user.password)
    //         .then(success_callback, failed_callback);
    // }
    // onPressLogin = async () => {
    //     const user = {
    //         email: this.state.email,
    //         password: this.state.password,
    //     };
    //     firebaseSvc.login(user, this.loginSuccess, this.loginFailed);
    // };
    // loginSuccess = () => {
    //     console.log('login successful, navigate to chat.');
    //     this.props.navigation.navigate('home', {
    //         name: this.state.name,
    //         email: this.state.email,
    //     });
    // };
    // loginFailed = () => {
    //     alert('Login failure. Please tried again.');
    // };
   
    render() {
        return (
            <View style={{ flex: 1}}>
                <HeaderBack navigation={this.props.navigation}/>
                <View style={{ flex: 2}}>
                    <Mycarousel/>
                </View>
                <View style={styles.parentInput}>
                    <TextInput placeholder='username'
                        style={styles.input}
                        editable={true}
                        maxLength={40}
                        multiline={false}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}/>

                    <TextInput placeholder='password'
                        style={styles.input} 
                        editable={true}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password} />

                    <View style={{ justifyContent: 'flex-end', paddingTop: 10, flexDirection: 'row', }}>
                        <TouchableOpacity style={{ padding: 5 }}>
                            <Text style={styles.Text}>forget password ..?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.parentLogin}>
                        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                            <Text style={styles.Text}>login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.parentLogin}>
                        <Text style={styles.Text}>----------OR CONNECT WITH----------</Text>
                    </View>
                    <View style={styles.parentImage}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/goggle.jpg')}
                                style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/fb.png')}
                                style={styles.image} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentImage: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 4,
    },
    image: {
        height: 45,
        width: 45
    },
    parentInput: {
        flex: 4,
        paddingHorizontal: 17,
    },
    input: {
        borderRadius: 30,
        justifyContent: 'center',
        borderWidth: 1,
        margin: 5,
        alignItems: 'center',
        color: '#b8b8b8',
        borderColor: '#d6d4d4',
       paddingHorizontal: 20,
    },
    Text: {
        fontSize: 15,
        color: '#3b3a3a'
    },
    parentLogin: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 4,
        marginTop: 5,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderWidth: 1,
        borderColor: '#d6d4d4',
        borderRadius: 20,
        backgroundColor : '#6ea0f0'
    }
})