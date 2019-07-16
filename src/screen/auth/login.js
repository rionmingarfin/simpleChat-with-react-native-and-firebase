import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Mycarousel from '../../components/carousel';
import HeaderBack from '../../components/headerBack';

export default class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <HeaderBack navigation={this.props.navigation}/>
                <View style={{ flex: 2}}>
                    <Mycarousel/>
                </View>
                <View style={styles.parentInput}>
                    <TextInput placeholder='username'
                        style={styles.input} />
                    <TextInput placeholder='password'
                        style={styles.input} />
                    <View style={{ justifyContent: 'flex-end', paddingTop: 10, flexDirection: 'row', }}>
                        <TouchableOpacity style={{ padding: 5 }}>
                            <Text style={styles.Text}>forget password ..?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.parentLogin}>
                        <TouchableOpacity style={styles.button}>
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