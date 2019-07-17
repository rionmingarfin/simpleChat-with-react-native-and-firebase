import React, { Component } from 'react'
import { Text, View, TextInput, SafeAreaView, TouchableOpacity, StyleSheet,FlatList,Dimensions } from 'react-native'
import firebase from 'firebase'
import User from '../screen/auth/user'
import Icon from 'react-native-vector-icons/dist/Ionicons'

export default class DetailChat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {
                email: this.props.navigation.state.params.email,
                name: this.props.navigation.state.params.name,
                phone: this.props.navigation.state.params.phone,
            },
            textMessage: '',
            messageList:[]
        }
    }
    sendMessage = async () => {
        if (this.state.textMessage.length > 0) {
            let msgId = firebase.database().ref('messages').child(User.phone).child(this.state.person.phone).push().key;
            let updates = {};
            let message = {
                message: this.state.textMessage,
                time: firebase.database.ServerValue.TIMESTAMP,
                form: User.phone
            }
            updates['messages/' + User.phone + '/' + this.state.person.phone + '/' + msgId] = message;
            updates['messages/' + this.state.person.phone + '/' + User.phone + '/' + msgId] = message;
            firebase.database().ref().update(updates)
            this.setState({ textMessage: '' })

        }
    }
    componentWillMount() {
        firebase.database().ref().child(User.phone).child(this.state.person.phone)
        .on('child_added',(value) => {
            this.setState((prevState) => {
                return {
                    messageList : [...prevState.messageList,value.val()]
                }
            })
        })
    }
    renderChat = ({item}) => {
        return (
            <View style={{
                flexDirection: 'row',
                width:'60%',
                alignSelf: item.form===User.phone ? 'flex-end' : 'flex-start',
                backgroundColor: item.form===User.phone ? '#6ea0f0' :'#013991',
                borderRadius : 5,
                marginBottom: 10,
                }}>
                    <Text style={{padding :7,fontSize:16,color:'#000'}}>{item.message}</Text>
                    <Text style={{padding :3,fontSize:17}}>{item.time}</Text>
            </View>
        )
    }
    render() {
        let {height,width} =Dimensions.get('window')
        return (
            <SafeAreaView>
                <FlatList
                style={{padding :10,height :height*0.8}}
                  data={this.state.messageList}
                  renderItem={this.renderChat}
                  keyExtractor={(item,index) => index.toString()}
                />
                <View style={styles.container}>
                    <TextInput
                        onChangeText={(text) => this.setState({ textMessage: text })}
                        value={this.state.textMessage}
                        placeholder='type message ....' 
                        style={styles.input}
                        multiline={true}/>
                    <TouchableOpacity onPress={this.sendMessage} style={{padding: 15}}>
                        <Icon name='md-send' size={35} color='#6ea0f0' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
  
    },
    input: {
        borderRadius: 5,
        justifyContent: 'center',
        borderWidth: 1,
        margin: 5,
        alignItems: 'center',
        color: '#454545',
        borderColor: '#d6d4d4',
       paddingHorizontal: 20,
       width: '80%'
    },
    btn : {
        fontSize : 20
    }
})