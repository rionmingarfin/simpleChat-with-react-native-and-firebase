import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,Alert,AsyncStorage ,ActivityIndicator} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Mycarousel from '../../components/carousel';
import HeaderBack from '../../components/headerBack';
import firebaseSvc from './firebaseSvc'
import firebase from 'firebase'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading:''
        };
    }
    onPressLogin = async () => {

        await firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
          .then( async (result) => {
            console.log('result',result)
            
                await AsyncStorage.setItem('uid', result.user.uid);
                AsyncStorage.getItem('uid',(error,result) => {
                    if (result) {
                        this.setState({
                            email: '',
                            password: '',
                            isLoading: false
                        })
                        console.log('result dua',result)
                        this.props.navigation.navigate('home')
                    }
                })
          })
      }

    render() {
        return (
            <View style={{ flex: 1}}>
                <HeaderBack navigation={this.props.navigation}/>
                <View style={{ flex: 2}}>
                    <Mycarousel/>
                </View>
                <View style={styles.parentInput}>
                    <TextInput placeholder='email'
                        style={styles.input}
                        editable={true}
                        maxLength={40}
                        multiline={false}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        keyboardType={'email-address'}/>

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
                        <TouchableOpacity style={styles.button} onPress={this.onPressLogin}>
                            <Text style={styles.Text}>login</Text>
                        </TouchableOpacity>
                    </View>
                    {
					this.state.isLoading ? 
					<View style={{
						position: 'absolute',
						justifyContent: 'center',
						alignSelf: 'center',
						width: '100%',
						height: '100%',
						backgroundColor: 'white'
					}}>
						<ActivityIndicator size="large" color="#0FA391" />
					</View>
					:
					<View />
				}
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
        color: '#1c1c1c',
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