import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Mycarousel from '../../components/carousel';
import HeaderBack from '../../components/headerBack';

export default class Register extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderBack navigation={this.props.navigation} />
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={require('../../assets/grup2.png')}
                        style={styles.image} />
                </View>
                <View style={styles.parentInput}>
                    <TextInput placeholder='fullname'
                        style={styles.input}
                        editable={true}
                        maxLength={40}
                        multiline={false}
                        autoCorrect={false}/>

                    <TextInput placeholder='username'
                        style={styles.input}
                        editable={true}
                        maxLength={40}
                        multiline={false}
                        autoCorrect={false} />
                    <TextInput placeholder='password'
                        style={styles.input} 
                        editable={true}
                        secureTextEntry={true}
                        maxLength={40}
                        multiline={false}
                        autoCorrect={false}/>
                    <TextInput placeholder='confirm password'
                        style={styles.input} 
                        editable={true}
                        secureTextEntry={true}
                        maxLength={40}
                        multiline={false}
                        autoCorrect={false}/>
            
                    <View style={styles.parentRegister}>
                        <TouchableOpacity style={styles.button}>
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