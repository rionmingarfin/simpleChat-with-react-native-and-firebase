import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Alert, AsyncStorage } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Mycarousel from '../../components/carousel';
import HeaderBack from '../../components/headerBack';
import firebase from 'firebase'
import User from '../auth/user'
import firebaseSvc from './firebaseSvc'
import Geolocation from '@react-native-community/geolocation';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            id_user: '',
            name: '',
            image: '',
            // latitude: '',
            // longitude: ''

        }
        // this.random_id()
        // this.getLocation()
    }
    // getLocation = async () => {
    //     // Geolocation.getCurrentPosition(info => console.log(info));
    //     await Geolocation.getCurrentPosition(
    //         (position) => {
    //             this.setState({
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude,
    //                 error: null,
    //             });
    //         },
    //         (error) => this.setState({ error: error.message }),
    //         { enableHighAccuracy: false, maximumAge: 1000 },
    //     );
    // }
    // random_id = async () => {
    //     let id = await Math.floor(Math.random() * 10000000) + 1;
    //     this.setState({
    //         id_user: id
    //     })
    // }
    handleSubmit = async () => {
        if (this.state.email.length < 4) {
            Alert.alert('email error')
        } else if (this.state.password.length < 2) {
            Alert.alert('please input password more than 2')
        } else if (this.state.name.length < 3) {
            Alert.alert('please input password more than 3')
        } else if (this.state.image.length < 4) {
            Alert.alert('please input image more than 4')
        } else {
           await firebase.auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(({ user }) => {
                    console.log('user',user)
                    var userf = firebase.auth().currentUser;
                    userf.updateProfile({ displayName: this.state.name, photoURL: this.state.image })
                    firebase.database().ref('user/' + user.uid).set({
                        name: this.state.name,
                        image: this.state.image,
                        // latitude: this.state.latitude,
                        // longitude: this.state.longitude
                    })
                })
            this.props.navigation.navigate('login')
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderBack navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../assets/grup2.png')}
                        style={styles.image} />
                </View>
                <View style={styles.parentInput}>
                    <TextInput placeholder='name'
                        style={styles.input}
                        editable={true}
                        maxLength={40}
                        multiline={false}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name} />

                    <TextInput placeholder='image'
                        style={styles.input}
                        editable={true}
                        maxLength={200}
                        multiline={true}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ image: text })}
                        value={this.state.image} />

                    <TextInput placeholder='email'
                        style={styles.input}
                        editable={true}
                        maxLength={40}
                        multiline={false}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        keyboardType={'email-address'} />


                    <TextInput placeholder='password'
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password} />

                    <View style={styles.parentRegister}>
                        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                            <Text style={styles.Text}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentInput: {
        paddingHorizontal: 17,
        paddingTop: 10,
        backgroundColor: '#FFFFFF',
        zIndex: 999,
        marginBottom: 10,
    },
    image: {
        height: 250,
        width: 250,
    },
    input: {
        borderRadius: 30,
        justifyContent: 'center',
        borderWidth: 1,
        margin: 5,
        alignItems: 'center',
        color: '#1c1c1c',
        borderColor: '#d6d4d4',
        paddingHorizontal: 20,
    },
    Text: {
        fontSize: 17,
        color: '#303030'
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 80,
        backgroundColor: '#6ea0f0'

    },
    parentRegister: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 4,
        marginTop: 5,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#6ea0f0',
        backgroundColor: '#6ea0f0'
    },
})