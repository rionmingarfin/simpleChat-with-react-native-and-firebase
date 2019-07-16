import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeAuth extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <View style={{ flex: 2,justifyContent: 'center',alignItems: 'center',}}>
                   <Image source={require('../../assets/human2.png')}
                   style={styles.image}/>
                </View>
                <View style={styles.parentInput}>
                    <View style={styles.parentLogin}>
                        <TouchableOpacity style={styles.buttonLogin} onPress={() =>this.props.navigation.navigate('login')}>
                            <Text style={styles.Text}>login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.parentRegister}>
                        <TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('register')}>
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
        flex: 2,
        paddingHorizontal: 17,
        margin :5 
    },
    image : {
        height :250,
        width :250
    },
    Text: {
        fontSize: 17,
        color: '#303030'
    },
    parentLogin: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 4,
        marginTop: 5,
        borderRadius: 30,
        borderWidth: 1,
        borderColor : '#6ea0f0'
    },
    parentRegister: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 4,
        marginTop: 5,
        borderRadius: 30,
        borderWidth: 1,
        borderColor : '#6ea0f0',
        backgroundColor : '#6ea0f0'
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 80,
        backgroundColor : '#6ea0f0'

    },
    buttonLogin: {
        paddingVertical: 10,
        paddingHorizontal: 100,
    }
})