import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Alert, AsyncStorage } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Mycarousel from '../../components/carousel';
import HeaderBack from '../../components/headerBack';
import firebase from 'firebase'
import User from '../auth/user'
import firebaseSvc from './firebaseSvc'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            email: '',
            password: '',
            id_user: '',
            name: ''
        },
            this.random_id()
    }
    
    random_id = async () => {
        let id = await Math.floor(Math.random() * 10000000) + 1;
        this.setState({
            id_user: id
        })
    }
    handleSubmit = async () => {
        if (this.state.phone.length < 10) {
            Alert.alert('eroro input phone')
        } else if (this.state.email.length < 4) {
            Alert.alert('email error')
        } else if (this.state.password.length < 2) {
            Alert.alert('please input password more than 5')
        } else if (this.state.name.length < 2) {
            Alert.alert('please input password more than 5')
        } else {
            await createAccount({ name: this.state.name, email: this.state.email, password: this.state.password})
            await AsyncStorage.setItem('phone', this.state.phone)
            User.phone = this.state.phone
            firebase.database().ref('user/' + this.state.id_user).set({ phone: this.state.phone, email: this.state.email, password: this.state.password, name: this.state.name })
            this.props.navigation.navigate('home')
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderBack navigation={this.props.navigation} />
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
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
                        value={this.state.name}/>
                        
                    <TextInput placeholder='phone'
                        style={styles.input}
                        editable={true}
                        maxLength={40}
                        multiline={false}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ phone: text })}
                        value={this.state.phone}
                        keyboardType={'phone-pad'} />

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
        flex: 4,
        paddingHorizontal: 17,
        paddingTop: 10,
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
        color: '#b8b8b8',
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